import React from 'react'
import CategoriesData from '../../mocks/en-us/product-categories.json';

import '../../stylesheets/homepage/content.scss';

function Categories() {
    return (
        <div className='categories-container'>
            {CategoriesData.results.map((category, i) =>
                <div key={category.id} className='category'>
                    <img alt="category-img" src={category.data.main_image.url} />
                </div>
            )}
        </div>
    )
}

export default Categories