import React, { PropTypes as Props } from 'react';
import { FlexTable, FlexColumn } from 'react-virtualized';
import { MATERIALS } from 'constants/constants';

const Town = ({rowGetter}) => {
  return (
    <FlexTable
      width={400}
      height={300}
      headerHeight={20}
      rowHeight={30}
      rowCount={MATERIALS.length}
      rowGetter={rowGetter}
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
  );
};

function keyDataGetter ({rowData}) {
  return rowData[0];
}

function cellDataGetter ({ dataKey, rowData }) {
  return rowData[1].get(dataKey);
}

Town.propTypes = {
  rowGetter: Props.func
};

export default Town;
