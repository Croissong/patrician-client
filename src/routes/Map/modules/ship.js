import I from 'immutable';
import { createAction, createReducer } from 'redux-act';
import { socketMessage } from '../../../socket/actions.js';

export const selectShip = createAction('Ship selected');

const initialState = I.fromJS({ values: {} });

export default createReducer({
  [socketMessage]: (state, payload) => receiveShipHandler(state, payload.get('ship')),
  [selectShip]: (state, payload) => selectShipHandler(state, payload)
}, initialState);

const receiveShipHandler = (state, ship) => {
  let name = ship.get('name');
  return state.setIn(['values', name], ship);
};

const selectShipHandler = (state, payload) => state.set('selected', payload);
