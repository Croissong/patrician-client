import React, { PropTypes as Props } from 'react';
import ShipHeader from '../../containers/ShipHeaderContainer.js';
import ShipTable from '../../containers/ShipTableContainer.js';
import classes from './Ship.scss';

const Ship = ({className}) => {
  return (
    <div className={className}>
      <ShipHeader className={classes.header} />
      <ShipTable />
    </div>
  );
};

Ship.propTypes = {
  className: Props.string
};

export default Ship;
