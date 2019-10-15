import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {connect} from 'react-redux';
import './cart-icon.styles.scss';
import {togglecarthidden} from '../../redux/cart-redux/cart.actions';
const Carticon =({togglecarthidden}) => (

    <div className="cart-icon">
        <ShoppingIcon className="shopping-icon" onClick={togglecarthidden} />
        <span className="item-count">0

            </span>


    </div>
);
const mapDispatchToProps = dispatch =>({
togglecarthidden:()=>dispatch(togglecarthidden())
});
export default connect(null,mapDispatchToProps)(Carticon);