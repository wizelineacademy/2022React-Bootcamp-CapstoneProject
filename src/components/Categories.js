import styled from 'styled-components';
import ProductType from './ProductType.js';

const StyledCategories = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  @media (max-width: 540px) {
    grid-template-columns: repeat(2, 1fr);
  }
  margin-bottom: 2%;
`;

const TypeTitle = styled.h3`
  font-size: 4vh;
`;

function Categories ({ productCategories }){
    return (
      <div>
        <TypeTitle> Chose a Type of Product </TypeTitle>
        <StyledCategories>
          {productCategories?.results.map(category => (
            <ProductType key={category.id} category={category}/>
          ))}
        </StyledCategories>
      </div>
    );
  };

export default Categories;