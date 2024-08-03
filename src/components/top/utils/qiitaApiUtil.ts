"use server";
import { QIITA_USER_TOKENS } from "@/config";
import { QiitaPostResponse } from "../type";
import { JSDOM } from "jsdom";

const fetchQiitaPosts = async (token?: string) => {
  if (!token) return [];

  try {
    const response = await fetch(
      "https://qiita.com/api/v2/authenticated_user/items",
      {
        next: { revalidate: 24 * 60 * 60 },
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch Qiita posts");
    }
    return await response.json();
  } catch (error) {
    return [];
  }
};

const getOgpUrls = async (qiitaPosts: QiitaPostResponse[]) => {
  const ogpUrls: string[] = [];
  for (let i = 0; i < qiitaPosts.length; i++) {
    const { url } = qiitaPosts[i];

    const res = await fetch(url);
    const text = await res.text();

    const jsdom = new JSDOM();
    const el = new jsdom.window.DOMParser().parseFromString(text, "text/html");
    const headEls = el.head.children;

    Array.from(headEls).map((v: any) => {
      const prop = v.getAttribute("property");
      if (!prop) return;
      if (prop === "og:image") {
        ogpUrls.push(v.getAttribute("content") ?? "");
      }
    });
  }
  return ogpUrls;
};

const parseQiitaPosts = (
  qiitaPosts: QiitaPostResponse[],
  ogpUrls: string[]
) => {
  return qiitaPosts.map(
    ({ id, likes_count, url, title, created_at }, index) => {
      const dateString = new Date(created_at).toLocaleString();
      return {
        id,
        likesCount: likes_count,
        ogpImageUrl: ogpUrls[index],
        url,
        title,
        createdAt: dateString.slice(0, dateString.length - 3),
      };
    }
  );
};

export const getQiitaPosts = async () => {
  const combinedData: QiitaPostResponse[] = [];
  const result = await Promise.all(
    QIITA_USER_TOKENS.map((token) => fetchQiitaPosts(token))
  );

  // 新しく投稿された4件だけを取得
  result.forEach((data) => {
    combinedData.push(...data);
  });
  combinedData.sort(
    (a, b) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );
  const filteredData = combinedData.slice(0, 4);

  const ogpUrls = await getOgpUrls(filteredData);
  const parsedQiitaPosts = parseQiitaPosts(filteredData, ogpUrls);

  return {
    qiitaPosts: parsedQiitaPosts,
    hasQiitaPosts: parsedQiitaPosts.length > 0,
  };
};
