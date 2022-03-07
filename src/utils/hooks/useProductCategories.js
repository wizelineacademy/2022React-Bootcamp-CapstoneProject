import { useState, useEffect } from "react";
import { API_BASE_URL } from "../constants";
import { useLatestAPI } from "./useLatestAPI";

export function useProductCategories() {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [productCategories, setProductCategories] = useState(() => ({
    data: {},
    isLoading: true,
  }));

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getProductCategories() {
      try {
        setProductCategories({ data: {}, isLoading: true });

        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            '[[at(document.type,"category")]]'
          )}&lang=en-us&pageSize=10`,
          {
            signal: controller.signal,
          }
        );
        const data = await response.json();

        setProductCategories({ data, isLoading: false });
      } catch (err) {
        setProductCategories({ data: {}, isLoading: false });
        console.error(err);
      }
    }

    getProductCategories();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading]);

  return productCategories;
}
