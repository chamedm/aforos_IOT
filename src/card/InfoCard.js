import React from 'react';
import './InfoCard.style.css'

function InfoCard({data}){
  
  const lastLogHour = getLastLogHour(data.capacityLog);
  const devices = data.capacityLog[`${lastLogHour}:00`];
  const overPopulated = devices > data.maxCapacity;

  const currentDate = new Date();
  const timeString = `${currentDate.getHours()}:${currentDate.getMinutes()}`;

  return(
    <div className='info-card'>
      <p className='info-card__title'>{data.name}</p>
      <div className='info-card__data' >
        <div className='info-card__data--first-row'>
          <div className='info-card__item'>
            <p>{data.maxCapacity}</p>
            <p>Aforo permitido</p>
          </div>
          <div className='info-card__item'>
            <p className={"info-card__current-devices--"+ (overPopulated ? 'red' : 'green')}>{devices}</p>
            <p>Dispositivos</p>
          </div>
        </div>
        <div className='info-card__data--secondt-row'>
          <div className='info-card__item'>
            <p>{data.date}</p>
            <p>Fecha</p>
          </div>
          <div className='info-card__item'>
            <p>{timeString}</p>
            <p>Actualización</p>
          </div>
        </div>

      </div>
    </div>
  )
}

const getLastLogHour = (devicesObj) => {
  const hourKeys = Object.keys(devicesObj);
  const lastHour = hourKeys.map( 
    (key) =>{ 
      let options = key.split(":");
      return options[0];
    })[hourKeys.length-1];
  
  return lastHour;
}

export default InfoCard;