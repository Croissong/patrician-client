import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import Ship from '../components/Ship';

const valuesSelector = (ship) => ship.get('values');
const nameSelector = (ship) => ship.get('selected');
const rowGetterSelector = createSelector(
  valuesSelector, nameSelector,
  (values, name) => {
    let materials = values.getIn([name, 'materials']).entrySeq();
    return ({index}) => materials.get(index);
  }
);

const mapStateToProps = (state) => ({
  rowGetter: rowGetterSelector(state.get('ship'))
});

const mapActionCreators = {};

export default connect(mapStateToProps, mapActionCreators)(Ship);
