import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';

export function useProductDetail(id) {
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

        async function getProductDetail() {
            try {
                setProduct({ data: {}, isLoading: true });

                const response = await fetch(
                  `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
                    '[[at(document.id,"'+id+'")]]'
                  )}&lang=en-us&pageSize=12`,
                    {
                        signal: controller.signal,
                    }
                );
                const data = await response.json();

                setProduct({ data, isLoading: false });
            } catch (err) {
                setProduct({ data: {}, isLoading: false });
                console.error(err);
            }
        }

        getProductDetail();

        return () => {
            controller.abort();
        };
    }, [apiRef, isApiMetadataLoading, id]);
    return product;
}
