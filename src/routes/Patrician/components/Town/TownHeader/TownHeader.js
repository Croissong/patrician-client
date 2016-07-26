import React, { PropTypes as Props } from 'react';
import IProps from 'react-immutable-proptypes';
import Select from 'react-select';

const TownHeader = ({ name, towns, selectTown, total_weight, unknown }) => {
  return (
    <div>
      <Select
        name='town'
        value={name}
        options={towns}
        onChange={selectTown}
      />
      <div>total_weight: {total_weight}</div>
      <div>unknown: {unknown}</div>
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
