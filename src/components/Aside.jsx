import featuredCategories from '../utils/mocks/product-categories.json';
import { Wrapper } from "./aside.styled";
import { Category } from './';

const Aside = ({ switchActiveCat, activecat }) => {

	/* RESULTS DESTRUCTURING */
	const { results } = featuredCategories;

	/* SLIDES CATEGORIES */
	const itemsCategories = results.map((category, index) => (
		<Category
			category={ category }
			key={ category.id }
			switchActiveCat={ switchActiveCat }
			activecat={ activecat }
		/>
	));

  return (
    <Wrapper>
			<ul>
				{ itemsCategories }
			</ul>
    </Wrapper>
  )
}

export default Aside
