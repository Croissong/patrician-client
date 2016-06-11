import React from 'react';
import Props from 'react-immutable-proptypes';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import I from 'immutable';
import Toggle from 'material-ui/Toggle';
import MaterialsHeader from '../MaterialsHeader/index';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const state = {
  fixedHeader: true,
  fixedFooter: true,
  stripedRows: false,
  showRowHover: false,
  selectable: false,
  showCheckboxes: false,
  deselectOnClickaway: true, 
  height: '800px'
};

const Materials = (props) => {
  return (
    <div>
      <SelectField value={props.infos.get('name', '')} onChange={props.selectCity}>
        {props.towns.keySeq().map(t => {
           return (
             <MenuItem key={t} value={t} primaryText={t} />
           );
         })} 
      </SelectField>
      <Table
        height={state.height}
        fixedHeader={state.fixedHeader}
        fixedFooter={state.fixedFooter}
        selectable={state.selectable}
        multiSelectable={state.multiSelectable}
      >
        <TableHeader
          displaySelectAll={state.showCheckboxes}
          adjustForCheckbox={state.showCheckboxes}
          enableSelectAll={state.enableSelectAll}
        >
          <TableRow>
            <TableHeaderColumn colSpan="6" style={{textAlign: 'center'}}>
              <MaterialsHeader town={props.infos}/>
            </TableHeaderColumn>
          </TableRow>
          <TableRow>
            <TableHeaderColumn></TableHeaderColumn>
            <TableHeaderColumn>Amount</TableHeaderColumn>
            <TableHeaderColumn>Buy</TableHeaderColumn>
            <TableHeaderColumn>Sell</TableHeaderColumn>
            <TableHeaderColumn>Office</TableHeaderColumn>
            <TableHeaderColumn>Average</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody
          displayRowCheckbox={state.showCheckboxes}
          deselectOnClickaway={state.deselectOnClickaway}
          showRowHover={state.showRowHover}
          stripedRows={state.stripedRows}
        >
          {props.materials.map((material, index) => (
             <TableRow key={index} selected={material.selected}>
               <TableRowColumn>{material.name}</TableRowColumn>
               <TableRowColumn>{material.values.amount}</TableRowColumn>
               <TableRowColumn>{material.values.buy}</TableRowColumn>
               <TableRowColumn>{material.values.sell}</TableRowColumn>
               <TableRowColumn>{material.values.office}</TableRowColumn>
               <TableRowColumn>{material.values.average}</TableRowColumn>
             </TableRow>
           ))}
        </TableBody>
        <TableFooter
          adjustForCheckbox={state.showCheckboxes}
        >
          
          <TableRow>
            <TableRowColumn colSpan="3" style={{textAlign: 'center'}}>
              Super Footer
            </TableRowColumn>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}


Materials.propTypes = {
  materials: Props.list,
  infos: Props.map,
  towns: Props.map,
  selectCity: React.PropTypes.func
};

export default Materials;
