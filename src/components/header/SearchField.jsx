import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Styles = styled.div`
  input {
    padding: 6px;
    margin-top: 8px;
    font-size: 17px;
    border: none;
  }
`
const SearchField = props => {
	const { changeSearchField } = props;
	const [inputValue, setInputValue] = useState('');
	
	const handleInputChange = (e) => {
		setInputValue(e.target.value);
		changeSearchField(e.target.value);
	}
	
	return (
		<Styles>
			<input
				type="text"
				placeholder="Search.."
				name="search"
				value={inputValue}
				onChange={handleInputChange}
			/>
		</Styles>
	);
};

SearchField.propTypes = {
	changeSearchField: PropTypes.func.isRequired,
};

export default SearchField;
