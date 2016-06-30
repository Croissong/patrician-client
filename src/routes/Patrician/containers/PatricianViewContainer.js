import I from 'immutable';
import { connect } from 'react-redux';
import PatricianView from '../components/PatricianView';

const mapStateToProps = (state) => ({
  hasData: hasData(state)
});

function hasData(state) {
  return state.getIn(['town', 'selected']) && state.getIn(['ship', 'selected'])
}

const mapActionCreators = {};

export default connect(mapStateToProps, mapActionCreators)(PatricianView);
