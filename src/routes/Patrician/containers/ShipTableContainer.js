import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import ShipTable from '../components/Ship/ShipTable';
import { MATERIALS } from 'constants/constants';

const valuesSelector = (ship) => ship.get('values');
const nameSelector = (ship) => ship.get('selected');
const rowGetterSelector = createSelector(
  valuesSelector, nameSelector,
  (values, name) => {
    let materials = values.getIn([name, 'materials']);
    return ({index}) => materials.get(MATERIALS.get(index));
  }
);

const mapStateToProps = (state) => ({
  rowGetter: rowGetterSelector(state.get('ship'))
});

const mapActionCreators = {};

export default connect(mapStateToProps, mapActionCreators)(ShipTable);
