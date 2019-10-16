import Cartactiontypes from './cart.types'

export const togglecarthidden =()=>({

type:Cartactiontypes.TOGGLE_CART_HIDDEN

});
export const addItem = item =>({
    type:Cartactiontypes.ADD_ITEM,
    payload:item
})