import {combineReducers} from 'redux';
import userReducer from './user/user.reducer'
import cartReducer from '../redux/cart-redux/cart.reduce'
export default combineReducers({

    user:userReducer,
    cart:cartReducer
})