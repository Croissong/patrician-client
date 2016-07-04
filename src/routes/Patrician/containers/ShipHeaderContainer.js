import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { selectShip } from '../modules/ship.js';
import ShipHeader from '../components/Ship/ShipHeader';

const valuesSelector = (ship) => ship.get('values');
const nameSelector = (ship) => ship.get('selected');

const shipsSelector = createSelector(
  valuesSelector,
  (keys) => keys.keySeq()
);

const mapStateToProps = (state) => {
  let ship = state.get('ship');
  return { name: nameSelector(ship), ships: shipsSelector(ship) };
};

const mapActionCreators = {
  selectShip: (evt) => {
    return selectShip(evt.target.parentNode.attributes[0].value);
  }
};

export default connect(mapStateToProps, mapActionCreators)(ShipHeader);
