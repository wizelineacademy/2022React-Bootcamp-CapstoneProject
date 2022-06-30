import React, { useState } from 'react';
import { InputSearch, SearchButtonLink, SearchWrapper } from './InputSearch.styles';
import { ReactComponent as SearchIcon } from '../../../images/search.svg';
import { ROUTES } from '../../../utils/constants';

export function InpurtSearch() {
  const [userInput, setUserInput] = useState('');

  const handleInputSearch = (e) => {
    const value = e.target.value;
    setUserInput(value);
  } 

  return(
    <SearchWrapper>
      <InputSearch
        type="text"
        placeholder="Search"
        value={userInput}
        onChange={handleInputSearch}
      />
      <SearchButtonLink type='submit'
        to={`${ROUTES.searchResults}?q=${userInput}`}
      >
        <SearchIcon />
      </SearchButtonLink>
    </SearchWrapper>
  );
}
