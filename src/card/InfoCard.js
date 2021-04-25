import React from 'react';


function InfoCard(){
  return(
    <div className='info-card'>
      <p className='info-card__title'>Cafetería central</p>
      <div className='info-card__data' >
        <div className='info-card__data--first-row'>
          <div>
            <p>50</p>
            <p>Aforo permitido</p>
          </div>
          <div>
            <p>23</p>
            <p>Dispositivos</p>
          </div>
        </div>
        <div className='info-card__data--first-row'>
          <div>
            <p>23/Mar/2021</p>
            <p>Fecha</p>
          </div>
          <div>
            <p>12:00</p>
            <p>Actualizacion</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default InfoCard;