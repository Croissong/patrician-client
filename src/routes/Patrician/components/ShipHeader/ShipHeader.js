import React, { PropTypes as Props } from 'react';
import Select from 'react-select';

const ShipHeader = (props) => (
  <div>
    <Select
      name='ship'
      value={props.name}
      options={props.ships}
      onChange={props.selectShip}
    />
    <div>{props.name}</div>
    <div>{props.amount}</div>
    <div>{props.average_price}</div>
  </div>
);

ShipHeader.propTypes = {
  name: Props.string,
  ships: Props.array,
  amount: Props.number,
  average_price: Props.number,
  selectShip: Props.func
};

export default ShipHeader;
