import React , {useState, useEffect} from 'react'
import {CardContainer, CategoriesWrapper, Card} from './Categories.styled';
import {useFeaturedCategories} from '../../utils/hooks/useFeaturedCategories';
import { Link } from 'react-router-dom';

export default function Categories() {
    const [categories, setCategories] = useState([]); 
    const {data, isLoading} = useFeaturedCategories();
    
    useEffect(() => {
        if(data.results) {
            setCategories(data.results);
        }
    }, [data])

    return (
        
        <CategoriesWrapper>
            {!isLoading && (  
            <CardContainer>
                {categories.map((category, index) => (
                <Link to={`/product-list?category=${category.slugs[0]}` }>
                <Card key={index} 
                    style={{ backgroundImage:`url(${category.data.main_image.url})` }}>
                    <div className="card-text" >
                        <h3>{category.data.name}</h3>
                    </div>
                </Card>
                </Link>
                ))}
            </CardContainer>
            )}
        </CategoriesWrapper>
    )
};


