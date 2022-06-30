import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { Wrapper } from './searchinput.styled';

function SearchInput() {
  const [wordSearch, setWordSearch] = useState();

  const updateState = (e) => {
    const textSearch = e.target.value;

    setWordSearch(textSearch);
  };

  const history = useNavigate();

  // Search dispatch
  const onSubmitSearch = (e) => {
    e.preventDefault();

    history(`/search/${wordSearch}`);
  };

  return (
    <Wrapper>
      <div className="section-center">
        <div className="content">
          <form
            className="contact-form"
            action="your form spree id"
            method="POST"
            onSubmit={onSubmitSearch}
          >
            <input
              type="text"
              className="form-input"
              placeholder="Search"
              name="search"
              onChange={updateState}
            />
            <button type="submit" className="submit-btn">
              <FaSearch />
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
}

export default SearchInput;
