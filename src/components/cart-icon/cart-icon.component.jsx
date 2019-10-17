import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {connect} from 'react-redux';
import {selectCartItemsCount} from '../../redux/cart-redux/cart.selectors'
import './cart-icon.styles.scss';
import {togglecarthidden} from '../../redux/cart-redux/cart.actions';
const Carticon =({togglecarthidden,itemCount}) => (

    <div className="cart-icon">
        <ShoppingIcon className="shopping-icon" onClick={togglecarthidden} />
        <span className="item-count">{itemCount}

            </span>


    </div>
);


const mapStateToProps=(state)=>({
    itemCount: selectCartItemsCount(state)
});


const mapDispatchToProps = dispatch =>({
togglecarthidden:()=>dispatch(togglecarthidden())
});
export default connect(mapStateToProps,mapDispatchToProps)(Carticon);