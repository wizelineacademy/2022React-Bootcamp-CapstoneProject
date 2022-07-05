import { useState, useEffect } from "react";
import { API_BASE_URL } from "../constants";
import { useLatestAPI } from "./useLatestAPI";

export function useGeneralRequest(request) {
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
    async function getRequest(request) {
      setResponse({ data: {}, isLoading: true });
      try {
        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&${request}`,
          {
            signal: controller.signal,
          }
        );
        const data = await response.json();
        setResponse({ data, isLoading: false });
      } catch (err) {
        console.error(err);
        throw new Error(`Something went wrong with the fetch request: ${err}`);
      }
    }

    getRequest(request);

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading]);

  return response;
}
