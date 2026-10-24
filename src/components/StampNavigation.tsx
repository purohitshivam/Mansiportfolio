import React, { useState, useEffect } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { sound } from '../utils/audio';

interface StampNavigationProps {
  activeSectionId: string;
  onNavigate: (sectionId: string) => void;
}

export const StampNavigation: React.FC<StampNavigationProps> = ({ activeSectionId, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Close when clicking outside or pressing Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleToggle = () => {
    sound.playClick();
    setIsOpen(!isOpen);
  };

  const handleSelect = (id: string) => {
    sound.playStamp();
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <nav className="fixed left-5 top-5 z-40" aria-label="Portfolio Index">
      {/* Corner Stamp Toggle Button */}
      <button
        onClick={handleToggle}
        onMouseEnter={() => sound.playHover()}
        aria-expanded={isOpen}
        aria-label="Open Project Index Stamps"
        className="group relative block w-14 h-18 sm:w-16 sm:h-20 p-1 bg-paper-50 rounded-md border-2 border-dashed border-ink-900/40 shadow-paper hover:shadow-paper-lg transition-all duration-300 transform hover:-translate-y-1 hover:rotate-1 focus:outline-none focus:ring-2 focus:ring-ink-900"
        style={{
          transform: isOpen ? 'rotate(6deg) scale(0.96)' : 'rotate(-4deg)',
        }}
      >
        {/* Stamp Content */}
        <div className="w-full h-full bg-studio-yellow/20 rounded border border-ink-900/20 p-1 flex flex-col justify-between items-center overflow-hidden">
          <div className="flex justify-between w-full text-[9px] font-mono font-bold text-ink-700">
            <span>26</span>
            <span>✺</span>
          </div>
          <span className="font-condensed text-xs sm:text-sm tracking-wider font-bold text-ink-900 text-center leading-tight">
            INDEX
          </span>
          <span className="font-mono text-[8px] text-ink-500 uppercase tracking-tighter">PROJECTS</span>
        </div>

        {/* Tactile Stamp Perforated Notches */}
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-paper-100" />
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-paper-100" />
        <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-paper-100" />
        <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-paper-100" />
      </button>

      {/* Expanded Stamp Sheet Drawer */}
      <div
        className={`absolute left-0 top-24 sm:left-20 sm:top-0 w-[calc(100vw-40px)] sm:w-[620px] max-h-[85vh] overflow-y-auto rounded-3xl bg-paper-50/95 p-5 sm:p-6 border border-ink-900/15 shadow-paper-hover backdrop-blur-md transition-all duration-400 ease-out ${
          isOpen
            ? 'opacity-100 scale-100 translate-y-0 sm:translate-x-0 pointer-events-auto'
            : 'opacity-0 scale-90 -translate-y-4 sm:-translate-x-6 pointer-events-none'
        }`}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between pb-4 border-b border-ink-900/10 mb-5">
          <div>
            <h3 className="font-condensed text-2xl tracking-wider text-ink-900">PROJECT STAMP SHEET</h3>
            <p className="font-handwriting text-sm text-ink-500 -mt-1">
              Select any project stamp to glide directly to that set
            </p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 rounded-full bg-paper-200 hover:bg-paper-300 flex items-center justify-center font-mono text-xs text-ink-700 transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Global Sections (Cover, Profile, Work With Me) */}
        <div className="flex gap-2 mb-4 pb-3 border-b border-ink-900/10 overflow-x-auto">
          <button
            onClick={() => handleSelect('cover')}
            className={`px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-colors ${
              activeSectionId === 'cover'
                ? 'bg-ink-900 text-studio-yellow font-bold'
                : 'bg-paper-200 text-ink-700 hover:bg-paper-300'
            }`}
          >
            ✦ Cover
          </button>
          <button
            onClick={() => handleSelect('about')}
            className={`px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-colors ${
              activeSectionId === 'about'
                ? 'bg-ink-900 text-studio-yellow font-bold'
                : 'bg-paper-200 text-ink-700 hover:bg-paper-300'
            }`}
          >
            ✦ Profile & Resume
          </button>
          <button
            onClick={() => handleSelect('contact')}
            className={`px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-colors ${
              activeSectionId === 'contact'
                ? 'bg-ink-900 text-studio-yellow font-bold'
                : 'bg-paper-200 text-ink-700 hover:bg-paper-300'
            }`}
          >
            ✦ Work With Me
          </button>
        </div>

        {/* Grid of Projects (Project 0 to 10) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
          {PROJECTS_DATA.map((proj, idx) => {
            const isActive = activeSectionId === proj.id;
            const rotations = ['-rotate-2', 'rotate-1', '-rotate-1', 'rotate-2', '-rotate-3', 'rotate-2'];
            const rot = rotations[idx % rotations.length];

            return (
              <button
                key={proj.id}
                onClick={() => handleSelect(proj.id)}
                onMouseEnter={() => sound.playHover()}
                className={`group relative text-left p-2 rounded-xl bg-paper-100 border border-ink-900/20 shadow-paper hover:shadow-paper-lg transition-all duration-300 transform hover:-translate-y-2 hover:rotate-0 hover:scale-105 ${rot} ${
                  isActive ? 'ring-2 ring-ink-900 bg-studio-yellow/15' : ''
                }`}
              >
                {/* Stamp image */}
                <div className="relative aspect-4/3 w-full rounded-lg overflow-hidden bg-paper-300 mb-2 border border-ink-900/10">
                  <img
                    src={proj.images.hero}
                    alt={proj.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute top-1 left-1 px-1.5 py-0.5 rounded bg-ink-900/80 text-studio-yellow font-mono text-[9px] font-bold">
                    #{proj.numIndex}
                  </div>
                </div>

                {/* Stamp label */}
                <p className="font-condensed text-sm sm:text-base tracking-wider text-ink-900 truncate group-hover:text-studio-terracotta transition-colors">
                  {proj.title}
                </p>
                <p className="font-sans text-[10px] text-ink-500 truncate -mt-0.5">
                  {proj.clientSubtitle || proj.aestheticNotes[0]}
                </p>

                {/* Ink Postmark if active */}
                {isActive && (
                  <div className="absolute -top-2 -right-2 pointer-events-none w-14 h-14 rounded-full border-2 border-red-800/80 text-red-800 flex flex-col items-center justify-center -rotate-12 bg-red-100/30 backdrop-blur-xs animate-in fade-in zoom-in-75 duration-300">
                    <span className="font-mono text-[8px] font-bold tracking-widest leading-none">MUMBAI</span>
                    <span className="font-mono text-[10px] font-extrabold leading-none my-0.5">ACTIVE</span>
                    <span className="font-mono text-[7px] leading-none">2026</span>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
