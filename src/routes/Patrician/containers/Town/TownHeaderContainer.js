import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import TownHeader from '../../components/Town/TownHeader';

const valuesSelector = (state) => {
  return state.getIn(['town', 'values']);
}

const townOptions = createSelector(
  valuesSelector,
  (values) => {
    return values.keySeq().map(k => ({ value: k, label: k })).toJS();
  }
);

const mapStateToProps = (state, {town}) => {
  return { towns: townOptions(state), name: town.get('name'),
           total_weight: town.get('total_weight'), unknown: town.get('unknown') };
};

const mapActionCreators = (dispatch, _props) => ({});

export default connect(mapStateToProps, mapActionCreators)(TownHeader);
