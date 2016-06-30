import React, { PropTypes as Props } from 'react';
import IProps from 'react-immutable-proptypes';
import Select from 'react-select';

const TownHeader = (props) => (
  <div>
    <Select
      name="town"
      value={props.name}
      options={props.towns}
      onChange={props.selectCity}
    /> 
    <div>{props.name}</div>
    <div>{props.amount}</div>
    <div>{props.unknown}</div> 
  </div>
);

TownHeader.propTypes = {
  name: Props.string,
  town: IProps.map,
  towns: Props.array,
  amount: Props.number,
  unknown: Props.number,
  selectCity: Props.func
};

export default TownHeader;
