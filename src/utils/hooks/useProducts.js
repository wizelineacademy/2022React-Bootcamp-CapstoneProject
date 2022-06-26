import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';

export function useProducts(searchTerm,page) {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [products, setProducts] = useState(() => ({
    data: {},
    isLoading: true,
  }));

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();
    const searchTermQuery = searchTerm 
                            ?  `&q=${encodeURIComponent(`[[fulltext(document, "${searchTerm}")]]`)}`
                            :'';

    async function getProducts() {
      try {
        setProducts({ data: {}, isLoading: true });

        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&
q=${encodeURIComponent('[[at(document.type, "product")]]')}
${searchTermQuery}
          &lang=en-us&pageSize=12&page=${page}`,
          {
            signal: controller.signal,
          }
        );
        const data = await response.json();

        setProducts({ data, isLoading: false });
      } catch (err) {
        setProducts({ data: {}, isLoading: false });
        console.error(err);
      }
    }

    getProducts();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading,searchTerm, page]);

  return products;
}