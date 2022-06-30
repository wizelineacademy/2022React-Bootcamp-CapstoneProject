import { URLS, API_BASE_URL } from '../../utils/constants';
import { AddToCartButton } from '../ProductDetail/ProductDetail.styles';
import {
  Category,
  Description,
  Image,
  ResultWrapper,
  Price,
  Title,
  } from './SearchResults.styles';

export function fetchSearch(searchQuery, setResult) {
  const getData = async () => {
    const url = `${API_BASE_URL}${URLS.search.replace('{searchQuery}', searchQuery)}`;
    console.log(url);
    const data = await fetch(url);
    const response = await data.json();
    setResult(response);
  };

  try {
    getData();
  } catch (error) {
    console.error(error);
  }
}

export function searchCardGenerator(result) {

  return result?.results?.map((item, i) => {
    const { data: {
      name, price, short_description, category: {
        slug,
      }, mainimage: {
        url, alt,
      },
    },

    } = item;

    return (
      <ResultWrapper key={`search-result-${i}`}>
        <Image src={url} alt={alt} />
        <Title>{name}</Title>
        <Category>{slug.replace('--', ' & ')}</Category>
        <Description>{short_description}</Description>
        <Price>$ {price}</Price>
        <AddToCartButton>ADD TO CART</AddToCartButton>
      </ResultWrapper>
    );
  });
}