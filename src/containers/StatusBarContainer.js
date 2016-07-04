import { connect } from 'react-redux';
import StatusBar from '../components/StatusBar';

const mapStateToProps = (state) => ({
  connected: state.getIn(['socket', 'open'])
});

const mapActionCreators = {};

export default connect(mapStateToProps, mapActionCreators)(StatusBar);
