import React, { PropTypes as Props } from 'react';
import IProps from 'react-immutable-proptypes';
import I from 'immutable';
import { FlexTable, FlexColumn } from 'react-virtualized';

const Ship = ({materials}) => {
  materials = materials.entrySeq(); 
  return (
    <FlexTable
      width={300}
      height={300}
      headerHeight={20}
      rowHeight={30}
      rowCount={materials.size}
      rowGetter={({index}) => materials.get(index)}
    >
      <FlexColumn
        label='Average Price'
        dataKey='average_price'
        cellDataGetter={cellDataGetter}
        width={100}
      />
      <FlexColumn
        width={200}
        label='Amount'
        cellDataGetter={cellDataGetter}
        dataKey='amount'
      /> 
    </FlexTable> 
  )
};

function cellDataGetter({ dataKey, rowData }) {
  return rowData[1].get(dataKey);
}

Ship.propTypes = {
  materials: IProps.map
};

export default Ship;
