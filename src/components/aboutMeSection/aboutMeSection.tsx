import React from 'react';
import './aboutMeSection.scss'
import NataliaPhoto from '../../assets/images/Natalia.PNG'

function AboutMeSection() {
  return (
    <div className='about-me'>
        <div className='about-me__container'>
            <p className='about-me__text'><b>Cześć!</b><br/><span className='about-me__text--thin'>Jestem Natalia</span></p>
            <img className='about-me__photo' src={NataliaPhoto} alt="Natalia" />
        </div>
        <p className='about-me__description'>...i lubię się z Wami dzielić poradami podróżniczymi oraz podrzucać Wam różne oferty lotniczę. Dzięki mnie jeszcze w tym roku na pewno polecisz na tanie i niezapomniane wakacje!</p>
    </div>
  );
}

export default AboutMeSection;
