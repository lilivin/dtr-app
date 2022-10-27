import React from 'react';
import './bookContainer.scss'
import ksiazka from '../../assets/images/ksiazka.webp'

function BookContainer() {
  return (
    <div className='book-container'>
        <p className='book-container__header'><b>Mój</b> poradnik</p>
        <p className='book-container__description'>Chcesz zacząć podróżować budżetowo? A może chcesz przeżyć przygodę jaką jest podróż solo? W takim razie ten poradnik jest dla Ciebie!</p>
        <img className='book-container__image' src={ksiazka} alt="Książka" />
        <p className='book-container__text'>Zawarte zostały w nim same konkrety, ukryte tipy, o których pierwszy raz usłyszysz i praktyczna wiedza jaką zbierałam przez ostatnie 3 lata ciągłej podróży! I Ty możesz nauczyć się taniego podróżowania.</p>
        <a href="#" className='book-container__btn'>Dowiedz się więcej!</a>
    </div>
  );
}

export default BookContainer;
