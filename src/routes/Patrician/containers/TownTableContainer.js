import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import TownTable from '../components/Town/TownTable';
import { MATERIALS } from 'constants/constants';

const valuesSelector = (town) => town.get('values');
const nameSelector = (town, i) => town.get('selected').get(i);
const rowGetterSelector = createSelector(
  valuesSelector, nameSelector,
  (values, name) => {
    let materials = values.getIn([name, 'materials']);
    return ({index}) => {
      let key = MATERIALS.get(index);
      return { key: key, val: materials.get(key) };
    };
  }
);

const mapStateToProps = (state, {index}) => ({
  rowGetter: rowGetterSelector(state.get('town'), index)
});

const mapActionCreators = {};

export default connect(mapStateToProps, mapActionCreators)(TownTable);
