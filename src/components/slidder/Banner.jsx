import React, {useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import info from './featured-banners.json'



export const Banner = () => {

    const newData = JSON.parse(JSON.stringify(info.results))
    const listRef = useRef(null)

    const scrollLeft =() =>{
        if(listRef.current){
            listRef.current.scrollBy({
                top:0,
                left:200,
                behavior: "smooth",
            })
        }
    }
    const scrollRight =() =>{
        if(listRef.current){
            listRef.current.scrollBy({
                top:0,
                left:-200,
                behavior: "smooth",
            })
        }
    }

    return (
    
        <div className='slide-container'  >
               <FontAwesomeIcon 
                   className='slidder-icon' 
                   icon={ faArrowCircleLeft }  
                  onClick={ scrollLeft } 
                />
            <div className = 'items-container'  ref={ listRef }  >
             
            {
                newData.map(( { data: { main_image } }, bannerIndex)=> {
        
                    return   (
                         <div className='single-item'>
                            <img 
                                className='banner-images'
                               key={ bannerIndex } 
                               src={ main_image.url} 
                                alt='furniture'
                            />    
                        </div>
                   
                   )   
                    }


               ) }
           </div>
                <FontAwesomeIcon 
                    className='slidder-icon'
                    icon={ faArrowCircleRight }  
                    onClick={ scrollRight } 
                 />
       </div>
             )
             
         }
