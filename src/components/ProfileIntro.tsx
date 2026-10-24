import React, { useState } from 'react';
import { PROFILE_DATA } from '../data/portfolioData';
import { TactileProp } from './TactileProp';
import { sound } from '../utils/audio';

export const ProfileIntro: React.FC = () => {
  const [showFullResumeModal, setShowFullResumeModal] = useState(false);

  return (
    <section id="about" className="py-20 px-6 sm:px-12 md:px-16 max-w-7xl mx-auto border-t border-ink-900/10">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-studio-terracotta uppercase mb-2">
            <span>✺ SECTION 01</span>
            <span>•</span>
            <span>PROFILE & IDENTITY</span>
          </div>
          <h2 className="font-condensed text-4xl sm:text-6xl tracking-wider text-ink-900 uppercase">
            ABOUT MANSI RASTOGI
          </h2>
          <p className="font-handwriting text-2xl text-ink-600 -mt-1">
            Production Designer • Photo Based Artist • Product Designer
          </p>
        </div>

        <button
          onClick={() => {
            sound.playClick();
            setShowFullResumeModal(true);
          }}
          className="px-5 py-2.5 rounded-full bg-ink-900 text-studio-yellow font-mono text-xs uppercase tracking-wider hover:bg-ink-800 transition-colors shadow-paper flex items-center gap-2"
        >
          <span>View Full CV & Resume</span>
          <span>&nearr;</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Portrait Polaroid + Handwritten Bio */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <TactileProp
            variant="polaroid"
            tapeCorner="left"
            className="p-4 bg-paper-50 rounded-2xl border border-ink-900/15"
          >
            <div className="aspect-4/5 w-full rounded-xl overflow-hidden bg-paper-200 border border-ink-900/10 relative">
              <img
                src="/assets/mansi_photo.png"
                alt="Mansi Rastogi - Production Designer"
                className="w-full h-full object-cover object-top filter contrast-105"
              />
              <div className="absolute bottom-3 left-3 px-3 py-1 rounded bg-ink-900/80 text-white font-mono text-xs">
                MANSI RASTOGI • MUMBAI
              </div>
            </div>
            <p className="mt-3 font-handwriting text-xl text-center text-ink-700">
              "Visually voicing stories & curating aesthetics"
            </p>
          </TactileProp>

          {/* Education Box */}
          <TactileProp variant="lift" className="p-6 rounded-2xl bg-paper-50 border border-ink-900/10">
            <h4 className="font-mono text-xs uppercase tracking-wider font-bold text-ink-500 mb-2">
              ACADEMIC BACKGROUND
            </h4>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-sans font-bold text-lg text-ink-900">{PROFILE_DATA.education.degree}</p>
                <p className="font-handwriting text-base text-studio-terracotta">{PROFILE_DATA.education.institution}</p>
              </div>
              <span className="font-mono text-xs px-2.5 py-1 rounded bg-studio-yellow/30 text-ink-900 border border-ink-900/15">
                NIFT ALUMNA
              </span>
            </div>
          </TactileProp>
        </div>

        {/* Right Column: Narrative & Work Experience Timeline */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          {/* Handwritten Bio Card from PDF Page 2 */}
          <TactileProp
            variant="lift"
            tapeCorner="right"
            className="p-6 sm:p-8 rounded-3xl bg-[#FAF6EC] border border-ink-900/15 relative overflow-hidden"
          >
            <div className="font-handwriting text-2xl sm:text-3xl text-ink-800 leading-relaxed space-y-4">
              <p>
                <strong className="text-studio-terracotta font-bold">Hello!</strong> I'm Mansi, an assistant production designer in the Film industry in Bombay, with{' '}
                <span className="underline decoration-studio-yellow decoration-4 underline-offset-4 font-semibold text-ink-900">
                  5 years of work experience in over 100 ad films and 3 long-format film projects.
                </span>
              </p>
              <p>
                I've also worked as a lifestyle accessory/product designer and product stylist. Visually voicing stories and always curating aesthetics, here to make films a better place :)
              </p>
              <p className="text-xl sm:text-2xl text-ink-600 pt-2 border-t border-ink-900/10">
                {PROFILE_DATA.mentorsNote}
              </p>
            </div>
          </TactileProp>

          {/* Core Production Skills */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider font-bold text-ink-500 mb-3">
              PRODUCTION & ART DEPARTMENT CAPABILITIES
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {PROFILE_DATA.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-paper-50 border border-ink-900/10 flex items-center gap-3 hover:bg-studio-yellow/20 transition-colors"
                >
                  <span className="text-studio-terracotta text-sm">✦</span>
                  <span className="font-sans text-xs sm:text-sm font-medium text-ink-800">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Work Experience Timeline */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider font-bold text-ink-500 mb-4">
              EXPERIENCE TIMELINE
            </h4>
            <div className="space-y-4">
              {PROFILE_DATA.experienceTimeline.map((item, idx) => (
                <TactileProp
                  key={idx}
                  variant="lift"
                  className="p-4 sm:p-5 rounded-2xl bg-paper-50 border border-ink-900/10 flex flex-col sm:flex-row justify-between sm:items-center gap-2 hover:border-ink-900/30 transition-all"
                >
                  <div>
                    <h5 className="font-sans font-bold text-base text-ink-900">{item.role}</h5>
                    <p className="font-handwriting text-lg text-studio-terracotta">{item.company}</p>
                    <p className="font-sans text-xs text-ink-600 mt-1">{item.details}</p>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-paper-200 text-ink-800 border border-ink-900/10 inline-block">
                      {item.period}
                    </span>
                    <p className="font-mono text-[11px] text-ink-500 mt-1">{item.location}</p>
                  </div>
                </TactileProp>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Full Resume Image Modal */}
      {showFullResumeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink-900/70 backdrop-blur-sm animate-in fade-in"
          onClick={() => setShowFullResumeModal(false)}
        >
          <div
            className="relative max-w-2xl max-h-[90vh] bg-paper-100 rounded-2xl p-4 overflow-y-auto shadow-paper-hover"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowFullResumeModal(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-paper-50 border border-ink-900/20 flex items-center justify-center"
            >
              ✕
            </button>
            <img src="/assets/mansi_resume.png" alt="Mansi Rastogi Resume" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      )}
    </section>
  );
};
