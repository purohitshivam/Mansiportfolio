import React from 'react';
import { TactileProp } from './TactileProp';
import { sound } from '../utils/audio';

interface HeroCoverProps {
  onExploreClick: () => void;
  onOpenAbout: () => void;
}

export const HeroCover: React.FC<HeroCoverProps> = ({ onExploreClick, onOpenAbout }) => {
  return (
    <section
      id="cover"
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between p-6 sm:p-12 md:p-16 max-w-7xl mx-auto overflow-hidden select-none"
    >
      {/* Top Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-16 sm:pt-4 border-b border-ink-900/10 pb-6">
        <div className="flex items-center gap-3">
          <span className="text-2xl sm:text-3xl text-ink-900 animate-spin-slow">✺</span>
          <div>
            <h1 className="font-sans text-xl sm:text-2xl font-extrabold tracking-tight text-ink-900 uppercase">
              MANSI RASTOGI
            </h1>
            <p className="font-mono text-xs text-ink-500 uppercase tracking-widest -mt-0.5">
              MUMBAI, INDIA • 2026
            </p>
          </div>
        </div>

        {/* Quick Nav Badges */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              sound.playClick();
              onOpenAbout();
            }}
            className="px-4 py-2 rounded-full bg-paper-50 hover:bg-studio-yellow border border-ink-900/15 text-ink-900 font-mono text-xs uppercase tracking-wider shadow-paper hover:-translate-y-0.5 transition-all"
          >
            Resume & Experience &rarr;
          </button>
        </div>
      </div>

      {/* Main Center Typographic Feature */}
      <div className="my-auto py-12 relative flex flex-col items-center justify-center text-center">
        {/* Subtle decorative background film frames / sketches */}
        <div className="absolute -left-4 sm:left-10 top-0 opacity-20 pointer-events-none -rotate-6">
          <TactileProp variant="polaroid" className="w-28 sm:w-44 p-2 bg-paper-50 rounded-lg">
            <img src="/assets/projects/android_dressing.jpg" alt="" className="w-full aspect-square object-cover rounded" />
          </TactileProp>
        </div>

        <div className="absolute -right-4 sm:right-10 bottom-0 opacity-20 pointer-events-none rotate-6">
          <TactileProp variant="polaroid" className="w-28 sm:w-44 p-2 bg-paper-50 rounded-lg">
            <img src="/assets/projects/comfort_golden_vault.jpg" alt="" className="w-full aspect-square object-cover rounded" />
          </TactileProp>
        </div>

        {/* The Iconic Yellow "PORTFOLIO" Condensed Outline Title */}
        <div className="relative group cursor-default">
          <h2
            className="font-condensed text-[18vw] sm:text-[14vw] md:text-[160px] lg:text-[210px] leading-[0.82] tracking-normal uppercase select-none transition-transform duration-300 group-hover:scale-102"
            style={{
              color: '#FFDE38',
              WebkitTextStroke: '3px #151311',
              textShadow: '6px 6px 0px #151311',
            }}
          >
            PORTFOLIO
          </h2>

          {/* Overlapping cursive "Production Design" */}
          <span
            className="block font-script text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-ink-900 -mt-8 sm:-mt-14 md:-mt-20 lg:-mt-24 ml-12 sm:ml-24 md:ml-36 transform -rotate-6 pointer-events-none drop-shadow-sm"
          >
            Production Design
          </span>
        </div>

        {/* Interactive Floating Clapper Slate Button */}
        <div className="mt-12 sm:mt-16 flex flex-col items-center">
          <TactileProp
            variant="lift"
            tapeCorner="both"
            onClick={onExploreClick}
            cursorLabel="SCROLL"
            className="px-6 py-3 rounded-2xl bg-paper-50/95 border-2 border-ink-900 shadow-paper-lg hover:bg-studio-yellow/20 flex items-center gap-3 transition-colors"
          >
            <span className="w-3 h-3 rounded-full bg-studio-terracotta animate-pulse" />
            <span className="font-mono text-xs sm:text-sm tracking-wider uppercase font-bold text-ink-900">
              EXPLORE 11 ARCHITECTURAL SETS
            </span>
            <span className="text-ink-500 font-mono text-xs">&darr;</span>
          </TactileProp>
        </div>
      </div>

      {/* Bottom Identity Tagline Bar */}
      <div className="border-t border-ink-900/15 pt-6 pb-2 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <p className="font-sans font-bold tracking-wider text-xs sm:text-sm uppercase text-ink-900">
          PRODUCTION DESIGNER <span className="text-studio-terracotta">|</span> PHOTO BASED ARTIST <span className="text-studio-terracotta">|</span> PRODUCT DESIGNER
        </p>

        <div className="flex items-center gap-4 font-mono text-xs text-ink-500">
          <span>100+ COMMERCIALS</span>
          <span>•</span>
          <span>3 LONG FORMATS</span>
          <span>•</span>
          <span>NIFT CHENNAI</span>
        </div>
      </div>
    </section>
  );
};
