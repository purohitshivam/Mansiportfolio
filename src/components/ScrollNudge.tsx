import React, { useState, useEffect } from 'react';

export const ScrollNudge: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (scrolled) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed left-1/2 -translate-x-1/2 bottom-6 z-30 flex items-center gap-2.5 px-4 py-2 rounded-full bg-paper-50/90 border border-ink-900/15 shadow-paper backdrop-blur-xs pointer-events-none transition-opacity duration-500 animate-bounce"
    >
      <div className="w-3.5 h-5 rounded-full border border-ink-900 flex items-start justify-center p-0.5">
        <div className="w-1 h-1.5 rounded-full bg-ink-900 animate-pulse" />
      </div>
      <span className="font-mono text-xs uppercase tracking-wider text-ink-800 font-semibold">
        Scroll to Explore
      </span>
    </div>
  );
};
