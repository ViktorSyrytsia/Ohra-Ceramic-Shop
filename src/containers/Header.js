import { connect } from 'react-redux';
import * as cartActions from '../actions/cart';

import uniqBy from 'lodash/uniqBy.js';

import Header from '../components/header/Header';

const mapStateToProps = ({ cart }) => ({
        totalPrice: cart.items.reduce((total, item) => total + item.price, 0),
        totalItems: cart.items.length,
        items: uniqBy(cart.items, item => item.id)
})

export default connect(mapStateToProps, cartActions)(Header)