import React, { PropTypes as Props } from 'react';
import ShipHeader from '../../containers/Ship/ShipHeaderContainer.js';
import ShipTable from '../../containers/Ship/ShipTableContainer.js';
import classes from './Ship.scss';

const Ship = ({className, ship}) => {
  return (
    <div className={className}>
      <ShipHeader ship={ship} className={classes.header} />
      <ShipTable ship={ship}/>
    </div>
  );
};

Ship.propTypes = {
  className: Props.string
};

export default Ship;
