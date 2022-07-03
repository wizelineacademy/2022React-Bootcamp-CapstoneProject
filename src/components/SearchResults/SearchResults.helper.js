import { ROUTES } from '../../utils/constants';
import { AddToCartButton } from '../AddToCartButton/AddToCartButton';
import {
  Category,
  Description,
  Image,
  ResultWrapper,
  Price,
  Title,
  } from './SearchResults.styles';

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

    const itemRoute = `${ROUTES.productDetail}/${item.id}`;

    return (
      <ResultWrapper key={`search-result-${i}`}>
        <Image src={url} alt={alt} />
        <Title to={itemRoute} state={item}>{name}</Title>
        <Category>{slug.replace('--', ' & ')}</Category>
        <Description>{short_description}</Description>
        <Price>$ {price}</Price>
        <AddToCartButton />
      </ResultWrapper>
    );
  });
}