import React from 'react';
import './quotes.css';
import IMAGE from './photo/R.jpg';
import { Link } from 'react-router-dom';

export default function Quotes() {
  return (
    <div className='quotes'>
      <p className='qm'>10 COOL QUOTES</p>
      <img className='qimg' src={IMAGE} alt='' />
      <div className='moral'>
        <p className='qmoral'>
          1."Peace of mind comes from staying present in the moment".
          --GSR
        </p>
        <p className='qmoral'>
          2. "If you are educated, then don't do work create work"
        </p>
        <p className='qmoral'>
          3. "Take up one idea. Make that one idea your life-- think of it,
          dream of it, live on that idea. Let the brain, muscles, nerves,
          every part of your body, be full of that idea, and just leave every
          other idea alone. This is the way to success" -{' '}
          <Link to='/Swami' className='sami-Link'>Swami Vivekananda</Link>
        </p>
        <p className='qmoral'>4. "Success is journey, so be patient"</p>
        <p className='qmoral'>5. "The true winner is not determined by who starts first, but by who crosses the finish line first."</p>
        <p className='qmoral'>6. "Dreams are not just fleeting thoughts to ponder, but journeys to ponder and wander, every day a step to grow fonder."</p>
        <p className='qmoral'>7. "Whenever you face moments of self-doubt, and it seems like your confidence is wavering,
         hold on to the unwavering belief of that person in your
          life who never sees you as a loser.
           For them, you are always a winner,
            regardless of the situation.
             Keep stepping forward with confidence, fueled by their unshakable faith in you, and you will overcome every obstacle that comes your way, proving yourself as a true champion."</p>
             <p className='qmoral'></p>
      </div>
    </div>
  );
}
