import React, { PropTypes as Props } from 'react';
import IProps from 'react-immutable-proptypes';
import Select from 'react-select';

const TownHeader = (props) => {
  return (
    <div>
      <Select
        name='town'
        value={props.name}
        options={props.towns}
        onChange={props.selectTown}
      />
      <div>total_weight: {props.total_weight}</div>
      <div>unknown: {props.unknown}</div>
    </div>
  );
};

TownHeader.propTypes = {
  name: Props.string,
  town: IProps.map,
  towns: Props.array,
  total_weight: Props.number,
  unknown: Props.number,
  selectTown: Props.func
};

export default TownHeader;
