import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { InputSearch, SearchButtonLink, SearchWrapper } from './InputSearch.styles';
import { ReactComponent as SearchIcon } from '../../../images/search.svg';
import { ROUTES } from '../../../utils/constants';

export function InpurtSearch() {
  const [userInput, setUserInput] = useState('');
  const navigate = useNavigate();

  const handleInputSearch = (e) => {
    const value = e.target.value;
    setUserInput(value);
  }

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      const value = e.target.value;
      const goToRoute = `${ROUTES.searchResults}?q=${value}`;
      navigate(goToRoute)
    }
  }

  return(
    <SearchWrapper>
      <InputSearch
        type="text"
        placeholder="Search"
        value={userInput}
        onChange={handleInputSearch}
        onKeyDown={handleKeyDown}
      />
      <SearchButtonLink type='submit'
        to={`${ROUTES.searchResults}?q=${userInput}`}
      >
        <SearchIcon />
      </SearchButtonLink>
    </SearchWrapper>
  );
}
