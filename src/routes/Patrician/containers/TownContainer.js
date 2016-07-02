import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import Town from '../components/Town';

const valuesSelector = (town) => town.get('values');
const nameSelector = (town) => town.get('selected');
const rowGetterSelector = createSelector(
  valuesSelector, nameSelector,
  (values, name) => {
    let materials = values.getIn([name, 'materials']).entrySeq();
    return ({index}) => materials.get(index);
  }
);

const mapStateToProps = (state) => ({
  rowGetter: rowGetterSelector(state.get('town'))
});

const mapActionCreators = {};

export default connect(mapStateToProps, mapActionCreators)(Town);
