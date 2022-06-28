import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../../utils/constants';
import { useGetSearch } from '../../../../utils/hooks/useFetch';
import {
  AsideBar,
  AsideItem,
  ClearFilters,
  ClearFiltersWrapper,
  Spiner } from '../../ProductList.styles';

export default function AsideBarComponent({ 
  handleClickAsideBar,
  filters,
  clearFilterClick,
}) {

  const documentType = '"category"';
  const { data, isLoading } = useGetSearch({documentType, pageSize: 30});

  const allCategories = data?.results?.map((item, i) => {
    const name = item.data.name;
    const isActive = filters.includes(name.replaceAll(' & ', '--'));
    
    return(
      <Link 
        onClick={handleClickAsideBar}
        to={ROUTES.productList}
        key={`categorieItem-${i}`}
        style={{textDecoration: 'none'}} 
        name={name}
      >
        <AsideItem isActive={isActive}>
          {name}
        </AsideItem>
      </Link>)
  })

  return (
    <AsideBar>
      {isLoading
        ?<Spiner />
        : allCategories
      }
      {filters.length
        ? (<ClearFiltersWrapper to={ROUTES.productList} >
            <ClearFilters onClick={clearFilterClick}>
              Clear Filters
            </ClearFilters>
          </ClearFiltersWrapper>)
        : null
      }
    </AsideBar>
  );
}

