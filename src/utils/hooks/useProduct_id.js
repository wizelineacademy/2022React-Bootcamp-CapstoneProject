import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';

export function useProductId() {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [featuredProducts, setProductId] = useState(() => ({
    data: {},
    isLoading: true,
  }));

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getProductId() {
      try {
        setProductId({ data: {}, isLoading: true });

        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            '[[at(document.id, "productId")]]'
          )}lang=en-us&pageSize=1`,
          {
            signal: controller.signal,
          }
        );
        const data = await response.json();

        setProductId({ data, isLoading: false });
      } catch (err) {
        setProductId({ data: {}, isLoading: false });
        console.error(err);
      }
    }

    getProductId();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading]);

  return featuredProducts;
}
