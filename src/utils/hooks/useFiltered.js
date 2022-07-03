import { useState, useEffect } from "react";
import { API_BASE_URL } from "../constants";
import { useLatestAPI } from "./useLatestAPI";
import { createProductAdapter } from "./../../adapters";

export function useFiltered(categories, page) {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [featuredProducts, setFeaturedProducts] = useState(() => ({
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
        setFeaturedProducts({ data: {}, isLoading: true });

        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            `[[at(document.type, "product")]]`
          )}&q=${encodeURIComponent(
            `[[any(my.product.category, [${categories.map(
              (categorie) => `"${categorie}"`
            )}] )]]`
          )}&lang=en-us&pageSize=12&page=${page}`,
          {
            signal: controller.signal,
          }
        );

        const data = await response.json();
        const dataAdapted = createProductAdapter(data);
        dataAdapted.totalPages = data.total_pages;

        setFeaturedProducts({ data: dataAdapted, isLoading: false });
      } catch (err) {
        setFeaturedProducts({ data: {}, isLoading: false });
        console.error(err);
      }
    }

    getFeaturedProducts();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading, categories, page]);

  return featuredProducts;
}
