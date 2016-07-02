import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { selectTown } from '../modules/town';
import TownHeader from '../components/Town/TownHeader';

const valuesSelector = (town) => {
  return town.get('values');
};
const nameSelector = (town, i) => {
  return town.get('selected').get(i);
};

const townsSelector = createSelector(
  valuesSelector,
  (values) => values.keySeq().map(k => ({ value: k, label: k })).toJS()
);

const townSelector = createSelector(
  valuesSelector, nameSelector,
  (values, name) => values.get(name)
);

const mapStateToProps = (state, {index}) => {
  let town = state.get('town');
  let selectedTown = townSelector(town, index);
  return { towns: townsSelector(town), name: nameSelector(town, index),
           total_weight: selectedTown.get('total_weight'), unknown: selectedTown.get('unknown') };
};

const mapActionCreators = (dispatch, {index}) => {
  return { selectTown: ({value}) => {
    dispatch(selectTown(index, value));
  } };
};

export default connect(mapStateToProps, mapActionCreators)(TownHeader);
