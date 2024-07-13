import React, { useState, useEffect } from "react";
import { ParsedQiitaPost, QiitaPostResponse } from "../type";
import { QIITA_USER_TOKENS } from "@/config";
import { parseQiitaPosts } from "../utils/qiitaApiUtil";

const useQiitaPosts = () => {
  const [qiitaPosts, setQiitaPosts] = useState<ParsedQiitaPost[]>([]);

  useEffect(() => {
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
        const data: QiitaPostResponse[] = await response.json();
        return parseQiitaPosts(data);
      } catch (error) {
        return [];
      }
    };

    const fetchData = async () => {
      const combinedData: ParsedQiitaPost[] = [];
      const result = await Promise.all(
        QIITA_USER_TOKENS.map((token) => fetchQiitaPosts(token))
      );

      result.forEach((data) => {
        combinedData.push(...data);
      });
      combinedData.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      const viewData = combinedData;
      setQiitaPosts(viewData.slice(0, 4));
    };

    fetchData();
  }, []);

  return { qiitaPosts };
};

export default useQiitaPosts;
