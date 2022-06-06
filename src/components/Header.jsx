import logo from '../assets/logo.svg';
import { Wrapper } from "./_header";

import CartButtons from './CartButtons';

const Header = () => {
	return (
		<Wrapper>
			<div className='nav-center'>
        <div className='nav-header'>
					<img src={logo} alt="Company Brand" />
        </div>
				<CartButtons />
      </div>
		</Wrapper>
	 );
}

export default Header;