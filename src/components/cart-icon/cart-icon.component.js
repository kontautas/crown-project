import React from 'react';

import { connect } from 'react-redux';

import {toggleCartHidden} from '../../redux/cart/cart.actions'
import { ReactComponent as ShoppingIcon} from '../../assets/11.3 shopping-bag.svg.svg';
import {SelectCartItemsCount} from '../../redux/cart/cart.selectors';
import './cart-icon.styles.scss';
import {createStructuredSelector} from 'reselect';


const Carticon = ({toggleCartHidden, itemCount}) => (
    <div className = 'cart-icon' onClick = {toggleCartHidden}>
        <ShoppingIcon className = 'shopping-icon'/>
        <span className = 'item-count'>{itemCount} </span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector ({
    itemCount: SelectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(Carticon);