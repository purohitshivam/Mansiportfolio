import React, { useState, useEffect } from 'react';
import { ProjectItem } from '../data/portfolioData';
import { sound } from '../utils/audio';

interface ProjectDrawerProps {
  project: ProjectItem | null;
  onClose: () => void;
  onSelectProject?: (project: ProjectItem) => void;
}

export const ProjectDrawer: React.FC<ProjectDrawerProps> = ({ project, onClose }) => {
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);
  const [viewPdfScan, setViewPdfScan] = useState(false);

  useEffect(() => {
    setSelectedImageIdx(0);
    setViewPdfScan(false);
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (!project) return;
      if (e.key === 'ArrowRight') {
        setSelectedImageIdx((prev) => (prev + 1) % project.images.gallery.length);
        sound.playHover();
      }
      if (e.key === 'ArrowLeft') {
        setSelectedImageIdx((prev) => (prev - 1 + project.images.gallery.length) % project.images.gallery.length);
        sound.playHover();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const currentImg = project.images.gallery[selectedImageIdx] || project.images.gallery[0];
  const pdfPageNum = project.images.pdfPageRefs[0];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-ink-900/70 backdrop-blur-md animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl max-h-[92vh] flex flex-col md:flex-row bg-paper-100 rounded-3xl overflow-hidden shadow-paper-hover border border-ink-900/20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            sound.playClick();
            onClose();
          }}
          className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-paper-50/90 hover:bg-paper-50 border border-ink-900/15 flex items-center justify-center text-ink-900 shadow-paper hover:scale-105 transition-transform"
          aria-label="Close Project Modal"
        >
          ✕
        </button>

        {/* Left Side: Large Gallery & Lightbox */}
        <div className="flex-1 bg-ink-900/5 p-4 sm:p-8 flex flex-col justify-between overflow-y-auto">
          {/* Main Visual Display */}
          <div className="relative flex-1 min-h-[300px] sm:min-h-[460px] flex items-center justify-center rounded-2xl overflow-hidden bg-paper-200 border border-ink-900/10 shadow-inner">
            {viewPdfScan ? (
              <div className="relative w-full h-full flex items-center justify-center p-2 bg-paper-100">
                <img
                  src={`/assets/pages/page_${String(pdfPageNum).padStart(2, '0')}.jpg`}
                  alt={`Original Editorial Portfolio Page ${pdfPageNum}`}
                  className="max-h-[70vh] w-auto object-contain rounded-lg shadow-paper-lg"
                />
                <span className="absolute bottom-3 left-4 px-2.5 py-1 rounded-md bg-ink-900/80 text-white font-mono text-xs">
                  ORIGINAL EDITORIAL PAGE {pdfPageNum}
                </span>
              </div>
            ) : (
              <div className="relative w-full h-full flex flex-col items-center justify-center">
                <img
                  src={currentImg.url}
                  alt={currentImg.caption || project.title}
                  className="max-h-[65vh] w-auto max-w-full object-contain rounded-xl shadow-paper"
                />
                {currentImg.caption && (
                  <div className="mt-3 px-4 py-2 rounded-xl bg-paper-50/95 border border-ink-900/10 text-center max-w-lg shadow-xs">
                    <p className="font-handwriting text-lg text-ink-800">{currentImg.caption}</p>
                    {currentImg.label && (
                      <span className="font-mono text-xs font-bold text-studio-terracotta">
                        {currentImg.label}
                      </span>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Thumbnail Strip & View Mode Toggles */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-ink-900/10">
            {/* View Mode Toggle: Cropped Photos vs Full Editorial PDF Page */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  sound.playClick();
                  setViewPdfScan(false);
                }}
                className={`px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-colors ${
                  !viewPdfScan
                    ? 'bg-ink-900 text-studio-yellow font-bold'
                    : 'bg-paper-200 text-ink-700 hover:bg-paper-300'
                }`}
              >
                Set Photos ({project.images.gallery.length})
              </button>
              <button
                onClick={() => {
                  sound.playClick();
                  setViewPdfScan(true);
                }}
                className={`px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-colors ${
                  viewPdfScan
                    ? 'bg-ink-900 text-studio-yellow font-bold'
                    : 'bg-paper-200 text-ink-700 hover:bg-paper-300'
                }`}
              >
                Original Editorial Page #{pdfPageNum}
              </button>
            </div>

            {/* Thumbnail selector */}
            {!viewPdfScan && (
              <div className="flex gap-2 overflow-x-auto py-1 max-w-md">
                {project.images.gallery.map((img, i) => (
                  <button
                    key={img.id}
                    onClick={() => {
                      sound.playHover();
                      setSelectedImageIdx(i);
                    }}
                    className={`relative w-12 h-12 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                      selectedImageIdx === i
                        ? 'border-ink-900 scale-105 shadow-paper'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img.url} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Editorial Case Study Details */}
        <div className="w-full md:w-[380px] p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-paper-50 border-t md:border-t-0 md:border-l border-ink-900/15">
          <div>
            <div className="flex items-center justify-between font-mono text-xs text-ink-500 mb-2">
              <span className="font-bold text-studio-terracotta">{project.projectNumber}</span>
              <span>{project.details.type}</span>
            </div>

            <h2 className="font-condensed text-3xl sm:text-4xl tracking-wider text-ink-900 uppercase">
              {project.title}
            </h2>

            {project.clientSubtitle && (
              <p className="font-handwriting text-xl text-studio-terracotta font-semibold mt-1">
                {project.clientSubtitle}
              </p>
            )}

            {/* Aesthetic Notes Badges */}
            <div className="flex flex-wrap gap-1.5 mt-4">
              {project.aestheticNotes.map((note, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md bg-paper-200 border border-ink-900/10 font-mono text-[10px] tracking-wider text-ink-800 uppercase"
                >
                  {note}
                </span>
              ))}
            </div>

            {/* Story / Design Intent */}
            <div className="mt-5">
              <h4 className="font-mono text-xs uppercase tracking-wider font-bold text-ink-900 mb-1">
                Spatial Narrative
              </h4>
              <p className="font-sans text-sm text-ink-700 leading-relaxed">
                {project.details.story}
              </p>
            </div>

            {/* Production Responsibilities / Scope */}
            <div className="mt-5">
              <h4 className="font-mono text-xs uppercase tracking-wider font-bold text-ink-900 mb-2">
                Production Duties & Scope
              </h4>
              <ul className="space-y-1.5">
                {project.description.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs font-sans text-ink-700">
                    <span className="text-studio-terracotta mt-0.5">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Material & Color Palette */}
            {project.colorPalette && (
              <div className="mt-5">
                <h4 className="font-mono text-xs uppercase tracking-wider font-bold text-ink-900 mb-2">
                  Curated Color Palette
                </h4>
                <div className="flex gap-2">
                  {project.colorPalette.map((hex, idx) => (
                    <div
                      key={idx}
                      className="w-7 h-7 rounded-full border border-ink-900/20 shadow-xs group relative cursor-pointer"
                      style={{ backgroundColor: hex }}
                      title={hex}
                    >
                      <span className="sr-only">{hex}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {project.materials && (
              <div className="mt-4">
                <h4 className="font-mono text-xs uppercase tracking-wider font-bold text-ink-900 mb-1.5">
                  Material Palette
                </h4>
                <p className="font-handwriting text-sm text-ink-600">
                  {project.materials.join(' • ')}
                </p>
              </div>
            )}
          </div>

          {/* Footer of Drawer */}
          <div className="pt-6 mt-6 border-t border-ink-900/10 flex items-center justify-between">
            <span className="font-mono text-[11px] text-ink-500">
              Role: <strong className="text-ink-900">{project.details.role}</strong>
            </span>
            <button
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              className="px-4 py-2 rounded-full bg-ink-900 text-studio-yellow font-mono text-xs uppercase tracking-wider hover:bg-ink-800 transition-colors"
            >
              Done Viewing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
