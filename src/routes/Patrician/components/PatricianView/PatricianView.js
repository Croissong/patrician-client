import React, { PropTypes as Props } from 'react';
import Town from '../../containers/TownContainer';
import TownHeader from '../../containers/TownHeaderContainer';
import ShipHeader from '../../containers/ShipHeaderContainer';
import Ship from '../../containers/ShipContainer';
import classes from './PatricianView.scss';

const PatricianView = (props) => {
  if (props.hasData) {
    return (
      <div>
        <TownHeader />
        <ShipHeader />
        <Town />
        <Ship />
      </div>
    );
  } else {
    return (
      <div className={classes.container}>
        <div className={classes.settings}>
        </div>
        <div className={classes.content}>
          <div className={classes.town}>
            <div className={classes.header}>
            </div>
            <div className={classes.table}>
            </div>
          </div>
          <div className={classes.ship}>
            <div className={classes.header}>
            </div>
            <div className={classes.table}>
            </div>
          </div>
          <div className={classes.town}>
            <div className={classes.header}>
            </div>
            <div className={classes.table}>
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

