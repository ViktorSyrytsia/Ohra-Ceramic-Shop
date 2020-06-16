import App from '../components/app/App';

import { connect } from 'react-redux';
import * as itemsActions from '../actions/items';
import * as filterActions from '../actions/filter';

import orderBy from 'lodash/orderBy.js';

const actions = { ...itemsActions, ...filterActions };



const sortBy = (items, type, searchQuery) => {

        console.log(searchQuery);


        items = items.filter(item =>
                item.title.toLowerCase().includes(searchQuery.toLowerCase())
        )

        switch (type) {
                case 'Highest price':
                        return orderBy(items, 'price', 'desc');
                case 'Lowest price':
                        return orderBy(items, 'price', 'asc');
                case 'Top rated':
                        return orderBy(items, 'rating', 'desc');
                default:
                        return items;
        }
}

const mapStateToProps = ({ items: { itemsList, isReady }, filter: { filterBy, searchQuery } }) => ({
        itemsList: sortBy(itemsList, filterBy, searchQuery),
        isReady,
        filterBy

})

export default connect(mapStateToProps, actions)(App);