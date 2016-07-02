import React, { PropTypes as Props } from 'react';
import TownHeader from '../../containers/TownHeaderContainer.js';
import TownTable from '../../containers/TownTableContainer.js';
import classes from '../PatricianView/PatricianView.scss';

const Town = ({className, index}) => {
  return (
    <div className={className}>
      <TownHeader index={index} className={classes.header} />
      <TownTable index={index} className={classes.townTable} />
    </div>
  );
};

Town.propTypes = {
  className: Props.string,
  index: Props.number
};

export default Town;
