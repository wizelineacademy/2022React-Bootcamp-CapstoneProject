import React from 'react'
import {CategoriesContainer} from './Categories.styled';

export default function Categories({categories}) {

    return (
        <CategoriesContainer>
            <div className="card-container">
                {categories.map((category, index) => (
                <div className="card" key={index} 
                    style={{ backgroundImage:`url(${category.data.main_image.url})` }}>
                    <div className="card-text" >
                        <h3>{category.data.name}</h3>
                    </div>
                </div>
                ))}
            </div>
        </CategoriesContainer>
    )
}


