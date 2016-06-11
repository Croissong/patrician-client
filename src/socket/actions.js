import Immutable from 'immutable';
import { createStore } from 'redux';
import { createAction, createReducer } from 'redux-act';

// Create an action creator (description is optional)
export const socketClosed = createAction('socketClosed');
export const socketOpened = createAction('socketOpened');
export const socketMessage = createAction('socketMessage');

export default createReducer({
  [socketClosed]: (state, payload) => state.set('open', false),
  [socketOpened]: (state) => state.set('open', true)
}, initialState); // <-- This is the default state

const initialState = Immutable.fromJS({open: false});
