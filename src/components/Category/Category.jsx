import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useFilterContext } from '../../context/filter_context';

function Category({ category }) {
  /*  CONTEXT DESTRUCTURING */
  const {
    filters: { activecategory },
    categoryActive,
    filterProducts
  } = useFilterContext();

  /* STATE OF CURRENT CLASS */
  const [currentClass, setCurrentClass] = useState(null);

  /* console.log('categories', activecategory); */

  /* CATEGORIES DESTRUCTURING */
  const {
    id,
    data: { name }
  } = category;

  /* USE EFFECT HOOK TO SWITCH THE ACTIVE CLASS */
  useEffect(() => {
    let unmounted = false;

    if (!unmounted) {
      const changeStateClass = () => {
        // eslint-disable-next-line no-nested-ternary
        const getChangeClass = activecategory
          ? activecategory.indexOf(id) !== -1
            ? 'active'
            : null
          : null;
        console.log(getChangeClass);
        setCurrentClass(getChangeClass);
      };
      changeStateClass();
    }

    return () => {
      unmounted = true;
    };
  }, [activecategory, id]);

  return (
    <li className={currentClass}>
      <a
        href="#/"
        onClick={(ev) => {
          ev.preventDefault();
          categoryActive(id);
          filterProducts();
        }}
        id={id}
        className={currentClass}
      >
        {name}
      </a>
    </li>
  );
}

Category.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  category: PropTypes.object.isRequired
};

export default Category;
