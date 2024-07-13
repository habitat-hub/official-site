"use server";
import { QiitaPostResponse } from "../type";
import { JSDOM } from "jsdom";

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

export const parseQiitaPosts = async (qiitaPosts: QiitaPostResponse[]) => {
  const ogpUrls = await getOgpUrls(qiitaPosts);
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
