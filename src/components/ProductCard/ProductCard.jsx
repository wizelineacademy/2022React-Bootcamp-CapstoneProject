import React from 'react';

import {ProductHolder} from './ProductCard.styled';
import {ReactComponent as HearthIcon} from '../../assets/corazon.svg';
import {ReactComponent as HeartFillIcon} from '../../assets/corazonFill.svg';


export default function ProductsList({data}){
  // console.log(data);

	return (
     <ProductHolder className="flxCell3 flxCell4Md flxCell6Sm round6 p20 pL5Xs pR5Xs pB10Xs">
       <p className="txtC">{data.data.category.slug}</p>
       <div className="imgHolder rltv">
         <img 
           className="mainImg absS anim3 imgContain"
           src={data.data.mainimage.url} 
           alt={data.data.name} />
         <img 
           className="secondImg absS anim3 imgContain"
           src={data.data.images[1]?.image.url} 
           alt={data.data.name+'2'} />
       </div>
       <h3 className="txtC txtS4 pB5">{data.data.name}</h3>
       <p className="price txtS3 txtC">$ {data.data.price}</p>
       <div className="buttonsHolder pT20 flxR ordC flxNoWrap">
         <button className="button rltv wishBtn round colorBBlack mR20 mR10Xs">
           <HearthIcon className="wish posC abs mAuto anim3 colorSvgWhite" />
           <HeartFillIcon className="wishFill posC abs mAuto anim3 colorSvgWhite" />
         </button>
         <a href="/" className="button colorBBlack colorWhite cursor moreBtn">View More</a>
       </div>
       
     </ProductHolder>
	);
}