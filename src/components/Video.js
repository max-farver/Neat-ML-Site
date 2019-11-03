import React from 'react';

import vid from '../Hackisu2019.mp4';

export const Video = () => (
  <div className='video-wrapper'>
    <div className='video'>
      <video controls autoplay muted loop id='myVideo'>
        <source src={vid} type='video/mp4' />
      </video>
    </div>
  </div>
);
