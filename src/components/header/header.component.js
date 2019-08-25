import React from 'react';
import {ReactComponent as Logo} from '../../assets/4.4 crown.svg.svg';
import {Link} from 'react-router-dom';
import './header.styles.scss';

const Header = () => (
    <div className = 'header'>
        <Link to ='/' className = 'logo-container'>
            <Logo className = 'logo'></Logo>
        </Link>
        <div className = 'options'>
            <Link to = '/shop' className = 'option'>SHOP</Link>
            <Link to = '/shop' className = 'option'>CONTACT</Link>
        </div>
    </div>
);

export default Header;