import React, { useState, useEffect } from 'react';
import { sound } from '../utils/audio';

interface FullPdfModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPage?: number;
}

export const FullPdfModal: React.FC<FullPdfModalProps> = ({
  isOpen,
  onClose,
  initialPage = 1,
}) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const totalPages = 22;

  useEffect(() => {
    setCurrentPage(initialPage);
  }, [initialPage, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
        sound.playHover();
      }
      if (e.key === 'ArrowLeft') {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
        sound.playHover();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const pageStr = String(currentPage).padStart(2, '0');

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-ink-900/80 backdrop-blur-md animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[95vh] bg-paper-100 rounded-3xl p-4 sm:p-6 flex flex-col justify-between shadow-paper-hover border border-ink-900/20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-ink-900/10 mb-3">
          <div>
            <h3 className="font-condensed text-2xl tracking-wider text-ink-900">
              ORIGINAL EDITORIAL PDF PORTFOLIO
            </h3>
            <p className="font-mono text-xs text-ink-500">
              Page {currentPage} of {totalPages} • Mansea Design Portfolio 26
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                sound.playClick();
                setCurrentPage((prev) => Math.max(prev - 1, 1));
              }}
              disabled={currentPage === 1}
              className="px-3 py-1.5 rounded-full bg-paper-200 hover:bg-paper-300 disabled:opacity-40 text-xs font-mono font-bold"
            >
              &larr; Prev
            </button>
            <button
              onClick={() => {
                sound.playClick();
                setCurrentPage((prev) => Math.min(prev + 1, totalPages));
              }}
              disabled={currentPage === totalPages}
              className="px-3 py-1.5 rounded-full bg-paper-200 hover:bg-paper-300 disabled:opacity-40 text-xs font-mono font-bold"
            >
              Next &rarr;
            </button>
            <button
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              className="w-8 h-8 rounded-full bg-paper-200 hover:bg-paper-300 flex items-center justify-center text-xs font-mono ml-2"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Page Render */}
        <div className="flex-1 overflow-auto flex items-center justify-center bg-paper-200 rounded-2xl p-2 sm:p-4 border border-ink-900/10 min-h-[300px]">
          <img
            src={`/assets/pages/page_${pageStr}.jpg`}
            alt={`Page ${currentPage}`}
            className="max-h-[75vh] w-auto object-contain rounded-xl shadow-paper-lg"
          />
        </div>

        {/* Thumbnail Navigator bar */}
        <div className="mt-3 pt-2 border-t border-ink-900/10 flex gap-1.5 overflow-x-auto py-1">
          {Array.from({ length: totalPages }).map((_, i) => {
            const pageNum = i + 1;
            const pStr = String(pageNum).padStart(2, '0');
            return (
              <button
                key={pageNum}
                onClick={() => {
                  sound.playHover();
                  setCurrentPage(pageNum);
                }}
                className={`w-9 h-11 rounded border flex flex-col items-center justify-center text-[10px] font-mono flex-shrink-0 transition-all ${
                  currentPage === pageNum
                    ? 'border-ink-900 bg-studio-yellow font-bold scale-105'
                    : 'border-ink-900/20 bg-paper-50 opacity-70 hover:opacity-100'
                }`}
              >
                <span>{pStr}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
