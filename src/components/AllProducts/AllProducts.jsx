import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Aside from '../Aside/Aside';
import InsideProducts from '../InsideProducts/InsideProducts';
import Pagination from '../Pagination/Pagination';
import { Wrapper } from './allproducts.styled';
import { useFilterContext } from '../../context/filter_context';

function AllProducts() {
  /*  CONTEXT DESTRUCTURING */
  const { filterParams } = useFilterContext();

  // GET PARAMS OF THE ROUTER
  const { id } = useParams();

  useEffect(() => {
    let unmounted = false;

    if (!unmounted) {
      filterParams(id);
    }

    return () => {
      unmounted = true;
    };
  }, []);

  return (
    <Wrapper className="inside">
      <h1>This is the Product List Page</h1>
      <Aside />
      <section className="products">
        <InsideProducts />
        <Pagination />
      </section>
    </Wrapper>
  );
}

export default AllProducts;
