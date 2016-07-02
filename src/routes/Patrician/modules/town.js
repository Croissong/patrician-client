import I from 'immutable';
import { createAction, createReducer } from 'redux-act';
import { socketMessage } from '../../../socket/actions.js';

export const selectTown = createAction('Town selected', (i, val) => ({i, val}));

const initialState = I.fromJS({values: {}, selected: []});

const townReducer = createReducer({
  [socketMessage]: (state, payload) => receiveTownHandler(state, payload.get('town')),
  [selectTown]: (state, payload) => {
    return selectTownHandler(state, payload);
  }
}, initialState);

export default townReducer;

const receiveTownHandler = (state, town) => {
  let name = town.get('name');
  return state.setIn(['values', name], town);
};

const selectTownHandler = (state, {i, val}) => {
  return state.update('selected',
                      (selected) => selected.set(i, val));
};
