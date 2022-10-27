import React from 'react';
import './bargainContainer.scss'
import TripLink from '../tripLink/tripLink.tsx';
import Wizz from '../../assets/images/logo_wizz.jpg'

function BargainContainer() {
  return (
    <>
    <p className='bargain-container__header'><b>Okazje</b> lotnicze</p>
    <p className='bargain-container__description'>Jeśli już przeczytałeś moją książkę i sam potrafisz wynajdywać oferty noclegów tutaj znajdziesz tylko okazje lotnicze!</p>
    <div className='bargain-container'>
        <div className='bargain'>
            <TripLink time="3h30min" toShortcut="BUD" fromShortcut="KTW" from="Katowice" to="Budapeszt"/>
            <div className='bargain__time'>
                <div className='bargain__time-details'>
                    <p>4:30</p>
                    <span>2 Września</span>
                </div>
                <div className='bargain__time-details'>
                    <p>13:30</p>
                    <span>8 Września</span>
                </div>
            </div>
            <div className='bargain__price'>
                <div className='bargain__price-company'>
                    <img src={Wizz} alt="Wizzair logo" />
                </div>
                <div className='bargain__price-amount'>144zł</div>
            </div>
            <a className='bargain__btn' href="#">Sprawdź</a>
        </div>
        <div className='bargain'>
            <TripLink time="3h30min" toShortcut="TIA" fromShortcut="WIM" from="Modlin" to="Tirana"/>
            <div className='bargain__time'>
                <div className='bargain__time-details'>
                    <p>7:30</p>
                    <span>12 Września</span>
                </div>
                <div className='bargain__time-details'>
                    <p>19:30</p>
                    <span>18 Września</span>
                </div>
            </div>
            <div className='bargain__price'>
                <div className='bargain__price-company'>
                    <img src={Wizz} alt="Wizzair logo" />
                </div>
                <div className='bargain__price-amount'>234zł</div>
            </div>
            <a className='bargain__btn' href="#">Sprawdź</a>
        </div>
        <div className='bargain'>
            <TripLink time="2h15min" toShortcut="BCN" fromShortcut="WIM" from="Modlin" to="Barcelona"/>
            <div className='bargain__time'>
                <div className='bargain__time-details'>
                    <p>7:30</p>
                    <span>07 Września</span>
                </div>
                <div className='bargain__time-details'>
                    <p>19:30</p>
                    <span>13 Września</span>
                </div>
            </div>
            <div className='bargain__price'>
                <div className='bargain__price-company'>
                    <img src={Wizz} alt="Wizzair logo" />
                </div>
                <div className='bargain__price-amount'>352zł</div>
            </div>
            <a className='bargain__btn' href="#">Sprawdź</a>
        </div>
    </div>
    </>
  );
}

export default BargainContainer;
