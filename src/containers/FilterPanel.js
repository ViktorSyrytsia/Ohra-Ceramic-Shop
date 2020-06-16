import { connect } from 'react-redux';
import * as filterActions from '../actions/filter';

import FilterPanel from '../components/filterPanel/FilterPanel';


const mapStateToProps = ({ filterBy }) => ({
        filterBy
})

export default connect(mapStateToProps, filterActions)(FilterPanel)