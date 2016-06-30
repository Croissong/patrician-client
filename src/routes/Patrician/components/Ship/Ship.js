import React, { PropTypes as Props } from 'react';
import IProps from 'react-immutable-proptypes';
import { Table, TableBody, TableFooter, TableHeader,
         TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import I from 'immutable';

const Ship = (props) => (
  <div>
    <Table>
      <TableHeader> 
        <TableRow> 
          <TableHeaderColumn>Average Price</TableHeaderColumn>
          <TableHeaderColumn>Amount</TableHeaderColumn> 
        </TableRow>
      </TableHeader>
      <TableBody 
        showRowHover={true}
        stripedRows={true}
      >
        {props.materials.entrySeq().map(([k, v]) => (
           <TableRow key={k} > 
             <TableRowColumn>{v.get('average_price')}</TableRowColumn>
             <TableRowColumn>{v.get('amount')}</TableRowColumn> 
           </TableRow>
         ))}
      </TableBody> 
    </Table>
  </div>
);

Ship.propTypes = {
  materials: IProps.map
};

export default Ship;
