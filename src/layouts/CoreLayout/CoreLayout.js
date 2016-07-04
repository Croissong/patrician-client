import React from 'react';
import classes from './CoreLayout.scss';
import StatusBar from '../../containers/StatusBarContainer.js';
import '../../styles/core.scss';

export const CoreLayout = ({ children }) => {
  return (
    <div className={classes.frame}>
      <StatusBar className={classes.statusBar} />
      <div className={classes.content}> 
        {children}
      </div>
    </div>
  );
};

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
};

export default CoreLayout;
