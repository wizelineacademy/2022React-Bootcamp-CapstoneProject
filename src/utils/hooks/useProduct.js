import { useState, useEffect } from "react";
import { API_BASE_URL } from "../constants";
import { useLatestAPI } from "./useLatestAPI";
import { createProductAdapter } from "./../../adapters";

export function useProduct(productId) {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [product, setProduct] = useState(() => ({
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
        setProduct({ data: {}, isLoading: true });
        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            `[[at(document.id, "${productId}")]]`
          )}&lang=en-us`,
          {
            signal: controller.signal,
          }
        );

        const data = await response.json();

        const dataAdapted = createProductAdapter(data);

        setProduct({ data: dataAdapted[0], isLoading: false });
      } catch (err) {
        setProduct({ data: {}, isLoading: false });
        console.error(err);
      }
    }

    getFeaturedProducts();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading, productId]);

  return product;
}
