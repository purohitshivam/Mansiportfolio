import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { PROJECTS_DATA, ProjectItem } from './data/portfolioData';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { AudioToggle } from './components/AudioToggle';
import { StampNavigation } from './components/StampNavigation';
import { ScrollNudge } from './components/ScrollNudge';
import { HeroCover } from './components/HeroCover';
import { ProfileIntro } from './components/ProfileIntro';
import { ProjectSection } from './components/ProjectSection';
import { ProjectDrawer } from './components/ProjectDrawer';
import { WorkWithMe } from './components/WorkWithMe';
import { FullPdfModal } from './components/FullPdfModal';
import { sound } from './utils/audio';

export const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [activeSectionId, setActiveSectionId] = useState('cover');
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

  // Initialize Lenis smooth momentum scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Track active section for postmark stamp
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSectionId(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -40% 0px' }
    );

    const sections = document.querySelectorAll('section[id], article[id]');
    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, [loading]);

  const scrollTo = (id: string) => {
    sound.playClick();
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-paper-100 text-ink-900 overflow-x-hidden">
      {/* Opening tactile preloader */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Custom magnetic tactile cursor */}
      <CustomCursor />

      {/* Tactile Audio synthesizer toggle in bottom corner */}
      <AudioToggle />

      {/* Floating scroll prompt */}
      <ScrollNudge />

      {/* Top Left: Stamp Sheet Fold-out Navigation */}
      <StampNavigation
        activeSectionId={activeSectionId}
        onNavigate={(id) => scrollTo(id)}
      />

      {/* Top Right: Studio Quick Actions Bar */}
      <header className="fixed top-5 right-5 z-40 flex items-center gap-2 sm:gap-3">
        <button
          onClick={() => {
            sound.playClick();
            setIsPdfModalOpen(true);
          }}
          className="px-3.5 sm:px-4 py-2 rounded-full bg-paper-50/90 hover:bg-studio-yellow border border-ink-900/15 text-ink-900 font-mono text-xs uppercase tracking-wider shadow-paper hover:-translate-y-0.5 transition-all backdrop-blur-xs flex items-center gap-1.5"
          title="Inspect complete original 22-page editorial PDF"
        >
          <span className="text-studio-terracotta">📄</span>
          <span className="hidden sm:inline">Original</span>
          <span>PDF (22 Pages)</span>
        </button>

        <button
          onClick={() => scrollTo('contact')}
          className="px-3.5 sm:px-4 py-2 rounded-full bg-ink-900 text-studio-yellow font-mono text-xs uppercase tracking-wider hover:bg-ink-800 transition-colors shadow-paper"
        >
          Work With Me &rarr;
        </button>
      </header>

      {/* Main Portfolio Track */}
      <main className="relative">
        {/* Cover / Page 1 */}
        <HeroCover
          onExploreClick={() => scrollTo('android-show')}
          onOpenAbout={() => scrollTo('about')}
        />

        {/* Profile & Resume / Page 2 + CV */}
        <ProfileIntro />

        {/* 11 Art-Directed Project Chapters (Projects 0 to 10) */}
        <div id="projects-container" className="space-y-4">
          {PROJECTS_DATA.map((project) => (
            <ProjectSection
              key={project.id}
              project={project}
              onOpenProject={(p) => {
                sound.playClick();
                setActiveProject(p);
              }}
            />
          ))}
        </div>

        {/* Closing Contact / Page 22: WORK With Me */}
        <WorkWithMe />
      </main>

      {/* Expanded Project Case Study Drawer Modal */}
      {activeProject && (
        <ProjectDrawer
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}

      {/* Original 22-Page Editorial PDF Viewer Modal */}
      <FullPdfModal
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
      />
    </div>
  );
};
