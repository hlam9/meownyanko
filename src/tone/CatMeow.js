
import React, { useState } from 'react';
import catMeow from './cat-meow.mp3';
import useSound from 'use-sound';
import './CatMeow.css';
function CatMeow() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, {stop}] = useSound(catMeow, { volume: 0.5, loop: true });

  const handlePlay = () => {
    if (!isPlaying) {
      setIsPlaying(true);
      play();
    }
  };

  const handleStop = () => {
    if (isPlaying) {
      setIsPlaying(false);
      stop();
    }
  };
  

  return (
    <div>
      <div className="sound">
      <button onClick={handlePlay} disabled={isPlaying}>
        {isPlaying ? "Playing..." : "Play CatJam"}
      </button>
      <button onClick={handleStop} disabled={!isPlaying}>
        Stop
      </button>
      </div>
    </div>
  );
}
export default CatMeow;