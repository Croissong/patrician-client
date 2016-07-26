import React, { PropTypes as Props } from 'react';
import { FlexTable, FlexColumn } from 'react-virtualized';
import { MATERIALS } from 'constants/constants';
import classes from '../Town.scss';

const TownTable = ({className, rowGetter, width}) => {
  return (
    <FlexTable
      width={width}
      height={700}
      headerHeight={20}
      rowHeight={30}
      rowCount={MATERIALS.size}
      rowGetter={rowGetter}
      className={classes.table}
      gridClassName={classes.innerTable}
    >
      <FlexColumn
        label='Material'
        dataKey='name'
        cellDataGetter={keyDataGetter}
        width={0.4 * width}
      />
      <FlexColumn
        width={0.2 * width}
        label='Amount'
        cellDataGetter={cellDataGetter}
        dataKey='amount'
      />
      <FlexColumn
        width={0.2 * width}
        label='Buy'
        cellDataGetter={cellDataGetter}
        dataKey='buy'
      />
      <FlexColumn
        width={0.2 * width}
        label='Sell'
        cellDataGetter={cellDataGetter}
        dataKey='sell'
      />
    </FlexTable>
  );
};

function keyDataGetter ({rowData}) {
  return rowData.key;
}

function cellDataGetter ({ dataKey, rowData }) {
  return rowData.val.get(dataKey);
}

TownTable.propTypes = {
  rowGetter: Props.func,
  width: Props.number
};

export default TownTable;
