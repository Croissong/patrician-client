import { connect } from 'react-redux';
import PatricianView from '../components/PatricianView';

const mapStateToProps = (state) => ({
  hasData: hasData(state)
});

function hasData (state) {
  return state.hasIn(['town', 'selected']) && state.hasIn(['ship', 'selected']);
};

const mapActionCreators = {};

export default connect(mapStateToProps, mapActionCreators)(PatricianView);
