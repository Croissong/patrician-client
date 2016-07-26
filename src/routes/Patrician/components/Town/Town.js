import React, { PropTypes as Props } from 'react';
import IProps from 'react-immutable-proptypes';
import TownHeader from '../../containers/Town/TownHeaderContainer';
import TownTable from '../../containers/Town/TownTableContainer';
import TownCompare from '../../containers/Town/TownCompareContainer';
import GlobalCompare from '../../containers/Town/GlobalCompareContainer';
import classes from './Town.scss';

const Town = ({className, town, town2, selectTown}) => {
  return (
    <div className={className}>
      <TownHeader selectTown={selectTown} town={town} className={classes.header} />
      <div className={classes.townContent}>
        <TownTable 
          width={parseInt(classes.tableWidth)}
          town={town} /> 
        <GlobalCompare 
          width={parseInt(classes.compareWidth)}
          town1={town} town2={town2} />
      </div>
    </div>
  );
};

Town.propTypes = {
  className: Props.string,
  town: IProps.map.isRequired,
  town2: IProps.map,
  selectTown: Props.func.isRequired
};

export default Town;
