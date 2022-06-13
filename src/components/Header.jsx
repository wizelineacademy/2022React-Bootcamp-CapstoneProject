import logo from '../assets/logo.svg';
import { Wrapper } from "./header.styled";

import CartButtons from './CartButtons';

const Header = ({ switchNavigation }) => {
	return (
		<Wrapper>
			<div className='nav-center'>
        <div className='nav-header'>
					<a
						href='#/'
						onClick={ ev => {ev.preventDefault(); switchNavigation("HOME");} }
					>
						<img src={logo} alt="Company Brand" />
					</a>
        </div>
				<CartButtons />
      </div>
		</Wrapper>
	 );
}

export default Header;