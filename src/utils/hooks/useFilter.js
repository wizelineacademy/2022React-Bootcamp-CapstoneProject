/* eslint-disable max-len */
export const useProductsFilter = (tags) => {
 
  const request1 = fetch(`https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=YZaBvBIAACgAvnOP&q=[[at(document.type,"product")]]&q=[[at(document.tags,[${[...tags]}])]]&lang=en-us&pageSize=16`);
  request1
      .then((res) => {
          // console.log('res', res)
          return res.json();
      })
      .then(data => console.log('data', data))
      .catch(error => console.error);
}
