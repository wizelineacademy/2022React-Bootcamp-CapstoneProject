export const API_BASE_URL = 'https://wizeline-academy.cdn.prismic.io/api/v2';

export const ROUTES = {
  base: '/',
  home: '/home',
  productList: '/product',
  productDetail: '/product',
  searchResults: '/search',
}

export const URLS = {
  // eslint-disable-next-line max-len
  search: '/documents/search?ref=YZaBvBIAACgAvnOP&q=[[at(document.type, "product")]]&q=[[fulltext(document, "{searchQuery}")]]&lang=en-us&pageSize=20',
}