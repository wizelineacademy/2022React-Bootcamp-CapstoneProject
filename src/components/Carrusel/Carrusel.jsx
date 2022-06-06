import React, { useEffect, useState } from 'react';
import CarruselStyle from './CarruselStyle'
import data from '../../mocks/en-us/featured-banners.json';

const Carrusel = () => {
    const { results } = data;

    const [index, setIndex] = useState(0);
    
    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if( index === results.length -1  ){
                index = 0;
                setIndex(0);
                return;
            }
            index++;
            setIndex( index );

        }, 5000);
        return () => clearInterval(interval);

    }, [results.length] );


    return (
        <CarruselStyle>
            <div className='slider'>
                <img 
                    src={results[index].data.main_image.url} 
                    alt={ results[index].data.main_image.alt } 
                />
                <label htmlFor="">
                    {results[index].data.main_image.alt}

                </label>
                
            </div>
        </CarruselStyle>
    )
}

export default Carrusel