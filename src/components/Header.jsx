import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart}  from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import greenSofa from './images/greenSofa.png'
import lamp from './images/lamp.png'
import lamp2 from './images/lamp2.png'
import logo from './images/logo.png'


export const  Header = () => {
    return(
        <header>
            <img  className='logo'src={logo} alt="Logo" />
            <div className="header-elements">
                  <p className="slogan">Find Better Furniture  For Better Living </p>
                  <div className="search-container">
                      <input 
                         className="search-main"
                         type="search" 
                         name="Search" 
                         placeholder="Search" 
                         />
                      <FontAwesomeIcon className='search' icon={ faSearch } /> 
                  </div>
                  <FontAwesomeIcon className='cart' icon={ faShoppingCart } > </FontAwesomeIcon>
            </div>
            <img  className='green-sofa'src={greenSofa} alt="Sofa Beige" />
            <img  className='lamp'src={lamp} alt="Lamp" />  
            <img  className='lamp2'src={lamp2} alt="Lamp" />  
        </header>
    )
   
}