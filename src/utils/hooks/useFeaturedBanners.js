/* eslint-disable no-nested-ternary */
/* eslint-disable import/prefer-default-export */
import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';

export function useFeaturedBanners({
  typeData = 'banner',
  size = 5,
  product = null,
  search = null
}) {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [featuredBanners, setFeaturedBanners] = useState(() => ({
    data: {},
    isLoading: true
  }));

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getFeaturedBanners() {
      try {
        setFeaturedBanners({ data: {}, isLoading: true });

        const type =
          typeData === 'banner'
            ? '[[at(document.type, "banner")]]'
            : typeData === 'category'
            ? '[[at(document.type, "category")]]'
            : typeData === 'product'
            ? '[[at(document.type, "product")]]'
            : typeData === 'single'
            ? `[[at(document.id, "${product}")]]`
            : typeData === 'search'
            ? `[[at(document.type, "product")]]&q=[[fulltext(document, "${search}")]]`
            : null;

        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            `${(function () {
              return type;
            })()}`
          )}&lang=en-us&pageSize=${size}`,
          {
            signal: controller.signal
          }
        );

        const data = await response.json();

        setFeaturedBanners({ data, isLoading: false });
      } catch (err) {
        setFeaturedBanners({ data: {}, isLoading: false });
        console.error(err);
      }
    }

    getFeaturedBanners();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading]);

  return featuredBanners;
}
