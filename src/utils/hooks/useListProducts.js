import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';

export function useListProducts() {
    const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
    const [products, setProducts] = useState(() => ({
        data: {},
        isLoading: true,
    }));

    useEffect(() => {
        if (!apiRef || isApiMetadataLoading) {
            return () => { };
        }

        const controller = new AbortController();

        async function getListProducts() {
            try {
                setProducts({ data: {}, isLoading: true });

                const response = await fetch(
                    `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
                        '[[at(document.type, "product")]]'
                    )}&lang=en-us`,
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

        getListProducts();

        return () => {
            controller.abort();
        };
    }, [apiRef, isApiMetadataLoading]);

    return products;
}