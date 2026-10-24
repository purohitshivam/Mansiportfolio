import React, { useState } from 'react';
import { PROFILE_DATA } from '../data/portfolioData';
import { TactileProp } from './TactileProp';
import { sound } from '../utils/audio';

export const WorkWithMe: React.FC = () => {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    sound.playClick();
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-36 px-6 sm:px-12 md:px-16 max-w-7xl mx-auto border-t border-ink-900/10 relative overflow-hidden select-none"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Bold Typographic Statement from Page 22 */}
        <div className="lg:col-span-7">
          <div className="relative group cursor-default">
            {/* Big yellow outline condensed font: WORK */}
            <h2
              className="font-condensed text-[24vw] sm:text-[18vw] md:text-[180px] lg:text-[230px] leading-[0.8] tracking-normal uppercase select-none"
              style={{
                color: '#FFDE38',
                WebkitTextStroke: '3px #151311',
                textShadow: '6px 6px 0px #151311',
              }}
            >
              WORK
            </h2>

            {/* Cursive: With Me */}
            <span
              className="block font-script text-6xl sm:text-8xl md:text-9xl text-ink-900 -mt-8 sm:-mt-16 md:-mt-24 ml-12 sm:ml-20 md:ml-32 transform -rotate-6 pointer-events-none drop-shadow-sm"
            >
              With Me
            </span>
          </div>

          <p className="mt-8 font-sans text-base sm:text-lg text-ink-700 max-w-md leading-relaxed">
            Open for commercial ad films, long-format features, art direction, set decoration, and product styling inquiries in Mumbai and worldwide.
          </p>
        </div>

        {/* Right Column: Tactile Contact Slate & Functional Actions */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <TactileProp
            variant="tilt"
            tapeCorner="both"
            className="p-6 sm:p-8 rounded-3xl bg-paper-50 border border-ink-900/15 shadow-paper-lg"
          >
            <div className="flex justify-between items-center border-b border-ink-900/10 pb-4 mb-6">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-ink-500">
                DIRECT CONTACT DESK
              </span>
              <span className="text-xl text-studio-terracotta">✺</span>
            </div>

            {/* Contact Rows matching Page 22 layout */}
            <div className="space-y-5">
              {/* Phone */}
              <div className="flex items-center justify-between gap-3 p-3 rounded-2xl bg-paper-100 hover:bg-studio-yellow/20 transition-colors border border-ink-900/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-ink-900 text-paper-50 flex items-center justify-center font-mono text-sm">
                    📞
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-ink-500 font-bold block">
                      Telephone / WhatsApp
                    </span>
                    <a
                      href={`tel:${PROFILE_DATA.contact.phoneRaw}`}
                      className="font-sans font-bold text-base text-ink-900 hover:underline"
                    >
                      {PROFILE_DATA.contact.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(PROFILE_DATA.contact.phoneRaw, 'phone')}
                  className="px-3 py-1.5 rounded-full bg-paper-50 border border-ink-900/15 font-mono text-xs uppercase hover:bg-ink-900 hover:text-studio-yellow transition-colors"
                >
                  {copiedType === 'phone' ? 'Copied!' : 'Copy'}
                </button>
              </div>

              {/* Email */}
              <div className="flex items-center justify-between gap-3 p-3 rounded-2xl bg-paper-100 hover:bg-studio-yellow/20 transition-colors border border-ink-900/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-ink-900 text-paper-50 flex items-center justify-center font-mono text-sm">
                    ✉️
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-ink-500 font-bold block">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${PROFILE_DATA.contact.email}`}
                      className="font-sans font-bold text-sm sm:text-base text-ink-900 hover:underline break-all"
                    >
                      {PROFILE_DATA.contact.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(PROFILE_DATA.contact.email, 'email')}
                  className="px-3 py-1.5 rounded-full bg-paper-50 border border-ink-900/15 font-mono text-xs uppercase hover:bg-ink-900 hover:text-studio-yellow transition-colors flex-shrink-0"
                >
                  {copiedType === 'email' ? 'Copied!' : 'Copy'}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-paper-100 border border-ink-900/10">
                <div className="w-10 h-10 rounded-full bg-ink-900 text-paper-50 flex items-center justify-center font-mono text-sm">
                  📍
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-ink-500 font-bold block">
                    Base Studio
                  </span>
                  <p className="font-sans font-bold text-base text-ink-900">
                    {PROFILE_DATA.contact.location}
                  </p>
                </div>
              </div>

              {/* Vimeo link */}
              <div className="flex items-center justify-between gap-3 p-3 rounded-2xl bg-paper-100 hover:bg-studio-yellow/20 transition-colors border border-ink-900/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-ink-900 text-paper-50 flex items-center justify-center font-mono text-xs font-bold">
                    v
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-ink-500 font-bold block">
                      Showreel on Vimeo
                    </span>
                    <a
                      href={PROFILE_DATA.contact.vimeo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-bold text-base text-ink-900 hover:underline"
                    >
                      {PROFILE_DATA.contact.vimeoDisplay}
                    </a>
                  </div>
                </div>

                <a
                  href={PROFILE_DATA.contact.vimeo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-full bg-paper-50 border border-ink-900/15 font-mono text-xs uppercase hover:bg-ink-900 hover:text-studio-yellow transition-colors"
                >
                  Visit &rarr;
                </a>
              </div>
            </div>

            {/* Quick Email Launcher Button */}
            <div className="mt-6 pt-5 border-t border-ink-900/10">
              <a
                href={`mailto:${PROFILE_DATA.contact.email}?subject=Project%20Inquiry%20for%20Mansi%20Rastogi`}
                className="w-full py-3.5 rounded-full bg-ink-900 hover:bg-ink-800 text-studio-yellow font-mono text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 transition-transform hover:scale-102 shadow-paper"
              >
                <span>Initiate Project Conversation</span>
                <span>&rarr;</span>
              </a>
            </div>
          </TactileProp>
        </div>
      </div>

      {/* Colophon / Bottom Stamp */}
      <div className="mt-20 pt-8 border-t border-ink-900/15 flex flex-col sm:flex-row justify-between items-center gap-4 font-mono text-xs text-ink-500">
        <div className="flex items-center gap-2">
          <span className="text-studio-terracotta text-sm">✺</span>
          <span>MANSI RASTOGI • 2026 PRODUCTION DESIGN PORTFOLIO</span>
        </div>
        <div>
          <span>CRAFTED AS A TACTILE DIGITAL STUDIO EXPERIENCE</span>
        </div>
      </div>
    </section>
  );
};
