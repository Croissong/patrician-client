import I from 'immutable';
import { createStore } from 'redux';
import { createAction, createReducer } from 'redux-act';
import { socketMessage } from '../../../socket/actions.js';

export const selectCity = createAction('City selected');

const initialState = I.fromJS({values: {}, towns: {values: {}}, infos: {}});

export default createReducer({
  [socketMessage]: (state, payload) => receiveInfos(state, payload),
  [selectCity]: (state, payload) => selectCityHandler(state, payload)
}, initialState);



const receiveInfos = (state, {town, materials}) => {
  return state.setIn(['values', town.name], I.fromJS(materials))
    .setIn(['infos', town.name], I.fromJS(town))
    .setIn(['towns', 'values', town.name], true)
    .updateIn(['towns', 'selected'], sel => sel || town.name); 
}


const selectCityHandler = (state, payload) => state.setIn(['towns', 'selected'], payload);
