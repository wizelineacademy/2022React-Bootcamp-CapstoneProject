import React from "react";
import SlideShow from "./home/SlideShow";
import { Gridf } from "./home/gridf";
import { Grid } from "./home/grid";
import  Product from "./products/products"


export const BodyDiv = ({route,onchange}) => {
  return (
    <body>
      {
        route === '/' && (
          <>
            <SlideShow />
            <Gridf />
            <Grid route={route} onchange={onchange}/>
          </>
        )
      }
      {
        route === '/products' && (
          <>
            <Product />
          </>
        )
      }
    </body>
  );
};


