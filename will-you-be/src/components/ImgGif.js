import React, { useEffect, useRef } from 'react';
import myGif from './img/doremon-bow.gif';

function ImgGif() {
  const gifRef = useRef(null);

  const restartGIF = () => {
    gifRef.current.src = gifRef.current.getAttribute('src');
  };

  const startTimer = () => {
    setInterval(restartGIF, 10000);
  };

  useEffect(() => {
    // Start the timer when the component mounts
    startTimer();

    // Clear the interval when the component is unmounted
    return () => clearInterval(startTimer);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div>
      <button onClick={restartGIF}>Love Arrow!</button>
      <br />
    
      <br />
      <img ref={gifRef} src={myGif} alt="My GIF" />
    </div>
  );
}

export default ImgGif;
