import React, { useEffect, useState } from 'react';
import { sound } from '../utils/audio';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [flipCount, setFlipCount] = useState(0);
  const [isFinishing, setIsFinishing] = useState(false);

  const previewStamps = [
    { title: 'ANDROID SHOW', num: '00', img: '/assets/projects/android_dressing.jpg' },
    { title: 'DYSON', num: '01', img: '/assets/projects/dyson_master_oculus.jpg' },
    { title: 'AZORTE', num: '02', img: '/assets/projects/azorte_hero_stairs.jpg' },
    { title: 'TITAN', num: '03', img: '/assets/projects/titan_parisian_living.jpg' },
    { title: 'COMFORT', num: '04', img: '/assets/projects/comfort_golden_vault.jpg' },
    { title: 'BRU', num: '05', img: '/assets/projects/bru_inhabited_scene.jpg' },
    { title: 'PAATAAL LOK', num: '10', img: '/assets/projects/paataal_lok_attic_hideout.jpg' },
  ];

  const currentPreview = previewStamps[flipCount % previewStamps.length];

  useEffect(() => {
    // Flip 3 times before smoothly landing into the scene
    const interval = setInterval(() => {
      setFlipCount((prev) => {
        if (prev >= 2) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFinishing(true);
            sound.playStamp();
            setTimeout(onComplete, 900);
          }, 350);
          return prev + 1;
        }
        sound.playHover();
        return prev + 1;
      });
    }, 600);

    return () => clearInterval(interval);
  }, [onComplete]);

  const handleSkip = () => {
    setIsFinishing(true);
    sound.playClick();
    setTimeout(onComplete, 400);
  };

  return (
    <div
      onClick={handleSkip}
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-paper-100 transition-all duration-800 ${
        isFinishing ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
      }`}
      style={{ perspective: '1400px' }}
    >
      {/* Background paper texture tint */}
      <div className="absolute inset-0 bg-[#F7F4EC] opacity-95" />

      {/* 3D Flipping Production Slate Card */}
      <div
        className={`relative z-10 transition-transform duration-600 ease-out cursor-pointer ${
          isFinishing ? 'translate-x-32 -translate-y-36 scale-50 rotate-12 opacity-0' : ''
        }`}
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateY(${flipCount * 180}deg) translateY(${flipCount % 2 === 0 ? '0px' : '-20px'})`,
        }}
      >
        {/* Front side: Production Slate */}
        <div
          className="w-56 h-72 rounded-2xl bg-paper-50 p-4 border border-ink-900/15 shadow-paper-lg flex flex-col justify-between"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="flex justify-between items-center border-b border-ink-900/10 pb-2">
            <span className="font-mono text-xs tracking-widest text-ink-500 font-bold">SLATE NO. {currentPreview.num}</span>
            <span className="text-studio-terracotta text-sm">✺</span>
          </div>

          <div className="overflow-hidden rounded-xl h-40 bg-paper-200 border border-ink-900/10 relative">
            <img
              src={currentPreview.img}
              alt={currentPreview.title}
              className="w-full h-full object-cover grayscale contrast-125 brightness-95"
            />
            <div className="absolute inset-0 bg-studio-yellow/10 mix-blend-multiply" />
            <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-ink-900/80 text-white font-mono text-[10px] tracking-wider uppercase">
              {currentPreview.title}
            </div>
          </div>

          <div className="pt-2 text-center">
            <p className="font-condensed text-xl tracking-wider text-ink-900">MANSI RASTOGI</p>
            <p className="font-handwriting text-sm text-studio-terracotta -mt-1">Production Design</p>
          </div>
        </div>

        {/* Back side: Swatch / Clapper */}
        <div
          className="absolute inset-0 w-56 h-72 rounded-2xl bg-ink-900 text-paper-100 p-4 shadow-paper-lg flex flex-col justify-between border border-studio-yellow/40"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <div className="flex justify-between items-center border-b border-paper-100/20 pb-2 font-mono text-[11px] text-studio-yellow">
            <span>SCENE / TAKE</span>
            <span>2026 • 24fps</span>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center text-center px-2">
            <h2 className="font-condensed text-4xl tracking-widest text-studio-yellow">MANSEA</h2>
            <p className="font-handwriting text-xl text-paper-200 mt-1">Design Portfolio</p>
            <div className="w-12 h-0.5 bg-studio-yellow/60 my-3" />
            <p className="font-sans text-[11px] text-paper-300 tracking-wider uppercase">
              100+ Ad Films • 3 Long Formats
            </p>
          </div>

          <div className="flex justify-between items-center font-mono text-[10px] text-paper-400 border-t border-paper-100/20 pt-2">
            <span>MUMBAI, IN</span>
            <span>ROLL 26</span>
          </div>
        </div>
      </div>

      {/* Dynamic breathing shadow underneath */}
      <div
        className={`w-44 h-6 rounded-full bg-ink-900/20 blur-md mt-8 transition-all duration-500 ${
          isFinishing ? 'scale-0 opacity-0' : flipCount % 2 === 0 ? 'scale-100 opacity-25' : 'scale-75 opacity-15'
        }`}
      />

      <p className="mt-8 font-handwriting text-lg text-ink-500 animate-pulse">
        Entering Mansi's studio desk... <span className="text-xs opacity-60 font-sans">(click to skip)</span>
      </p>
    </div>
  );
};
