import Immutable from 'immutable';
import { createAction, createReducer } from 'redux-act';

export const socketClosed = createAction('socketClosed');
export const socketOpened = createAction('socketOpened');
export const socketMessage = createAction('socketMessage');

export default createReducer({
  [socketClosed]: (state, payload) => state.set('open', false),
  [socketOpened]: (state) => state.set('open', true)
}, initialState);

const initialState = Immutable.fromJS({open: false});
