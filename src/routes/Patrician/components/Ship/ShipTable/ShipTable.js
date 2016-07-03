import React, { PropTypes as Props } from 'react';
import { FlexTable, FlexColumn } from 'react-virtualized';
import { MATERIALS } from 'constants/constants';
import classes from '../../PatricianView/PatricianView.scss';

const ShipTable = ({rowGetter}) => {
  return (
    <FlexTable
      width={300}
      height={700}
      headerHeight={20}
      rowHeight={30}
      rowCount={MATERIALS.size}
      rowGetter={rowGetter}
      gridClassName={classes.townTable}
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
  return rowData.get(dataKey);
}

ShipTable.propTypes = {
  rowGetter: Props.func
};

export default ShipTable;
