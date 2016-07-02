import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { selectShip } from '../modules/ship.js';
import ShipHeader from '../components/ShipHeader';

const valuesSelector = (ship) => ship.get('values');
const nameSelector = (ship) => ship.get('selected');

const shipsSelector = createSelector(
  valuesSelector,
  (keys) => keys.keySeq().map(k => k).toJS()
);

const shipSelector = createSelector(
  valuesSelector, nameSelector,
  (values, name) => values.get(name)
);

const mapStateToProps = (state) => {
  let ship = state.get('ship');
  let selectedShip = shipSelector(ship);
  return { name: nameSelector(ship), ships: shipsSelector(ship),
           amount: selectedShip.get('amount'), average_price: selectedShip.get('average_price')};
};

const mapActionCreators = {
  selectShip: ({ value }) => selectShip(value)
};

export default connect(mapStateToProps, mapActionCreators)(ShipHeader);
