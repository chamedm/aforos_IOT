import React from 'react';
import './InfoCard.style.css'

function InfoCard(){
  const data = {
    "id": "c1",
    "name": "Cafeteria central",
    "date": "01/30/2021",
    "maxCapacity": 50,
    "capacityLog": {
      "06:00": 1,
      "07:00": 3,
      "08:00": 10,
      "09:00": 25,
      "10:00": 35,
      "11:00": 38,
      "12:00": 23,
      "13:00": 40,
      "14:00": 35,
      "15:00": 52,
    }
  };

  
  const lastLogHour = getLastLogHour(data.capacityLog);
  const devices = data.capacityLog[`${lastLogHour}:00`];
  const overPopulated = devices > data.maxCapacity;

  const currentDate = new Date();
  const timeString = `${currentDate.getHours()}:${currentDate.getMinutes()}`;

  return(
    <div className='info-card'>
      <p className='info-card__title'>Cafetería central</p>
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
      console.log(options)
      return options[0];
    })[hourKeys.length-1];
  
  return lastHour;
}

export default InfoCard;