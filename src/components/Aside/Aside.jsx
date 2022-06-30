import { useCategoriesContext } from '../../context/categories_context';
import { useFilterContext } from '../../context/filter_context';
import { Wrapper } from './aside.styled';
import Category from '../Category/Category';

function Aside() {
  /*  CONTEXT DESTRUCTURING */
  const { featured_categories: featured } = useCategoriesContext();

  const { clearFilters } = useFilterContext();

  /* SLIDES CATEGORIES */
  const itemsCategories = featured.map((category) => (
    <Category category={category} key={category.id} />
  ));

  return (
    <Wrapper>
      <ul>
        {itemsCategories}
        <li>
          <a
            href="#/"
            onClick={(ev) => {
              ev.preventDefault();
              clearFilters();
            }}
          >
            All
          </a>
        </li>
      </ul>
    </Wrapper>
  );
}

export default Aside;
