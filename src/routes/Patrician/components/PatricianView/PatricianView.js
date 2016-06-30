import React, { PropTypes as Props } from 'react';
import Town from '../../containers/TownContainer';
import TownHeader from '../../containers/TownHeaderContainer';
import ShipHeader from '../../containers/ShipHeaderContainer';
import Ship from '../../containers/ShipContainer';

const PatricianView = (props) => {
  console.log(props);
  if (props.hasData) {
    return (
      <div>
        <TownHeader/>
        <ShipHeader/>
        <Town/>
        <Ship/>
      </div>
    )
  } else {
    return (
      <div>
        NODATADUDE
      </div>
    )
  }
};

PatricianView.propTypes = {
  hasData: Props.bool
};

export default PatricianView;

