import { connect } from 'react-redux';
import TownTable from '../../components/Town/TownTable';
import { MATERIALS } from 'constants/constants';

const rowGetter = (town) => {
  let materials = town.get('materials');
  return ({index}) => {
    let key = MATERIALS.get(index);
    return { key: key, val: materials.get(key) };
  };
};

const mapStateToProps = (_state, {town}) => ({
  rowGetter: rowGetter(town)
});

const mapActionCreators = {};

export default connect(mapStateToProps, mapActionCreators)(TownTable);
