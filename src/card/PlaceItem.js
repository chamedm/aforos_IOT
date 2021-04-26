import React from 'react';
import LineChart from '../card/LineChart';
import InfoCard from '../card/InfoCard';
import './PlaceItem.style.css';


function PlaceItem() {
  return(
    <div className="place-item">
      <InfoCard/>
      <LineChart/>
    </div>
  )
}

export default PlaceItem;