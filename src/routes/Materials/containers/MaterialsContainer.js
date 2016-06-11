import I from 'immutable';
import { connect } from 'react-redux';
import Materials from 'components/Materials';
import {selectCity} from '../modules/materials';

const mapStateToProps = (state) => {
  let mats = state.get('materials', I.Map());
  let town = mats.getIn(['towns', 'selected']); 
  return ({
    materials: mats.getIn(['values', town], I.List()),
    infos: mats.getIn(['infos', town], I.Map()),
    towns: mats.getIn(['towns', 'values'], I.Map())
  });
};

const mapActionCreators = {
  selectCity: (_, __, city) => selectCity(city)
}

/*  Note: mapStateToProps is where you should use `reselect` to create selectors, ie:

   import { createSelector } from 'reselect'
   const counter = (state) => state.counter
   const tripleCount = createSelector(counter, (count) => count * 3)
   const mapStateToProps = (state) => ({
   counter: tripleCount(state)
   })

   Selectors can compute derived data, allowing Redux to store the minimal possible state.
   Selectors are efficient. A selector is not recomputed unless one of its arguments change.
   Selectors are composable. They can be used as input to other selectors.
   https://github.com/reactjs/reselect    */

export default connect(mapStateToProps, mapActionCreators)(Materials);
