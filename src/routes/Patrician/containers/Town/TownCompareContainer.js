import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import TownCompare from '../../components/Town/TownCompare';
import { MATERIALS } from 'constants/constants';

const rowGetter = (town1, town2) => {
  let materials1 = town1.get('materials');
  let materials2 = town2.get('materials'); 
  return ({index}) => {
    let key = MATERIALS.get(index);
    let buy1 = materials1.getIn([key, 'buy']);
    let sell2 = materials2.getIn([key, 'sell']);
    return sell2/buy1;
  };
};

const mapStateToProps = (state, {town1, town2}) => {
  return { rowGetter: rowGetter(town1, town2) };
};

const mapActionCreators = {};

export default connect(mapStateToProps, mapActionCreators)(TownCompare);
