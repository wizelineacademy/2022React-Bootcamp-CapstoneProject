import React from 'react';

import MainBanner from '../../components/MainBanner/MainBanner';
import CardSlider from '../../components/CardSlider/CardSlider';
import ProductsList from '../../components/ProductsList/ProductsList';


// import { useFeaturedBanners } from '../../utils/hooks/useFeaturedBanners';

export default function Home({data}){

    
    console.log(data);

	return (

       <section className="home">
       	  
       	  <MainBanner banners={data?.featureBanners.results} />
          
          <CardSlider  cards={data?.categories.results} title='Categories' />

          <ProductsList products={data?.featureProducts.results} title='Best Buys' />
       	  

       </section>
	);
}