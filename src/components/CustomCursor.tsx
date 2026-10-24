import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on devices that support hover (desktop/mouse)
    if (window.matchMedia('(hover: none)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = (e.target as HTMLElement).closest('[data-cursor], button, a, [role="button"]');
      if (target) {
        setIsHovering(true);
        const text = target.getAttribute('data-cursor') || '';
        setCursorText(text);
      } else {
        setIsHovering(false);
        setCursorText('');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-50 transition-transform duration-75 ease-out"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
      }}
    >
      <div
        className={`-translate-x-1/2 -translate-y-1/2 rounded-full border border-ink-900 transition-all duration-200 flex items-center justify-center ${
          cursorText
            ? 'px-3 py-1 bg-ink-900 text-studio-yellow text-[11px] font-mono tracking-wider shadow-paper rounded-full border-0'
            : isHovering
            ? 'w-12 h-12 bg-studio-yellow/30 backdrop-blur-xs scale-110'
            : 'w-4 h-4 bg-ink-900/60'
        }`}
      >
        {cursorText && <span>{cursorText}</span>}
      </div>
    </div>
  );
};
