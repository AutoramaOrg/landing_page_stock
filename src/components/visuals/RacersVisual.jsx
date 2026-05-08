import React from 'react';

const suits = ['red', 'blue', 'gold', 'white', 'green'];

export default function RacersVisual() {
  return (
    <div className="racers-scene">
      <div className="smoke" />
      {suits.map((suit, index) => (
        <div key={suit} className={`racer racer-${suit}`} style={{ '--i': index }}>
          <span className="helmet" />
          <span className="visor" />
          <span className="torso" />
          <span className="leg left" />
          <span className="leg right" />
        </div>
      ))}
      <div className="track-line" />
    </div>
  );
}
