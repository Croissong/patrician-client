import React, { PropTypes as Props } from 'react';
import { FlexTable, FlexColumn } from 'react-virtualized';
import { MATERIALS } from 'constants/constants';
import classes from '../Town.scss';

const TownCompare = ({rowGetter, width}) => {
  return (
    <FlexTable
      width={width}
      height={700}
      headerHeight={20}
      rowHeight={30}
      rowCount={MATERIALS.size}
      rowGetter={rowGetter}
      className={classes.compare}
      gridClassName={classes.innerTable}
    >
      <FlexColumn
        label='Comparison'
        dataKey='compare'
        cellDataGetter={cellDataGetter}
        cellRenderer={cellRenderer}
        width={width}
      /> 
    </FlexTable>
  );
};

function cellDataGetter ({ dataKey, rowData }) {
  return rowData.get('val').toFixed(2);
}

function cellRenderer ({ cellData, rowData }) {
  let style = {};
  if(cellData > 1.0) {
    style.fontWeight = 'bold'; 
    if (rowData.get('i') > 14){
      style.color = 'green';
    } else {
      style.color = '#c2e07d';
    }
  }
  return (<div style={style}>{String(cellData)}</div>);
};

TownCompare.propTypes = {
  rowGetter: Props.func,
  width: Props.number
};

export default TownCompare;
