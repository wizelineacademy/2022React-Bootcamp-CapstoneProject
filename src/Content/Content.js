import React from 'react';
import Banners from '../mocks/en-us/featured-banners.json'
import Products from '../mocks/en-us/featured-products.json'
import Categories from '../mocks/en-us/product-categories.json'
import './Content.css'

export default function Content() {

    function Banner({title, description, img, alt, id, index}){
        return (
            <div className='banner' key={id}>
                <div >{index+1} / {Banners.results.length}</div>
                <img src={img} alt={alt}/>
                <div >{title}</div>
            </div>
        )
    }

    function Category({category, id}){
        return (
            <div className='category' key={id}>
                <div >{category}</div>
            </div>
        )
    }

    function Product({title, category, price, img, alt, id, index}){
        return (
            <div className='product' key={id}>
                <div >{index+1} / {Products.results.length}</div>
                <img src={img} alt={alt}/>
                <div >{title}</div>
                <div >{category}</div>
                <div> ${price}</div>
            </div>
        )
    }

    return(
        <div className='content-container'>        
            <div className='banner-container'>
                {
                    <>{Banners.results.map((banner, i)=>{
                        return <Banner 
                                    title={banner.data.title} 
                                    description={banner.data.description[0].text}
                                    img={banner.data.main_image.url}
                                    alt={banner.data.main_image.alt}
                                    key={banner.id}
                                    index={i}
                                />
                    })}</>
                }
            </div>
            <div className='category-container'>
                {
                    <>{Categories.results.map((product, i)=>{
                        return <Category 
                                    category={product.data.name}
                                    key={product.id}
                                    index={i}
                                />
                    })}</>
                }
            </div> 
            <div className='product-container'>
                {
                    <>{Products.results.map((product, i)=>{
                        return <Product
                                    title={product.data.name} 
                                    category={product.data.category.slug}
                                    price={product.data.price}
                                    img={product.data.mainimage.url}
                                    alt={product.data.mainimage.alt}
                                    key={product.id}
                                    index={i}
                                />
                    })}</>
                }
            </div>     
        </div>
    )
}