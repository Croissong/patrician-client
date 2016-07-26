import React, { PropTypes as Props } from 'react';
import IProps from 'react-immutable-proptypes';
import { Menu, MainButton, ChildButton } from 'constants/../../modules/react-mfb';
import classes from '../Ship.scss';

const ShipHeader = ({name, ships, selectShip, className}) => {
  return (
    <div className={className}>
      <div className={classes.btn}>
        <Menu effect={'slidein'} method={'click'} position={'bl'}>
          <MainButton iconResting='icon-boat fab-icon' iconActive='icon-boat fab-icon' />
          {ships.filter(s => s !== name).map(s =>
            (<ChildButton
               key={s}
               onClick={selectShip}
               icon='icon-boat fab-icon'
               label={s} />
            ))}
        </Menu>
      </div>
      <div className={classes.name}>{name}</div> 
    </div>
  );
};

ShipHeader.propTypes = {
  name: Props.string,
  ships: IProps.seq,
  selectShip: Props.func,
  className: Props.string
};

export default ShipHeader;
