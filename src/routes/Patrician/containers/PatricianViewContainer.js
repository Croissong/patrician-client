import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import PatricianView from '../components/PatricianView';
import { selectTown } from '../modules/town';

const selectedShipSelector = (ship) => {
  return ship.get('selected')
};
const selectedTownSelector = (town, i) => {
  return town.get('selected').get(i);
};
const valuesSelector = (m) => {
  return m.get('values');
};
const shipSelector = createSelector(
  valuesSelector, selectedShipSelector,
  (values, selected) => {
    return values.get(selected);
  }
)
const townSelector = createSelector(
  valuesSelector, selectedTownSelector,
  (values, selected) => {
    return values.get(selected);
  }
)

const mapStateToProps = (state) => {
  let ship = state.get('ship');
  let town = state.get('town');
  return { town1: townSelector(town, 0),
           town2: townSelector(town, 1),
           ship: shipSelector(ship) };
};

const mapActionCreators = (dispatch, _props) => {
  return { selectTown1: ({value}) => dispatch(selectTown(0, value)),
           selectTown2: ({value}) => dispatch(selectTown(1, value)) };
};
             
export default connect(mapStateToProps, mapActionCreators)(PatricianView);
             
