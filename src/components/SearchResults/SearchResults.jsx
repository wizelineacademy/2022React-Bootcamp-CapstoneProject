import React from 'react';
import {useParams} from 'react-router-dom';
export default function SearchResults() {
    let { product } = useParams();
    return (
        <div>
            {product}
        </div>
    )
}
