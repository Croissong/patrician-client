import React, { PropTypes as Props } from 'react';
import { FlexTable, FlexColumn } from 'react-virtualized';
import { MATERIALS } from 'constants/constants';

const Ship = ({rowGetter}) => {
  return (
    <FlexTable
      width={300}
      height={300}
      headerHeight={20}
      rowHeight={30}
      rowCount={MATERIALS.length}
      rowGetter={rowGetter}
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
  );
};

function cellDataGetter ({ dataKey, rowData }) {
  return rowData[1].get(dataKey);
}

Ship.propTypes = {
  rowGetter: Props.func
};

export default Ship;
