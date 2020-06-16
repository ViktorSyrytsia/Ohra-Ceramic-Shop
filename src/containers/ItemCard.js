import { connect } from 'react-redux';
import * as cartActions from '../actions/cart';

import ItemCard from '../components/itemCard/ItemCard';

const mapStateToProps = ({ cart }) => ({
        total: 0
})

export default connect(mapStateToProps, cartActions)(ItemCard);