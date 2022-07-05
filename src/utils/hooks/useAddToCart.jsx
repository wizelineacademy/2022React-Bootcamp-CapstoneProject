import { useState  } from 'react';

export const useHandleClick = (
  stock,
  shoppingCart,
  setShoppingCart,
  name,
  url,
  alt,
  price
  ) => {

  let [latestStock, setLatestStock] = useState(stock);
  
  function handleClick() {
    
    if (latestStock > 0) {
      setLatestStock(latestStock -= 1)
      setShoppingCart([...shoppingCart,
        {
          name,
          url,
          alt,
          price,
          amount: 1,
        }])
      } else {
        alert('Sorry, item out of stock!')
        return;
      }
    }

    return handleClick;
  }
