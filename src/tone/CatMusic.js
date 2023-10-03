import React, { useState } from 'react';
import * as Tone from 'tone';

function CatMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const synth = new Tone.Synth().toDestination();
  const melody = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5'];
  const sequence = new Tone.Sequence((time, note) => {
    synth.triggerAttackRelease(note, '8n', time);
  }, melody).start(0);

  // generate a longer sequence with a different melody
  const newMelody = ['A4', 'B4', 'C5', 'D5', 'E5', 'F5', 'G5', 'A5'];
  const longerMelody = [...melody];
  for (let i = 0; i < 15; i++) {
    longerMelody.push(...newMelody);
  }

  function handlePlayButtonClick() {
    if (!isPlaying) {
      Tone.start();
      sequence.values = longerMelody;
      sequence.loop = true;
      sequence.loopEnd = longerMelody.length * '8n';
      Tone.Master.volume.value = -24; // reduce the volume by half (6 dB)
      Tone.Transport.start();
      setIsPlaying(true);
    }
  }

  function handleStopButtonClick() {
    if (isPlaying) {
      Tone.Transport.stop();
      setIsPlaying(false);
    }
  }

  return (
    <div>
      <h1>Cat Music</h1>
      <p>Click the play button to start the cat background music.</p>
      <button onClick={handlePlayButtonClick} disabled={isPlaying}>
        {isPlaying ? 'Playing...' : 'Play'}
      </button>
      <button onClick={handleStopButtonClick} disabled={!isPlaying}>
        Stop
      </button>
    </div>
  );
}

export default CatMusic;
