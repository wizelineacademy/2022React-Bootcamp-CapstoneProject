import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';

export function useSearch(searchTerm) {
    const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
    const [search, setSearch] = useState(() => ({
        data: {},
        isLoading: true,
    }));

    useEffect(() => {
        if (!apiRef || isApiMetadataLoading) {
            return () => { };
        }

        const controller = new AbortController();

        async function getSearch() {
            try {
                setSearch({ data: {}, isLoading: true });

                const response = await fetch(
                    `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
                        `[[at(document.type, "product")]
                        [fulltext(my.product.name, "${searchTerm}")]]`
                    )}&lang=en-us&pageSize=20`,
                    {
                        signal: controller.signal,
                    }
                );
                const data = await response.json();

                setSearch({ data, isLoading: false });
            } catch (err) {
                setSearch({ data: {}, isLoading: false });
                console.error(err);
            }
        }

        getSearch();

        return () => {
            controller.abort();
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [apiRef, isApiMetadataLoading]);

    return search;
}