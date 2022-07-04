import React from 'react';

export const ShoppingCartContext = React.createContext({
    items:[],
    updateItems: () => {},
});