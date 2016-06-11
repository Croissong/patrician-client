import React from 'react';


const MaterialsHeader = (props) => (
  <div>
    <div>{props.town.name}</div>
    <div>{props.town.amount}</div> 
  </div>
)
MaterialsHeader.propTypes = {
  town: React.PropTypes.object
};

export default MaterialsHeader;

