import React,{useState} from 'react';
import './Header.css'

export default function Header() {

    const [searchItem, setSearchItem] = useState("");

    const handleOnChange = (e) =>{
        setSearchItem(e.target.value);
    }

    return(
        <div className='header-container'>
            <div className='header'>
                <img
                    src={require('../Images/Header/furnitures.png').default}
                    alt="Logo"
                />
                <h1>Rusty Furniture</h1>
                <input 
                    type="text" 
                    placeholder="Search here" 
                    onChange={handleOnChange}
                    value={searchItem} 
                />
                <img
                    src={require('../Images/Header/shopping-cart.png').default}
                    alt="Shopping cart"
                />
            </div>
        </div>
    )
}