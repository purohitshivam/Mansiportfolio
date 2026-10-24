import React, { useState } from 'react';
import { sound } from '../utils/audio';

export const AudioToggle: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggle = () => {
    const nextState = sound.toggle();
    setIsPlaying(nextState);
  };

  return (
    <button
      onClick={handleToggle}
      type="button"
      aria-label={isPlaying ? 'Mute sound effects' : 'Enable tactile studio sounds'}
      aria-pressed={isPlaying}
      className="fixed right-5 bottom-5 z-40 flex items-center justify-center gap-1 w-14 h-9 rounded-full bg-paper-50/90 hover:bg-paper-50 text-ink-900 border border-ink-900/10 shadow-paper hover:-translate-y-0.5 transition-all duration-200 backdrop-blur-sm group"
      title={isPlaying ? 'Sound effects ON' : 'Sound effects OFF (Click to enable)'}
    >
      <span className="sr-only">{isPlaying ? 'Sound On' : 'Sound Off'}</span>
      <i
        className={`block w-1.5 rounded-full bg-ink-900 transition-all duration-300 ${
          isPlaying ? 'animate-[bounce_0.6s_infinite_ease-in-out] h-4' : 'h-1.5 opacity-50 group-hover:opacity-100'
        }`}
      />
      <i
        className={`block w-1.5 rounded-full bg-ink-900 transition-all duration-300 ${
          isPlaying ? 'animate-[bounce_0.6s_0.2s_infinite_ease-in-out] h-5' : 'h-1.5 opacity-50 group-hover:opacity-100'
        }`}
      />
      <i
        className={`block w-1.5 rounded-full bg-ink-900 transition-all duration-300 ${
          isPlaying ? 'animate-[bounce_0.6s_0.4s_infinite_ease-in-out] h-3' : 'h-1.5 opacity-50 group-hover:opacity-100'
        }`}
      />
    </button>
  );
};
