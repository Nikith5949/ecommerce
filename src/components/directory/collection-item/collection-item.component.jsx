import React from 'react'
import {connect} from 'react-redux';
import './collection-item.styles.scss';
import {addItem} from '../../../redux/cart-redux/cart.actions'
import Custombutton from '../../custom-button/custom-button.component';
const Collectionitem = ({item, addItem}) => {
    
    const {name, price, imageUrl}=item;
    return (
    
<div className="collection-item">
<div className="image" style={{backgroundImage:`url(${imageUrl})`
}}/>

<div className="collection-footer">
<span className="name">{name}</span>
<span className="price">{price}</span>
</div>
<Custombutton onClick={() => addItem(item)} inverted>
    Add to cart
    </Custombutton>
</div>

)};
const mapDispatchToProps = dispatch =>({

    addItem: item => dispatch(addItem(item))
});
export default connect(null, mapDispatchToProps)(Collectionitem);