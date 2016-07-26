import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { selectShip } from '../../modules/ship.js';
import ShipHeader from '../../components/Ship/ShipHeader';

const valuesSelector = (state) => state.getIn(['ship', 'values']);

const shipOptions = createSelector(
  valuesSelector,
  (values) => values.keySeq()
);

const mapStateToProps = (state, {ship}) => {
  return { name: ship.get('name'), ships: shipOptions(state) };
};

const mapActionCreators = {
  selectShip: (evt) => {
    return selectShip(evt.target.parentNode.attributes[0].value);
  }
};

export default connect(mapStateToProps, mapActionCreators)(ShipHeader);
