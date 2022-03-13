import { useState } from 'react';

export const CategoryButton = ({categoryName, activeCategory, setActiveCategory}) => {
    const [activeClass, setActiveClass] = useState(false);

    return  (
        <button className={`categoryClick ${activeClass === 
        true ? "active" : ""}`} 
        onClick={() => {
            switch(activeCategory) {
                case categoryName:
                    setActiveCategory("");
                    break;
                case "":
                    setActiveCategory(categoryName);
                    break;
                default:
                    setActiveCategory(categoryName);
                    break;
            }
            setActiveClass(!activeClass);
            }
            }>
            <p className={categoryName}>{categoryName}</p>
        </button>
    )
}