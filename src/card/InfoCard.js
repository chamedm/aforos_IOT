import React from 'react';
import './InfoCard.style.css'

function InfoCard(){
  return(
    <div className='info-card'>
      <p className='info-card__title'>Cafetería central</p>
      <div className='info-card__data' >
        <div className='info-card__data--first-row'>
          <div className='info-card__item'>
            <p>50</p>
            <p>Aforo permitido</p>
          </div>
          <div className='info-card__item'>
            <p>23</p>
            <p>Dispositivos</p>
          </div>
        </div>
        <div className='info-card__data--secondt-row'>
          <div className='info-card__item'>
            <p>23/Mar/2021</p>
            <p>Fecha</p>
          </div>
          <div className='info-card__item'>
            <p>12:00</p>
            <p>Actualización</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default InfoCard;