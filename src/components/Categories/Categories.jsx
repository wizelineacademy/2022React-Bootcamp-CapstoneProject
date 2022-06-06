import React from 'react'
import {CategoriesContainer} from './Categories.styled';
import categoryImg from '../../bath.jpg';
export default function Categories() {
    return (
        <CategoriesContainer>
            <div className="card-container">
            <div className="card"  style={{ backgroundImage:`url(${categoryImg})` }}>
                <div className="card-text" >
                    <h3>Bed & Bath</h3>
                </div>
            </div>
            <div className="card" style={{ backgroundImage:`url(${categoryImg})` }}>
                <div className="card-text">
                    <p>Lighting</p>
                </div>
            </div>
            <div className="card" style={{ backgroundImage:`url(${categoryImg})` }} >
                <div className="card-text">
                    <p>Kitchen</p>
                </div>
            </div>
            <div className="card" style={{ backgroundImage:`url(${categoryImg})` }}>
                <div className="card-text">
                    <p>Furniture</p>
                </div>
            </div>
            <div className="card" style={{ backgroundImage:`url(${categoryImg})` }}>
                <div className="card-text">
                    <p>Decorate & Organize</p>
                </div>
            </div>
            </div>
        </CategoriesContainer>
    )
}


