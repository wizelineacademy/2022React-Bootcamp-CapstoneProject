import { NavLink } from 'react-router-dom';
import { useFilterContext } from '../../context/filter_context';
import logo from '../../assets/logo.svg';
import { Wrapper } from './header.styled';
import CartButtons from '../CartButtons/CartButtons';
import SearchInput from '../SearchInput/SearchInput';

function Header() {
  /*  CONTEXT DESTRUCTURING */
  const { clearFilters } = useFilterContext();

  return (
    <Wrapper>
      <div className="nav-center">
        <div className="nav-header">
          <NavLink
            to="/"
            onClick={() => {
              clearFilters();
            }}
          >
            <img src={logo} alt="Company Brand" />
          </NavLink>
        </div>
        <SearchInput />
        <CartButtons />
      </div>
    </Wrapper>
  );
}

export default Header;
