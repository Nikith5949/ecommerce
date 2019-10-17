import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {connect} from 'react-redux';
import {selectCartItemsCount} from '../../redux/cart-redux/cart.selectors'
import './cart-icon.styles.scss';
import {toggleCartHidden} from '../../redux/cart-redux/cart.actions';

import {createStructuredSelector} from 'reselect';

const Carticon =({toggleCartHidden,itemCount}) => (

    <div className="cart-icon">
        <ShoppingIcon className="shopping-icon" onClick={toggleCartHidden} />
        <span className="item-count">{itemCount}

            </span>


    </div>
);


const mapStateToProps=createStructuredSelector({
    itemCount: selectCartItemsCount
});


const mapDispatchToProps = dispatch =>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
});
export default connect(mapStateToProps,mapDispatchToProps)(Carticon);