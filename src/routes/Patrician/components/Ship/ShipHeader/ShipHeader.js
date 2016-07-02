import React, { PropTypes as Props } from 'react';
import Select from 'react-select';

const ShipHeader = (props) => {
  return (
    <div>
      <Select
        name='ship'
        value={props.name}
        options={props.ships}
        onChange={props.selectShip}
      />
    </div>
  );
};

ShipHeader.propTypes = {
  name: Props.string,
  ships: Props.array,
  selectShip: Props.func
};

export default ShipHeader;
