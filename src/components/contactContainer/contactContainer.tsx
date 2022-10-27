import React from 'react';
import './contactContainer.scss'
import tiktok from '../../assets/images/tiktok.svg'
import mail from '../../assets/images/mail.svg'
import instagram from '../../assets/images/instagramm.svg'
import facebook from '../../assets/images/facebook.svg'

function ContactContainer() {
  return (
    <div className='contact-container'>
        <p className='contact-container__header'><b>Znajdziesz</b> mnie</p>
        <p className='contact-container__description'>Poniżej zostawiam linki do moich sociali. Zachęcam do obserwowania i śledzenia moich podróży!</p>
      <div className='contact-container__ways'>
        <img src={facebook} alt="facebook" />
        <img src={tiktok} alt="tiktok" />
        <img src={instagram} alt="instagram" />
        <img src={mail} alt="mail" />
      </div>
    </div>
  );
}

export default ContactContainer;
