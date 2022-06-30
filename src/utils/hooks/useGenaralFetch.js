import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';

export function useGeneralFetch(url, searchInput) {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [response, setResponse] = useState(() => ({
    data: {},
    isLoading: true,
  }));

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getResponse() {
      try {
        setResponse({ data: {}, isLoading: true });

        const urlParams = url.replace('{apiRef}', apiRef).replace('{searchTerm}', searchInput);

        console.log(urlParams);

        const response = await fetch(
          `${API_BASE_URL}${urlParams}`,
          {
            signal: controller.signal,
          }
        );
        const data = await response.json();

        setResponse({ data, isLoading: false });
      } catch (err) {
        setResponse({ data: {}, isLoading: false });
        console.error(err);
      }
    }

    getResponse();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading]);

  return response;
}
