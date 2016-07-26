import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import I from 'immutable';
import ShipTable from '../../components/Ship/ShipTable';
import { MATERIALS } from 'constants/constants';

const townsSelector = (state) => {
  return state.getIn(['town', 'values']);
}

const materialsSelector = (_state, ship) => {
  return ship.get('materials');
}

const topTownsSelector = createSelector(
  townsSelector, materialsSelector,
  (towns, materials) => {
    let scores = towns.map(
      town => materials.reduce(
        (prev, mat, key) =>
          prev + town.getIn(['materials', key, 'sell']) * mat.get('amount')
        , 0));
    return scores.sort((a,b) => b-a).slice(0, 5).entrySeq();
  }
)

const mapStateToProps = (state, {ship}) => ({
  topTowns: topTownsSelector(state, ship)
});

const mapActionCreators = {};

export default connect(mapStateToProps, mapActionCreators)(ShipTable);
