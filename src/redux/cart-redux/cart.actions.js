import Cartactiontypes from './cart.types'

export const toggleCartHidden =()=>({

type:Cartactiontypes.TOGGLE_CART_HIDDEN

});
export const addItem = item =>({
    type:Cartactiontypes.ADD_ITEM,
    payload:item
});

export const removeItem=item=>({

    type:Cartactiontypes.REMOVE_ITEM,
    payload:item
})


export const clearItemFromCart = item =>({


    type: Cartactiontypes.CLEAR_ITEM_FROM_CART,
    payload:item
})