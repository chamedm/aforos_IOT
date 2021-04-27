import React from 'react';
import LineChart from '../chart/LineChart';
import InfoCard from '../card/InfoCard';
import './PlaceItem.style.css';


function PlaceItem({data, openDialog}) {
  return(
    <div className="place-item">
      <InfoCard data={data} openDialog={openDialog}/>
      <LineChart data={data.capacityLog}/>
    </div>
  )
}

export default PlaceItem;