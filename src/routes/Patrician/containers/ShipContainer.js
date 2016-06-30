import I from 'immutable';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import Ship from '../components/Ship';

const valuesSelector = (ship) => ship.get('values');
const nameSelector = (ship) => ship.get('selected');
const materialsSelector = createSelector(
  valuesSelector, nameSelector,
  (values, name) => values.getIn([name, 'materials'])
)

const mapStateToProps = (state) => ({
  materials: materialsSelector(state.get('ship'))
});

const mapActionCreators = {};

export default connect(mapStateToProps, mapActionCreators)(Ship);
