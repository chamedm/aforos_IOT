import React from 'react';
import LineChart from '../card/LineChart';
import InfoCard from '../card/InfoCard';
import './PlaceItem.style.css';


function PlaceItem({data}) {
  return(
    <div className="place-item">
      <InfoCard data={data}/>
      <LineChart data={data.capacityLog}/>
    </div>
  )
}

export default PlaceItem;