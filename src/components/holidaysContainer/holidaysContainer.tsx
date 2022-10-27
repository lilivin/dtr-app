import React from 'react';
import './holidaysContainer.scss'

function HolidayContainer() {
  return (
    <>
    <p className='holiday-container__header'><b>Okazje</b> wakacyjne</p>
    <p className='holiday-container__description'>Oto wyszukane przeze mnie oferty wakacji w dobrych cenach! W cenie lot oraz zakwaterowanie.</p>
    <div className='holiday-container'>
        <div className='holiday'>
            <p className='holiday__direction'>Barcelona</p>
            <p className='holiday__price'>672zł</p>
        </div>
        <div className='holiday'>
            <p className='holiday__direction'>Budapeszt</p>
            <p className='holiday__price'>532zł</p>
        </div>
        <div className='holiday'>
            <p className='holiday__direction'>Rzym</p>
            <p className='holiday__price'>732zł</p>
        </div>
        <div className='holiday'>
            <p className='holiday__direction'>Wiedeń</p>
            <p className='holiday__price'>523zł</p>
        </div>
        <div className='holiday'>
            <p className='holiday__direction'>Paryż</p>
            <p className='holiday__price'>864zł</p>
        </div>
    </div>
    </>
  );
}

export default HolidayContainer;
