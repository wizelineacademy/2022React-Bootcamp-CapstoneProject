import * as React from 'react';

const CartContext = React.createContext();

function cartReducer(state, action) {
    debugger;
    switch (action.type) {
        case 'addItem': {
            const { id, qty } = action.payload;
            const itemQtyExisting = state.items[id] || 0;
            return {
                itemsCount: state.itemsCount + qty,
                items: { ...state.items, [id]: qty + itemQtyExisting },
            };
        }
        case 'deleteItem': {
            const { id, qty } = action.payload;
            const itemQtyExisting = state.items[id] || 0;
            const finalQty = itemQtyExisting - qty;
            if (finalQty === 0) {
                return {
                    itemsCount: state.itemsCount - qty,
                    items: { ...state.items.filter((item) => item.id !== id) },
                };
            } else {
                return {
                    itemsCount: state.itemsCount - qty,
                    items: { ...state.items, [id]: finalQty },
                };
            }
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
}

function CountProvider({ children }) {
    const [state, dispatch] = React.useReducer(cartReducer, {
        itemsCount: 0,
        items: {},
    });
    // NOTE: you *might* need to memoize this value
    // Learn more in http://kcd.im/optimize-context
    const value = { state, dispatch };
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
}

function useCart() {
    const context = React.useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CountProvider');
    }
    return context;
}

export { CountProvider, useCart };
