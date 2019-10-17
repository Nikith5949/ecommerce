import Cartactiontypes from './cart.types'

export const toggleCartHidden =()=>({

type:Cartactiontypes.TOGGLE_CART_HIDDEN

});
export const addItem = item =>({
    type:Cartactiontypes.ADD_ITEM,
    payload:item
})