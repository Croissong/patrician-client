import React, { PropTypes as Props } from 'react';
import { FlexTable, FlexColumn } from 'react-virtualized';
import { MATERIALS } from 'constants/constants';
import classes from '../../PatricianView/PatricianView.scss';

const TownTable = ({rowGetter}) => {
  return (
    <FlexTable
      width={500}
      height={700}
      headerHeight={20}
      rowHeight={30}
      rowCount={MATERIALS.size}
      rowGetter={rowGetter}
      gridClassName={classes.townTable}
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
  return rowData.key;
}

function cellDataGetter ({ dataKey, rowData }) {
  return rowData.val.get(dataKey);
}

TownTable.propTypes = {
  rowGetter: Props.func
};

export default TownTable;
