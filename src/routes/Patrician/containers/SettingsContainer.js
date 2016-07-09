import { connect } from 'react-redux';
import Settings from '../components/Settings';
import { toggleCompare } from '../modules/town';

const mapStateToProps = (state) => ({
  compare: state.getIn(['town', 'compare'])
});

const mapActionCreators = {
  toggleCompare: (evt) => toggleCompare(evt.target.checked)
};

export default connect(mapStateToProps, mapActionCreators)(Settings);
