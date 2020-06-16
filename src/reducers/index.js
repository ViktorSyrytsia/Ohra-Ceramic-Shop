import items from './items';
import cart from './cart';
import filter from './filter';
import { combineReducers } from 'redux';

export default combineReducers({
        items,
        cart,
        filter
})