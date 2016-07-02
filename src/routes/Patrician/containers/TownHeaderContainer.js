import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { selectTown } from '../modules/town';
import TownHeader from '../components/TownHeader';

const valuesSelector = (town) => town.get('values');
const nameSelector = (town) => town.get('selected');

const townsSelector = createSelector(
  valuesSelector,
  (values) => values.keySeq().map(k => ({ value: k, label: k })).toJS()
);

const townSelector = createSelector(
  valuesSelector, nameSelector,
  (values, name) => values.get(name)
);

const mapStateToProps = (state) => {
  let town = state.get('town');
  let selectedTown = townSelector(town);
  return { towns: townsSelector(town), name: nameSelector(town),
           amount: selectedTown.get('amount'), unknown: selectedTown.get('unknown') };
};

const mapActionCreators = {
  selectTown: ({ value }) => selectTown(value)
};

export default connect(mapStateToProps, mapActionCreators)(TownHeader);
