export const API_BASE_URL = 'https://wizeline-academy.cdn.prismic.io/api/v2';

export const ROUTES = {
  base: '/2022React-Bootcamp-CapstoneProject/',
  home: '/2022React-Bootcamp-CapstoneProject/home',
  productList: '/product',
  productDetail: '/product',
  searchResults: '/search',
  shoppingCart: '/cart',
}

export const URLS = {
  // eslint-disable-next-line max-len
  search: '/documents/search?ref={apiRef}&q=[[at(document.type, "product")]]&q=[[fulltext(document, "{searchTerm}")]]&lang=en-us&pageSize=88',
}
