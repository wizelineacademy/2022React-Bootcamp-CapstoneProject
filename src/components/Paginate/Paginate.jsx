import React, {useState} from 'react'
import {PaginateContainer} from './Paginate.styled';

export default function Paginate({pages, page, setCurrentPage}) {

    const eventHandler = (selectedPage) => {
        setCurrentPage(selectedPage)
    }

    /* useEffect(() => {
        if(currentPage !== page ){

        }
    }, [currentPage]) */

    return (
        <PaginateContainer>
            {
                Array(pages).fill(null).map((ele, index) => 
                <span  
                    onClick={() => eventHandler(index + 1)} 
                    className={page === index + 1 ? "isActive" : ''} >{index + 1} 
                </span>)
            }
          </PaginateContainer>
    )
}

