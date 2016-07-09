import I from 'immutable';
import { createAction, createReducer } from 'redux-act';
import { socketMessage } from '../../../socket/actions.js';

export const selectTown = createAction('Town selected', (i, val) => ({i, val}));
export const toggleCompare = createAction('Compare toggled');

const initialState = I.fromJS({ values: {}, selected: [], compare: false });

export default createReducer({
  [socketMessage]: (state, payload) => receiveTownHandler(state, payload.get('town')),
  [toggleCompare]: (state, payload) => toggleCompareHandler(state, payload),
  [selectTown]: (state, payload) => {
    return selectTownHandler(state, payload);
  }
}, initialState);

const receiveTownHandler = (state, town) => {
  let name = town.get('name');
  return state.setIn(['values', name], town);
};

const selectTownHandler = (state, {i, val}) => {
  return state.update('selected',
                      (selected) => selected.set(i, val));
};

const toggleCompareHandler = (state, val) => {
  return state.set('compare', val);
};
