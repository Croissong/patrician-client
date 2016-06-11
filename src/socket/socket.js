import {Socket} from 'phoenix-elixir';
import {socketClosed, socketOpened, socketMessage} from './actions.js';


export default function (store) {
  let socket = new Socket('ws://localhost:4000/socket', {
    logger: (kind, msg, data) => { console.log(`${kind}: ${msg}`, data); }
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
    console.log(msg.body);
    store.dispatch(socketMessage(msg.body));
  }); 
}
