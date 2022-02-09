import React from 'react';
// import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

const slideImages = [
  'https://reactjs.org/logo-og.png ',
  'https://miro.medium.com/max/1152/1*bDwvBeTdjqWuEoXj0vKxXQ.png',
  'https://wallpaperaccess.com/full/3949076.jpg'
];

const Slideshow = () => {
  return (
    <div>
      <Slide >
        <div className="each-slide">
          <div style={{ 'backgroundImage': `url(${slideImages[0]})` }}>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ 'backgroundImage': `url(${slideImages[1]})` }}>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ 'backgroundImage': `url(${slideImages[2]})` }}>
          </div>
        </div>
      </Slide>
    </div>
  )
};

export { Slideshow };