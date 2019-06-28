import React from 'react';
import cherry from './img/cherry.png';
import bar3 from './img/3bar.png';
import bar2 from './img/2bar.png';
import bar from './img/bar.png';
import seven from './img/7.png';
import './Reel.css';

export default function Reel({ angle = 0, rotationTime = 2 }) {
  return (
    <div className="reel">
      <div className="scene">
        <div
          className="carousel"
          style={{
            transform: `rotateX(-${angle}deg)`,
            transition: `transform ${rotationTime}s ease`
          }}
        >
          <img className="carousel__item" src={bar3} alt="bar3" />
          <img className="carousel__item" src={bar} alt="bar" />
          <img className="carousel__item" src={bar2} alt="bar2" />
          <img className="carousel__item" src={seven} alt="seven" />
          <img className="carousel__item" src={cherry} alt="cherry" />
          <img className="carousel__item" src={bar3} alt="bar3" />
          <img className="carousel__item" src={bar} alt="bar" />
          <img className="carousel__item" src={bar2} alt="bar2" />
          <img className="carousel__item" src={seven} alt="seven" />
          <img className="carousel__item" src={cherry} alt="cherry" />
        </div>
      </div>
    </div>
  );
}
