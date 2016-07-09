import React, { PropTypes as Props } from 'react';
/* import classes from './Settings.scss';*/
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import Toggle from 'material-ui/Toggle';

const Settings = ({className, toggleCompare, compare}) => {
  return (
    <Toolbar className={className}>
      <ToolbarGroup firstChild>
        <Toggle
          defaultToggled={compare}
          onToggle={toggleCompare}
          label='Comparison'
        />
      </ToolbarGroup>
    </Toolbar>
  );
};

Settings.propTypes = {
  compare: Props.bool,
  toggleCompare: Props.func,
  className: Props.string
};

export default Settings;
