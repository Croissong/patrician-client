import React, { PropTypes as Props } from 'react';
import IProps from 'react-immutable-proptypes';
import Town from '../Town';
import Ship from '../Ship';
import Settings from '../../containers/SettingsContainer';
import classes from './PatricianView.scss';
import townClasses from '../Town/Town.scss';
import shipClasses from '../Ship/Ship.scss';

const PatricianView = ({town1, town2, ship, selectTown1, selectTown2}) => {
  return (
    <div className={classes.outer}>
      <div className={classes.inner}>
        <Settings className={classes.settings} />
        <div className={classes.content}>
          <Town town={town1} town2={town2} selectTown={selectTown1} className={townClasses.left} />
          <Ship ship={ship} className={shipClasses.ship} /> 
        </div>
      </div>
    </div>
  ); 
};

PatricianView.propTypes = {
  town1: IProps.map,
  town2: IProps.map, 
  ship: IProps.map,
  selectTown1: Props.func,
  selectTown2: Props.func
};

export default PatricianView;

