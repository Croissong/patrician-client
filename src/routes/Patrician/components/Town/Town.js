import React, { PropTypes as Props } from 'react';
import IProps from 'react-immutable-proptypes';
import { Table, TableBody, TableFooter, TableHeader,
         TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import I from 'immutable';

const Town = (props) => {
  return (
    <div> 
      <Table>
        <TableHeader> 
          <TableRow>
            <TableHeaderColumn>Material</TableHeaderColumn>
            <TableHeaderColumn>Amount</TableHeaderColumn>
            <TableHeaderColumn>Buy</TableHeaderColumn>
            <TableHeaderColumn>Sell</TableHeaderColumn> 
          </TableRow>
        </TableHeader>
        <TableBody 
          showRowHover={true}
          stripedRows={true}
        >
          {props.materials.entrySeq().map(([k, v]) => (
             <TableRow key={k} >
               <TableRowColumn>{k}</TableRowColumn>
               <TableRowColumn>{v.get('amount')}</TableRowColumn>
               <TableRowColumn>{v.get('buy')}</TableRowColumn>
               <TableRowColumn>{v.get('sell')}</TableRowColumn> 
             </TableRow>
           ))}
        </TableBody> 
      </Table>
    </div>
  )};

Town.propTypes = {
  materials: IProps.map
};

export default Town;
