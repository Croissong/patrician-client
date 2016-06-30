import I from 'immutable';
import { createStore } from 'redux';
import { createAction, createReducer } from 'redux-act';
import { socketMessage } from '../../../socket/actions.js';

export const selectTown = createAction('Town selected');

const initialState = I.fromJS({values: {}, selected_material: {}});

const townReducer = createReducer({
  [socketMessage]: (state, payload) => receiveTownHandler(state, payload.get('town')),
  [selectTown]: (state, payload) => selectTownHandler(state, payload)
}, initialState);

export default townReducer;

const receiveTownHandler = (state, town) => {
  let name = town.get('name');
  return state.setIn(['values', name], town)
              .update('selected', selected => selected || name); 
}


const selectTownHandler = (state, payload) => state.set('selected', payload);
