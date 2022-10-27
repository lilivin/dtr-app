import React from 'react';
import './tripLink.scss'

function TripLink(props: {time, toShortcut, fromShortcut, to, from}) {
  return (
    <>
        <div className='trip-link'>
            <div className='trip-link__from'>
                <p className='trip-link__shortcut--from'>{props.fromShortcut}</p>
            </div>
            <div className='trip-link__line'></div>
            <div className='trip-link__to'>
                <p className='trip-link__shortcut--to'>{props.toShortcut}</p>
            </div>
        </div>
        <div className='trip-link__directions'>
            <p>{props.from}</p>
            <p>{props.time}</p>
            <p>{props.to}</p>
        </div>
    </>
  );
}

export default TripLink;
