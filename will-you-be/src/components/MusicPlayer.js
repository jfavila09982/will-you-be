// MusicPlayer.js
import React, { useRef } from 'react';

const MusicPlayer = () => {
  const audioRef = useRef(null);

  const playMusic = () => {
    audioRef.current.play();
  };

  return (
    <div>
      <button onClick={playMusic}>Play</button>
      <audio ref={audioRef} src="./src/components/music/music-box-doraemon.mp3" />
    </div>
  );
};

export default MusicPlayer;
