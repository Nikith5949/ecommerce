import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom' 
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux'; 
import {createStructuredSelector} from 'reselect';
import Carticon from '../cart-icon/cart-icon.component';
import Cartdropdown from '../cart/cart-dropdown.component';
import {selectCartHidden} from '../../redux/user/user.selectors';
import{selectCurrentUser} from '../../redux/user/user.selectors';
const Header=({currentUser,hidden})=>(
    <div className="header">
        
            <Link className="logo-container" to="/">
                <Logo className='logo' />
            </Link>
            <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/shop">
              CONTACT
            </Link>
            {
            currentUser ? (
            <div className="option" onClick={()=> auth.signOut()}>SIGN OUT</div>)
            :(
            <Link className="option" to="/signin"> SIGN IN</Link>
            )
            }
            <Carticon/>
            </div>
            {
                hidden ? null:<Cartdropdown/>
            }
    </div>
)

const mapStateToProps=createStructuredSelector({

    currentUser:selectCurrentUser,
    hidden:selectCartHidden
});
export default connect(mapStateToProps)(Header);