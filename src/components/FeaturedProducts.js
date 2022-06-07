import styled from 'styled-components';
import FeatureProduct from './FeatureProduct.js'

const StyledCategories = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 540px) {
    grid-template-columns: repeat(1, 1fr);
  }
  margin-bottom: 2%;
  margin-top: 2%;
`;

const TypeTitle = styled.h3`
  font-size: 4vh;
`;

function FeaturedProducts ({ featuredProducts }){
    return (
      <div>
        <TypeTitle> Featured Products </TypeTitle>
        <StyledCategories>
          {featuredProducts?.results.map(product => (
            <FeatureProduct key={product.id} product={product}/>
          ))}
        </StyledCategories>
      </div>
    );
  };

export default FeaturedProducts;