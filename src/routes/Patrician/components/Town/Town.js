import React, { PropTypes as Props } from 'react';
import IProps from 'react-immutable-proptypes';
import I from 'immutable';
import { FlexTable, FlexColumn } from 'react-virtualized';

const Town = ({materials}) => {
  materials = materials.entrySeq(); 
  return (
    <FlexTable
      width={400}
      height={300}
      headerHeight={20}
      rowHeight={30}
      rowCount={materials.size}
      rowGetter={({index}) => materials.get(index)}
    >
      <FlexColumn
        label='Material'
        dataKey='name'
        cellDataGetter={keyDataGetter}
        width={200}
      />
      <FlexColumn
        width={100}
        label='Amount'
        cellDataGetter={cellDataGetter}
        dataKey='amount'
      />
      <FlexColumn
        width={50}
        label='Buy'
        cellDataGetter={cellDataGetter}
        dataKey='buy'
      />
      <FlexColumn
        width={50}
        label='Sell'
        cellDataGetter={cellDataGetter}
        dataKey='sell'
      />
    </FlexTable> 
  )
};

function keyDataGetter({rowData}) {
  return rowData[0]
}

function cellDataGetter({ dataKey, rowData }) {
  return rowData[1].get(dataKey);
}

Town.propTypes = {
  materials: IProps.map
};

export default Town;
