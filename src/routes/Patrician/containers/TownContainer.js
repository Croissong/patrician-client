import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import Town from '../components/Town';

const valuesSelector = (town) => town.get('values');
const nameSelector = (town) => town.get('selected');
const materialsSelector = createSelector(
  valuesSelector, nameSelector,
  (values, name) => values.getIn([name, 'materials'])
)

const mapStateToProps = (state) => (
  { materials: materialsSelector(state.get('town')) }
);

const mapActionCreators = {};

export default connect(mapStateToProps, mapActionCreators)(Town);
