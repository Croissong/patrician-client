import React from 'react';
import IProps from 'react-immutable-proptypes';
import { FlexTable, FlexColumn } from 'react-virtualized';
import { MATERIALS } from 'constants/constants';
import classes from '../../PatricianView/PatricianView.scss';

const ShipTable = ({topTowns}) => {
  let topScore = topTowns.get(0)[1];
  return (
    <div>
      {topTowns.map((v) => (
         <div key={v[0]}>{v[0]} {(v[1] / topScore).toFixed(2)}</div>
       ))}
    </div>
  );
};

ShipTable.propTypes = {
  topTowns: IProps.seq
};

export default ShipTable;
