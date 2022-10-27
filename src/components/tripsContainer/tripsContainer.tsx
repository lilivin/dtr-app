import React from 'react';
import TripLink from '../tripLink/tripLink.tsx';
import './tripsContainer.scss'
import Albania from '../../assets/images/albania.jpeg'
import Roma from '../../assets/images/roma.jpg'
import Budapeszt from '../../assets/images/budapeszt.jpg'
import Barcelona from '../../assets/images/barcelona.jpg'

function TripsContainer() {
  return (
    <>
      <p className='trip-container__header'><b>Moje</b> podróże</p>
      <p className='trip-container__description'>Oto moje podróże, które odbyłam podróżując samotnie! Kliknij <b>rozwiń</b>, aby dowiedzieć się więcej!</p>
      <div className='trip-container'>
        <div className='trip-card'>
            <img className='trip-card__photo' src={Roma} alt="Roma Photo" />
            <div className='trip-card__content'>
                <p className='trip-card__title'>Rzym</p>
                <TripLink time="2h30min" toShortcut="CIA" fromShortcut="WIM" from="Modlin" to="Rzym"/>
            </div>
            <div className='trip-card__time-line'>
                <div>
                    <p className='trip-card__date'>07 Marca</p>
                    <p className='trip-card__date'>14 Marca</p>
                </div>
                <p className='trip-card__status trip-card__status--coming'>Nadchodząca</p>
            </div>
            <a className='trip-card__btn' href="#">Rozwiń</a>
        </div>
        <div className='trip-card'>
            <img className='trip-card__photo' src={Barcelona} alt="Barcelona Photo" />
            <div className='trip-card__content'>
                <p className='trip-card__title'>Barcelona</p>
                <TripLink time="2h15min" toShortcut="BCN" fromShortcut="WIM" from="Modlin" to="Barcelona"/>
            </div>
            <div className='trip-card__time-line'>
                <div>
                    <p className='trip-card__date'>01 Sierpnia</p>
                    <p className='trip-card__date'>11 Sierpnia</p>
                </div>
                <p className='trip-card__status trip-card__status--made'>Odbyta</p>
            </div>
            <a className='trip-card__btn' href="#">Rozwiń</a>
        </div>
        <div className='trip-card'>
            <img className='trip-card__photo' src={Albania} alt="Albania Photo" />
            <div className='trip-card__content'>
                <p className='trip-card__title'>Tirana</p>
                <TripLink time="3h30min" toShortcut="TIA" fromShortcut="WIM" from="Modlin" to="Tirana"/>
            </div>
            <div className='trip-card__time-line'>
                <div>
                    <p className='trip-card__date'>23 Lipca</p>
                    <p className='trip-card__date'>30 Lipca</p>
                </div>
                <p className='trip-card__status trip-card__status--made'>Odbyta</p>
            </div>
            <a className='trip-card__btn' href="#">Rozwiń</a>
        </div>
        <div className='trip-card'>
            <img className='trip-card__photo' src={Budapeszt} alt="Budapeszt Photo" />
            <div className='trip-card__content'>
                <p className='trip-card__title'>Budapeszt</p>
                <TripLink time="3h30min" toShortcut="BUD" fromShortcut="KTW" from="Katowice" to="Budapeszt"/>
            </div>
            <div className='trip-card__time-line'>
                <div>
                    <p className='trip-card__date'>15 Sierpnia</p>
                    <p className='trip-card__date'>21 Sierpnia</p>
                </div>
                <p className='trip-card__status trip-card__status--made'>Odbyta</p>
            </div>
            <a className='trip-card__btn' href="#">Rozwiń</a>
        </div>
      </div>
    </>
  );
}

export default TripsContainer;
