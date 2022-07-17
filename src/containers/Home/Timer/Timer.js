import React from 'react';
import './Timer.css'
import { useTimer } from 'react-timer-hook';

function MyTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
    days,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


  return (
    <div className={'timer'}>
      <div className={'timer__items'}>
        <span className={'timer__item timer__days'}>{days}</span>
        <span className ={"timer__item timer__hours"}>{hours}</span>
        <span className={'timer__item timer__minutes'}>{minutes}</span>
        <span className={'timer__item timer__seconds'}>{seconds}</span>
      </div>
    </div>
  );
}

export default function Timer() {
  const time = new Date(2022,7,29);
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}