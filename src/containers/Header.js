import { connect } from 'react-redux';
import * as cartActions from '../actions/cart';

import Header from '../components/header/Header';

const mapStateToProps = ({ cart }) => ({
        totalPrice: cart.items.reduce((total, item) => total + item.price * item.count, 0),
        totalItems: cart.items.length,
        items: cart.items
})

export default connect(mapStateToProps, cartActions)(Header)