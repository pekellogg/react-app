import React from 'react';

const RoverCard = ({ rover }) => {
  return (
    <div className="rover">
      <div>
        <h1>{ rover.name }</h1>
      </div>
      {/* <div>
        <img 
          src={ rover.Poster !== 'N/A' ? rover.Poster : 'https://via.placeholder.com/400' }
          alt={ rover.Title }
        />
      </div> */}
      <div>
        <h4>{ rover.landing_date }</h4>
        <h4>{ rover.launch_date }</h4>
        <h4>{ rover.status }</h4>
      </div>
    </div>
  );
}

export default RoverCard;