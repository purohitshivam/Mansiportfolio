import React, { useState, useRef } from 'react';
import { sound } from '../utils/audio';

interface TactilePropProps {
  children: React.ReactNode;
  variant?: 'tilt' | 'lift' | 'polaroid' | 'annotation' | 'tape' | 'minimal';
  className?: string;
  onClick?: () => void;
  cursorLabel?: string;
  tapeTop?: boolean;
  tapeCorner?: 'left' | 'right' | 'both' | 'none';
  onHoverStateChange?: (isHovered: boolean) => void;
}

export const TactileProp: React.FC<TactilePropProps> = ({
  children,
  variant = 'tilt',
  className = '',
  onClick,
  cursorLabel,
  tapeCorner = 'none',
  onHoverStateChange,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [transformStyle, setTransformStyle] = useState<React.CSSProperties>({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (variant !== 'tilt' && variant !== 'polaroid') return;
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8; // Max 8 deg
    const rotateY = ((x - centerX) / centerX) * 8; // Max 8 deg

    setTransformStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.02)`,
      transition: 'transform 0.1s ease-out',
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    sound.playHover();
    if (onHoverStateChange) onHoverStateChange(true);

    if (variant === 'lift') {
      setTransformStyle({
        transform: 'translateY(-10px) scale(1.02)',
        transition: 'transform 0.3s cubic-bezier(0.2, 1.4, 0.4, 1)',
      });
    } else if (variant === 'annotation') {
      setTransformStyle({
        transform: 'scale(1.06) rotate(-1.5deg)',
        transition: 'transform 0.25s cubic-bezier(0.2, 1.4, 0.4, 1)',
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (onHoverStateChange) onHoverStateChange(false);
    setTransformStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)',
      transition: 'transform 0.4s cubic-bezier(0.2, 1, 0.3, 1)',
    });
  };

  const handleClick = () => {
    if (onClick) {
      sound.playClick();
      onClick();
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      data-cursor={cursorLabel}
      style={transformStyle}
      className={`relative transition-shadow duration-300 ${
        isHovered ? 'shadow-paper-hover z-20' : 'shadow-paper'
      } ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {/* Decorative semi-transparent studio masking tape strips */}
      {tapeCorner === 'left' && (
        <div className="absolute -top-3 -left-4 z-30 w-14 h-5 bg-[#E8DFC8]/85 border border-[#D5C9A8]/40 shadow-xs -rotate-25 backdrop-blur-[0.5px] pointer-events-none" />
      )}
      {tapeCorner === 'right' && (
        <div className="absolute -top-3 -right-4 z-30 w-14 h-5 bg-[#E8DFC8]/85 border border-[#D5C9A8]/40 shadow-xs rotate-25 backdrop-blur-[0.5px] pointer-events-none" />
      )}
      {tapeCorner === 'both' && (
        <>
          <div className="absolute -top-3 -left-4 z-30 w-14 h-5 bg-[#E8DFC8]/85 border border-[#D5C9A8]/40 shadow-xs -rotate-25 backdrop-blur-[0.5px] pointer-events-none" />
          <div className="absolute -top-3 -right-4 z-30 w-14 h-5 bg-[#E8DFC8]/85 border border-[#D5C9A8]/40 shadow-xs rotate-25 backdrop-blur-[0.5px] pointer-events-none" />
        </>
      )}

      {children}
    </div>
  );
};
