import React, { PropTypes as Props } from 'react';
import Town from '../Town';
import Ship from '../Ship';
import Settings from '../../containers/SettingsContainer';
import classes from './PatricianView.scss';

const PatricianView = (props) => {
  if (true) {
    return (
      <div className={classes.outer}>
        <div className={classes.inner}>
          <Settings className={classes.settings} />
          <div className={classes.content}>
            <Town index={0} className={classes.leftTown} />
            <Ship className={classes.ship} />
            <Town index={1} className={classes.rightTown} />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={classes.outer}>
        <div className={classes.inner}>
          <div className={classes.settings}>
            Settings
          </div>
          <div className={classes.content}>
            <div className={classes.leftTown}>
              <div className={classes.header}>
                TownHeader
              </div>
              <div className={classes.townTable}>
                TownTable
              </div>
            </div>
            <div className={classes.ship}>
              <div className={classes.header}>
                ShipHeader
              </div>
              <div className={classes.shipTable}>
                ShipTable
              </div>
            </div>
            <div className={classes.rightTown}>
              <div className={classes.header}>
                TownHeader
              </div>
              <div className={classes.townTable}>
                TownTable
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

PatricianView.propTypes = {
  hasData: Props.bool
};

export default PatricianView;

