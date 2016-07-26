import React from 'react';
import classes from './CoreLayout.scss';
import StatusBar from '../../containers/StatusBarContainer.js';
import { Menu, MainButton, ChildButton } from 'constants/../../modules/react-mfb';
import '../../styles/core.scss';

export const CoreLayout = ({ children }, {router}) => {
  const gotoMap = () => router.push('/map');
  return (
    <div className={classes.frame}>
      <StatusBar className={classes.statusBar} />
      <div className={classes.content}>
        {children}
      </div>
      <Menu effect={'slidein'} method={'click'} position={'br'}>
        <MainButton iconResting='icon-world-map fab-icon' iconActive='icon-boat fab-icon' />
        <ChildButton
          onClick={gotoMap}
          className={classes.btn}
          icon='icon-world-map fab-icon'
          label='Map' />
      </Menu>
    </div>
  );
};

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
};

CoreLayout.contextTypes = {
  router: React.PropTypes.object
};

export default CoreLayout;
