import React from 'react';
import {ReactComponent as Logo} from '../../assets/4.4 crown.svg.svg';
import {Link} from 'react-router-dom';
import './header.styles.scss';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {createStructuredSelector} from 'reselect';


const Header = ({currentUser, hidden}) => (
    <div className = 'header'>
        <Link to ='/' className = 'logo-container'>
            <Logo className = 'logo'></Logo>
        </Link>
        <div className = 'options'>
            <Link to = '/shop' className = 'option'>SHOP</Link>
            <Link to = '/shop' className = 'option'>CONTACT</Link>
            {
                currentUser ?
                <div className = 'option' onClick = {() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className = 'option' to ='/signin'>SIGN IN</Link>
            }
            <CartIcon/>
             
        </div>
        {
            hidden ? null :
            <CartDropdown/>
        }
       
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser,
    hidden: selectCartHidden
});
  
export default connect(mapStateToProps)(Header);