import React, { useState, useEffect, useRef } from 'react';
import myGif from './img/doremon-bow.gif';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';

// Modal Component
const ValentineModal = ({ messages, currentIndex, onClose, onPrev, onNext }) => {
  return (
    <div className="modal">
      <button onClick={onPrev}>Previous Message</button>
      <h1>{messages[currentIndex]}</h1>
      <button onClick={onNext}>Next Message</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

const ImgGif = () => {
  const gifRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const restartGIF = () => {
    gifRef.current.src = myGif; // Resetting the source to restart the GIF
  };

  const startTimer = () => {
    setInterval(restartGIF, 10000);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const prevMessage = () => {
    setCurrentMessageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : messages.length - 1));
  };

  const nextMessage = () => {
    if (currentMessageIndex < messages.length - 1) {
      setCurrentMessageIndex((prevIndex) => prevIndex + 1);
    } else {
      // All messages have been read, redirect to the flower animation URL
      window.location.href = 'https://www.codepel.com/demo/javascript-flower-animation/';
    }
  };

  useEffect(() => {
    // Start the timer when the component mounts
    const timerId = setInterval(restartGIF, 10000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(timerId);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const messages = [
    'Click next message',
    'Hi Ali',
    'Im sorry',
    'Di tayo masyado',
    'Nakapag usap kagabi',
    'Sinusubukan ko kasi ihabol to',
    'bago mag 12 AM!!',
    'Di ko sya natapos :((',
    'Kaya ganto',
    'I LOVE YOU nalang HAHAH',
    'I LOVE YOU',
    'I LOVEEEE YOUUU',
    'I LOVEEEE YOUUUUU',
    'I LOVEEEE YOUUUUUUU',
    'I LOVEEEE YOUUUUUUUUUUU!',
    'I LOVEEEE YOUUUUUUUUUUUUUUUUU',
    'I LOVEEEE YOUUUUUUUUUUUUUUUUUUUUUUUU',
    'I Love you Yukari Favila',
    'You will always be my Ali!',
    'Happy Valentines Mahal ko <3',
    // Add more messages as needed
  ];

  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        {/* Image */}
        <img ref={gifRef} src={myGif} alt="My GIF" style={{ maxWidth: '100%', height: 'auto' }} />
        
        {/* Button */}
        <button
          onClick={restartGIF}
          style={{
            backgroundColor: '#ff4d4d',
            color: 'white',
            padding: '10px 15px',
            fontSize: '16px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '10px',  // Add margin for spacing
          }}
        >
          Love Arrow!
        </button>

        <button
          onClick={openModal}
          style={{
            backgroundColor: '#ff4d4d',
            color: 'white',
            padding: '10px 15px',
            fontSize: '16px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '10px',  // Add margin for spacing
          }}
        >
          Don't Click Me!!
        </button>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Navigate to="/modal" />} />
          <Route
            path="/modal"
            element={
              isModalOpen && (
                <ValentineModal
                  messages={messages}
                  currentIndex={currentMessageIndex}
                  onClose={closeModal}
                  onPrev={prevMessage}
                  onNext={nextMessage}
                />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default ImgGif;
