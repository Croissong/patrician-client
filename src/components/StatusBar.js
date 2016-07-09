import React, { PropTypes as Props } from 'react';
import Tooltip from 'rc-tooltip';
import classes from './StatusBar.scss';
import 'rc-tooltip/assets/bootstrap.css';

const StatusBar = ({ connected, className }) => {
  return (
    <div className={className}>
      {connected ? (
         <Tooltip placement='bottomRight' overlay={<span>Websocket connected</span>}>
           <div className={classes.ledGreen} />
         </Tooltip>
       ) : (
         <Tooltip placement='bottomRight' overlay={<span>Websocket disconnected</span>}>
           <div className={classes.ledRed} />
         </Tooltip>
       )}
    </div>
  );
};

StatusBar.propTypes = {
  className: Props.string,
  connected: Props.bool
};

export default StatusBar;

