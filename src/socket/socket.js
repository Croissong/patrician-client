import I from 'immutable';
import { Socket } from 'phoenix-socket';
import { injectReducer } from '../store/reducers';
import socketReducer, { socketClosed, socketOpened, socketMessage } from './actions';

export default function (store) {
  injectReducer(store, { key: 'socket', reducer: socketReducer });
  let socket = new Socket('ws://localhost:4000/socket', {
    logger: (kind, msg, data) => { }
  });

  socket.connect();
  
  socket.onOpen(ev => store.dispatch(socketOpened(ev)));
  socket.onClose(ev => store.dispatch(socketClosed(ev)));

  var chan = socket.channel('web_client:update', {});
  chan.join().receive('ignore', () => console.log('auth error'))
      .receive('ok', () => console.log('join ok'));

  chan.onError(e => console.log('something went wrong', e));
  chan.onClose(e => console.log('channel closed', e));
  chan.on('update', msg => {
    store.dispatch(socketMessage(I.fromJS(msg.body)));
  });
}
