import React from 'react';
import { Wrapper } from './loader.styled';

const Loader = () => {
  return (
    <Wrapper>
			<div className="half-circle-spinner">
				<div className="circle circle-1" />
				<div className="circle circle-2" />
			</div>
    </Wrapper>
  );
}

export default Loader;