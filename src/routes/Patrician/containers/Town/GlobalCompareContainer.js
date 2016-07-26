import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import I from 'immutable';
import TownCompare from '../../components/Town/TownCompare';
import { MATERIALS } from 'constants/constants';

const valuesSelector = (state) => {
  return state.getIn(['town', 'values']);
};

function getAverages(towns) {
  let sum = towns.reduce((prev, next) => {
    next.get('materials').forEach((mat, k) => {
      prev = prev.update(k, 0, (old) => old + mat.get('sell'))
    });
    return prev;
  }, I.Map());
  return sum.map(v => v / towns.size);
};

const materialsSelector = (_state, town) => {
  return town.get('materials');
}

function getCompare(averages, materials) {
  let compare = averages.reduce((prev, next, key) => {
    let compare = next / materials.getIn([key, 'buy'])
    return prev.set(key, I.Map({ val: compare })); 
  }, I.Map());
  return compare.sort().entrySeq().reduce(
    (prev, next, i) => prev.set(next[0], next[1].set('i', i)), I.Map());
}

const rowGetterSelector = createSelector(
  valuesSelector, materialsSelector,
  (towns, materials) => {
    let averages = getAverages(towns);
    let compare = getCompare(averages, materials);
    return ({index}) => {
      let key = MATERIALS.get(index); 
      return compare.get(key);
    };
  }
);

const mapStateToProps = (state, {town1}) => {
  return { rowGetter: rowGetterSelector(state, town1) };
};

const mapActionCreators = {};

export default connect(mapStateToProps, mapActionCreators)(TownCompare);
