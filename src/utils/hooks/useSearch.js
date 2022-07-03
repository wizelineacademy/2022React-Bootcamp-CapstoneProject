import { useState, useEffect } from "react";
import { API_BASE_URL } from "../constants";
import { useLatestAPI } from "./useLatestAPI";
import { createProductAdapter } from "./../../adapters";

export function useSearch(text, page) {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [searchProducts, setSearchProducts] = useState(() => ({
    data: {},
    isLoading: true,
  }));

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getFeaturedProducts() {
      try {
        setSearchProducts({ data: {}, isLoading: true });

        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            `[[at(document.type, "product")]]`
          )}&q=${encodeURIComponent(
            `[[fulltext(my.product.name, "${text}")]]`
          )} &lang=en-us&pageSize=12&page=${page}`,
          {
            signal: controller.signal,
          }
        );
        const data = await response.json();
        const dataAdapted = createProductAdapter(data);
        dataAdapted.totalPages = data.total_pages;

        setSearchProducts({ data: dataAdapted, isLoading: false });
      } catch (err) {
        setSearchProducts({ data: {}, isLoading: false });
        console.error(err);
      }
    }

    getFeaturedProducts();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading, text, page]);

  return searchProducts;
}
