import { useState, useEffect } from "react";
import { API_BASE_URL } from "../constants";
import { useLatestAPI } from "./useLatestAPI";
import { createProductAdapter } from "./../../adapters";
import { getFilterProducts } from "./../getFilterProducts";

export function useProducts(page, filters) {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [products, setProducts] = useState({
    data: {},
    isLoading: true,
  });

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getFeaturedProducts() {
      try {
        setProducts({ data: {}, isLoading: true });

        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            `[[at(document.type, "product")]]`
          )}&lang=en-us&pageSize=12&page=${page ?? 1}`,
          {
            signal: controller.signal,
          }
        );

        //Format original
        const data = await response.json();

        //Format only with the necessary information about the product
        let dataAdapted = createProductAdapter(data);

        //Data filter above the filters
        dataAdapted = getFilterProducts(dataAdapted, filters);

        dataAdapted.totalPages = data.total_pages;

        setProducts({ data: dataAdapted, isLoading: false });
      } catch (err) {
        setProducts({ data: {}, isLoading: false });
        console.error(err);
      }
    }

    getFeaturedProducts();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading, page, filters]);

  return products;
}
