import React from 'react';
import './postsInstagram.scss';
import IG1 from '../../assets/images/IG1.PNG'
import IG2 from '../../assets/images/IG2.PNG'
import IG3 from '../../assets/images/IG3.PNG'
import InstagramIcon from '../../assets/images/instagram.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function PostsInstagram() {
  return (
    <div className='instagram'>
        <p className='instagram__header'><b>Mój</b> instagram</p>
        <p className='instagram__description'>Zobacz ostatnie posty z mojego profilu na instagramie! Zostaw follow, aby być na bieżąco z nowościami!</p>
        <div className='instagram__carousel'>
          <div className='instagram__carousel-post'>
            <img src={IG1} alt="IG1" />
          </div>
          <div className='instagram__carousel-post'>
            <img src={IG2} alt="IG2" />
          </div>
          <div className='instagram__carousel-post'>
            <img src={IG3} alt="IG3" />
          </div>
          <div className='instagram__carousel-post--invitation'>
            <img className='instagram__icon' src={InstagramIcon} alt="instagram image" />
            Sprawdź<br/><b>Instagrama</b>
          </div>
        </div>
    </div>
  );
}

export default PostsInstagram;
