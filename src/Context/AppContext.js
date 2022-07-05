import { createContext, useState } from 'react';

const AppContext = createContext();

export { AppContext };

export const AppContextProvider = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState([]);

  const contextData = {
    shoppingCart,
    setShoppingCart,
  };

    return (
        <AppContext.Provider value={ contextData }>
            {children}
        </AppContext.Provider>
    );
}
