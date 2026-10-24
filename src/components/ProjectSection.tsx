import React from 'react';
import { ProjectItem } from '../data/portfolioData';
import { TactileProp } from './TactileProp';

interface ProjectSectionProps {
  project: ProjectItem;
  onOpenProject: (project: ProjectItem) => void;
}

export const ProjectSection: React.FC<ProjectSectionProps> = ({ project, onOpenProject }) => {
  return (
    <article
      id={project.id}
      className="py-24 sm:py-32 px-4 sm:px-8 md:px-16 max-w-7xl mx-auto border-t border-ink-900/10 relative"
    >
      {/* Editorial Chapter Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-studio-yellow/40 text-ink-900 border border-ink-900/15">
              {project.projectNumber}
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-ink-500">
              {project.details.type}
            </span>
          </div>

          <h3 className="font-condensed text-5xl sm:text-7xl md:text-8xl tracking-wider text-ink-900 uppercase">
            {project.title}
          </h3>

          {project.clientSubtitle && (
            <p className="font-handwriting text-2xl sm:text-3xl text-studio-terracotta font-semibold">
              {project.clientSubtitle}
            </p>
          )}
        </div>

        {/* Action Button to Inspect Full Case Study */}
        <TactileProp
          variant="lift"
          onClick={() => onOpenProject(project)}
          cursorLabel="INSPECT"
          className="px-5 py-2.5 rounded-full bg-paper-50 hover:bg-studio-yellow border border-ink-900/20 text-ink-900 font-mono text-xs uppercase tracking-wider shadow-paper transition-all flex items-center gap-2"
        >
          <span>Open Full Case Study</span>
          <span className="font-sans font-bold">&rarr;</span>
        </TactileProp>
      </div>

      {/* Main Visual Composition - Art-directed per project layout */}
      <div className="relative">
        {/* Render different editorial grids tailored to the project's visual nature */}
        <ProjectVisualLayout project={project} onOpenProject={onOpenProject} />
      </div>

      {/* Editorial Footer Strip: Production Scope & Aesthetic Notes */}
      <div className="mt-14 pt-8 border-t border-dashed border-ink-900/20 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Aesthetic Callouts */}
        <div className="md:col-span-4">
          <h5 className="font-mono text-xs uppercase tracking-wider font-bold text-ink-500 mb-2">
            AESTHETIC ESSENCE
          </h5>
          <div className="flex flex-wrap gap-2">
            {project.aestheticNotes.map((note, i) => (
              <TactileProp
                key={i}
                variant="annotation"
                className="px-3 py-1 rounded-md bg-paper-50 border border-ink-900/10 font-handwriting text-lg text-ink-800"
              >
                {note}
              </TactileProp>
            ))}
          </div>
        </div>

        {/* Production Scope & Responsibilities */}
        <div className="md:col-span-5">
          <h5 className="font-mono text-xs uppercase tracking-wider font-bold text-ink-500 mb-2">
            RESPONSIBILITIES EXECUTED
          </h5>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-ink-700">
            {project.description.map((desc, i) => (
              <li key={i} className="flex items-start gap-1.5">
                <span className="text-studio-terracotta text-sm">✦</span>
                <span>{desc}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Color Palette or Material Reference */}
        <div className="md:col-span-3">
          {project.colorPalette ? (
            <div>
              <h5 className="font-mono text-xs uppercase tracking-wider font-bold text-ink-500 mb-2">
                PALETTE REFERENCE
              </h5>
              <div className="flex gap-2">
                {project.colorPalette.map((color, i) => (
                  <TactileProp
                    key={i}
                    variant="lift"
                    className="w-8 h-8 rounded-full border border-ink-900/20 shadow-xs"
                    style={{ backgroundColor: color }}
                  >
                    <span className="sr-only">{color}</span>
                  </TactileProp>
                ))}
              </div>
            </div>
          ) : project.materials ? (
            <div>
              <h5 className="font-mono text-xs uppercase tracking-wider font-bold text-ink-500 mb-2">
                KEY MATERIALS
              </h5>
              <p className="font-handwriting text-base text-ink-700">
                {project.materials.slice(0, 3).join(', ')}
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
};

// Specialized visual composition sub-component preserving each project's unique editorial layout
const ProjectVisualLayout: React.FC<{
  project: ProjectItem;
  onOpenProject: (p: ProjectItem) => void;
}> = ({ project, onOpenProject }) => {
  const images = project.images.gallery;

  switch (project.id) {
    case 'android-show':
      // Page 3 & 4: Dressing room + living room + curved details + sofa + panorama
      return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <TactileProp
              variant="tilt"
              tapeCorner="left"
              onClick={() => onOpenProject(project)}
              cursorLabel="EXPAND"
              className="p-3 bg-paper-50 rounded-2xl border border-ink-900/15"
            >
              <img
                src={images[0]?.url}
                alt={images[0]?.caption}
                className="w-full aspect-16/10 object-cover rounded-xl"
              />
              <div className="mt-2 flex justify-between items-center px-2">
                <span className="font-handwriting text-xl text-ink-800">Soft girl aesthetics • Dressing room</span>
                <span className="font-mono text-xs font-bold text-studio-terracotta">(01)</span>
              </div>
            </TactileProp>

            <TactileProp
              variant="tilt"
              onClick={() => onOpenProject(project)}
              cursorLabel="EXPAND"
              className="p-3 bg-paper-50 rounded-2xl border border-ink-900/15"
            >
              <img
                src={images[5]?.url || images[1]?.url}
                alt=""
                className="w-full aspect-21/9 object-cover rounded-xl"
              />
              <div className="mt-2 flex justify-between items-center px-2">
                <span className="font-handwriting text-xl text-ink-800">Master bedroom & living panorama under circular skylight</span>
                <span className="font-mono text-xs font-bold text-studio-terracotta">(03)</span>
              </div>
            </TactileProp>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <TactileProp
              variant="tilt"
              tapeCorner="right"
              onClick={() => onOpenProject(project)}
              cursorLabel="EXPAND"
              className="p-3 bg-paper-50 rounded-2xl border border-ink-900/15"
            >
              <img
                src={images[1]?.url}
                alt=""
                className="w-full aspect-4/3 object-cover rounded-xl"
              />
              <div className="mt-2 flex justify-between items-center px-2">
                <span className="font-handwriting text-xl text-ink-800">Sunkissed warmth lounge</span>
                <span className="font-mono text-xs font-bold text-studio-terracotta">(02)</span>
              </div>
            </TactileProp>

            <div className="grid grid-cols-2 gap-4">
              <TactileProp
                variant="polaroid"
                onClick={() => onOpenProject(project)}
                cursorLabel="VIEW"
                className="p-2.5 bg-paper-50 rounded-xl border border-ink-900/15"
              >
                <img src={images[3]?.url} alt="" className="w-full aspect-square object-cover rounded-lg" />
                <p className="mt-1 font-handwriting text-sm text-center text-ink-700">Soft curves</p>
              </TactileProp>

              <TactileProp
                variant="polaroid"
                onClick={() => onOpenProject(project)}
                cursorLabel="VIEW"
                className="p-2.5 bg-paper-50 rounded-xl border border-ink-900/15"
              >
                <img src={images[4]?.url} alt="" className="w-full aspect-square object-cover rounded-lg" />
                <p className="mt-1 font-handwriting text-sm text-center text-ink-700">Wavy tables</p>
              </TactileProp>
            </div>
          </div>
        </div>
      );

    case 'dyson':
      // Page 5 & 6: Wabi-Sabi archways + oculus master bedroom + mirror view + corridor
      return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8">
            <TactileProp
              variant="tilt"
              tapeCorner="both"
              onClick={() => onOpenProject(project)}
              cursorLabel="EXPAND"
              className="p-4 bg-paper-50 rounded-3xl border border-ink-900/15"
            >
              <img
                src={images[0]?.url}
                alt="Master suite with oculus skylight"
                className="w-full aspect-16/10 object-cover rounded-2xl"
              />
              <div className="mt-3 flex justify-between items-center px-2">
                <span className="font-handwriting text-2xl text-ink-800">Japanese Wabi-Sabi master suite with circular oculus skylight</span>
                <span className="font-mono text-xs px-2.5 py-1 rounded bg-studio-yellow/30 text-ink-900 font-bold">
                  QUIET, GROUNDED
                </span>
              </div>
            </TactileProp>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-6">
            <TactileProp
              variant="tilt"
              onClick={() => onOpenProject(project)}
              cursorLabel="EXPAND"
              className="p-3 bg-paper-50 rounded-2xl border border-ink-900/15"
            >
              <img src={images[1]?.url} alt="" className="w-full aspect-16/10 object-cover rounded-xl" />
              <p className="mt-2 font-handwriting text-lg text-ink-700 px-1">Ribbed vaulted colonnade corridor</p>
            </TactileProp>

            <TactileProp
              variant="tilt"
              onClick={() => onOpenProject(project)}
              cursorLabel="EXPAND"
              className="p-3 bg-paper-50 rounded-2xl border border-ink-900/15"
            >
              <img src={images[4]?.url || images[3]?.url} alt="" className="w-full aspect-16/10 object-cover rounded-xl" />
              <p className="mt-2 font-handwriting text-lg text-ink-700 px-1">Curved perimeter archways & warm lanterns</p>
            </TactileProp>
          </div>
        </div>
      );

    case 'azorte':
      // Page 7 & 8: 1970s warm mustard stairs + 70s bedroom + fluted glass dining nook
      return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-5">
            <TactileProp
              variant="tilt"
              tapeCorner="left"
              onClick={() => onOpenProject(project)}
              cursorLabel="EXPAND"
              className="p-4 bg-paper-50 rounded-3xl border border-ink-900/15"
            >
              <img
                src={images[0]?.url}
                alt="Sun-warmed mustard stairs"
                className="w-full aspect-3/4 object-cover rounded-2xl"
              />
              <div className="mt-3 px-2">
                <span className="font-handwriting text-2xl text-ink-800">Powdery & sun-warmed 1970s staircase</span>
                <p className="font-mono text-xs text-studio-terracotta mt-0.5">Visually forgiving & whimsical</p>
              </div>
            </TactileProp>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6">
            <TactileProp
              variant="tilt"
              onClick={() => onOpenProject(project)}
              cursorLabel="EXPAND"
              className="p-3 bg-paper-50 rounded-2xl border border-ink-900/15"
            >
              <img src={images[1]?.url} alt="" className="w-full aspect-16/9 object-cover rounded-xl" />
              <div className="mt-2 flex justify-between items-center px-2">
                <span className="font-handwriting text-xl text-ink-800">1970s whimsical lounge bedroom with porthole sconces</span>
                <span className="font-mono text-xs font-bold text-studio-terracotta">(01)</span>
              </div>
            </TactileProp>

            <TactileProp
              variant="tilt"
              onClick={() => onOpenProject(project)}
              cursorLabel="EXPAND"
              className="p-3 bg-paper-50 rounded-2xl border border-ink-900/15"
            >
              <img src={images[2]?.url} alt="" className="w-full aspect-16/9 object-cover rounded-xl" />
              <div className="mt-2 flex justify-between items-center px-2">
                <span className="font-handwriting text-xl text-ink-800">Fluted glass partition & vintage dining nook</span>
                <span className="font-mono text-xs font-bold text-studio-terracotta">(02)</span>
              </div>
            </TactileProp>
          </div>
        </div>
      );

    case 'titan':
      // Page 9 & 10: Grand Parisian salon + lilies styling + Chinoiserie wallpaper bedroom
      return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8 flex flex-col gap-6">
            <TactileProp
              variant="tilt"
              tapeCorner="both"
              onClick={() => onOpenProject(project)}
              cursorLabel="EXPAND"
              className="p-4 bg-paper-50 rounded-3xl border border-ink-900/15"
            >
              <img
                src={images[0]?.url}
                alt="Grand Parisian Salon"
                className="w-full aspect-16/10 object-cover rounded-2xl"
              />
              <div className="mt-3 flex justify-between items-center px-2">
                <span className="font-handwriting text-2xl text-ink-800">Grand Parisian Salon with high boiserie moldings & gallery wall</span>
                <span className="font-mono text-xs px-2.5 py-1 rounded bg-studio-yellow/30 text-ink-900 font-bold">
                  EFFORTLESS ELEGANCE
                </span>
              </div>
            </TactileProp>

            <TactileProp
              variant="tilt"
              onClick={() => onOpenProject(project)}
              cursorLabel="EXPAND"
              className="p-3 bg-paper-50 rounded-2xl border border-ink-900/15"
            >
              <img src={images[2]?.url} alt="" className="w-full aspect-21/9 object-cover rounded-xl" />
              <div className="mt-2 flex justify-between items-center px-2">
                <span className="font-handwriting text-xl text-ink-800">Chinoiserie wallpaper bedroom suite with mustard velvet bed</span>
                <span className="font-mono text-xs font-bold text-studio-terracotta">SUITE</span>
              </div>
            </TactileProp>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-6">
            <TactileProp
              variant="polaroid"
              tapeCorner="right"
              onClick={() => onOpenProject(project)}
              cursorLabel="VIEW"
              className="p-3 bg-paper-50 rounded-2xl border border-ink-900/15"
            >
              <img src={images[1]?.url} alt="" className="w-full aspect-4/5 object-cover rounded-xl" />
              <p className="mt-2 font-handwriting text-xl text-center text-ink-800">Brass chalice & lily styling</p>
            </TactileProp>

            {project.colorPalette && (
              <TactileProp variant="lift" className="p-4 bg-paper-50 rounded-2xl border border-ink-900/15">
                <p className="font-mono text-xs uppercase tracking-wider font-bold text-ink-500 mb-2">
                  MONOTONE SWATCH CIRCLES
                </p>
                <div className="flex justify-between items-center">
                  {project.colorPalette.map((c, i) => (
                    <div key={i} className="w-8 h-8 rounded-full border border-ink-900/20 shadow-xs" style={{ backgroundColor: c }} />
                  ))}
                </div>
              </TactileProp>
            )}
          </div>
        </div>
      );

    case 'comfort':
      // Page 11, 12, 13: Golden sanctuary vault + cathedral set + fabric canopy
      return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <TactileProp
              variant="tilt"
              tapeCorner="left"
              onClick={() => onOpenProject(project)}
              cursorLabel="EXPAND"
              className="p-4 bg-paper-50 rounded-3xl border border-ink-900/15"
            >
              <img
                src={images[0]?.url}
                alt="Golden sanctuary vault"
                className="w-full aspect-16/10 object-cover rounded-2xl"
              />
              <div className="mt-3 flex justify-between items-center px-2">
                <span className="font-handwriting text-2xl text-ink-800">Monumental Golden Sanctuary with organic petal vaulting</span>
                <span className="font-mono text-xs px-2.5 py-1 rounded bg-studio-yellow/30 text-ink-900 font-bold">
                  23/10/24
                </span>
              </div>
            </TactileProp>

            <TactileProp
              variant="tilt"
              onClick={() => onOpenProject(project)}
              cursorLabel="EXPAND"
              className="p-3 bg-paper-50 rounded-2xl border border-ink-900/15"
            >
              <img src={images[3]?.url} alt="" className="w-full aspect-21/9 object-cover rounded-xl" />
              <p className="mt-2 font-handwriting text-xl text-ink-800 px-2">Tiered ceremonial dais and golden archways</p>
            </TactileProp>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <TactileProp
              variant="tilt"
              onClick={() => onOpenProject(project)}
              cursorLabel="EXPAND"
              className="p-3 bg-paper-50 rounded-2xl border border-ink-900/15"
            >
              <img src={images[1]?.url} alt="" className="w-full aspect-16/11 object-cover rounded-xl" />
              <p className="mt-2 font-handwriting text-lg text-ink-800 px-1">Cathedral glass archway set with tiered podium</p>
            </TactileProp>

            <div className="grid grid-cols-2 gap-4">
              <TactileProp
                variant="polaroid"
                onClick={() => onOpenProject(project)}
                cursorLabel="VIEW"
                className="p-2.5 bg-paper-50 rounded-xl border border-ink-900/15"
              >
                <img src={images[4]?.url} alt="" className="w-full aspect-square object-cover rounded-lg" />
                <p className="mt-1 font-handwriting text-xs text-center text-ink-700">Sculptural Flower</p>
              </TactileProp>

              <TactileProp
                variant="polaroid"
                onClick={() => onOpenProject(project)}
                cursorLabel="VIEW"
                className="p-2.5 bg-paper-50 rounded-xl border border-ink-900/15"
              >
                <img src={images[5]?.url} alt="" className="w-full aspect-square object-cover rounded-lg" />
                <p className="mt-1 font-handwriting text-xs text-center text-ink-700">Material Swatches</p>
              </TactileProp>
            </div>
          </div>
        </div>
      );

    case 'bru':
      // Page 14, 15, 16: Lived-in scene + living decor + kitchen + hutch + 2D floorplan
      return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8 flex flex-col gap-6">
            <TactileProp
              variant="tilt"
              tapeCorner="both"
              onClick={() => onOpenProject(project)}
              cursorLabel="EXPAND"
              className="p-4 bg-paper-50 rounded-3xl border border-ink-900/15"
            >
              <img
                src={images[0]?.url}
                alt="Inhabited modern Indian living room"
                className="w-full aspect-16/10 object-cover rounded-2xl"
              />
              <div className="mt-3 flex justify-between items-center px-2">
                <span className="font-handwriting text-2xl text-ink-800">
                  Lived-in modern Indian home inhabited by characters
                </span>
                <span className="font-mono text-xs px-2.5 py-1 rounded bg-studio-yellow/30 text-ink-900 font-bold">
                  MEMORY OVER MINIMALISM
                </span>
              </div>
            </TactileProp>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <TactileProp
                variant="tilt"
                onClick={() => onOpenProject(project)}
                cursorLabel="EXPAND"
                className="p-3 bg-paper-50 rounded-2xl border border-ink-900/15"
              >
                <img src={images[2]?.url} alt="" className="w-full aspect-16/10 object-cover rounded-xl" />
                <p className="mt-2 font-handwriting text-lg text-ink-800 px-1">Sage green country kitchen & tile backsplash</p>
              </TactileProp>

              <TactileProp
                variant="tilt"
                onClick={() => onOpenProject(project)}
                cursorLabel="EXPAND"
                className="p-3 bg-paper-50 rounded-2xl border border-ink-900/15"
              >
                <img src={images[3]?.url} alt="" className="w-full aspect-16/10 object-cover rounded-xl" />
                <p className="mt-2 font-handwriting text-lg text-ink-800 px-1">Heirloom cane crockery hutch</p>
              </TactileProp>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-6">
            <TactileProp
              variant="tilt"
              onClick={() => onOpenProject(project)}
              cursorLabel="EXPAND"
              className="p-4 bg-[#FAF6EC] rounded-2xl border border-ink-900/20"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-mono text-xs font-bold text-ink-900 uppercase">2D ARCHITECTURAL FLOORPLAN</span>
                <span className="font-mono text-xs text-studio-terracotta">SCALE 1:50</span>
              </div>
              <img src={images[4]?.url} alt="Architectural floorplan" className="w-full h-auto rounded-lg border border-ink-900/10" />
              <p className="mt-2 font-handwriting text-base text-ink-600">
                Spatial passage layout & camera sightlines
              </p>
            </TactileProp>

            <TactileProp
              variant="polaroid"
              onClick={() => onOpenProject(project)}
              cursorLabel="VIEW"
              className="p-3 bg-paper-50 rounded-2xl border border-ink-900/15"
            >
              <img src={images[1]?.url} alt="" className="w-full aspect-16/10 object-cover rounded-xl" />
              <p className="mt-2 font-handwriting text-lg text-center text-ink-800">Warm brass tray & heirloom curios</p>
            </TactileProp>
          </div>
        </div>
      );

    case 'zivame':
      // Page 17: Red velvet exhibition hall with busts + art niches
      return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7">
            <TactileProp
              variant="tilt"
              tapeCorner="left"
              onClick={() => onOpenProject(project)}
              cursorLabel="EXPAND"
              className="p-4 bg-paper-50 rounded-3xl border border-ink-900/15"
            >
              <img
                src={images[0]?.url}
                alt="Museum of Books for ZIVAME"
                className="w-full aspect-4/5 object-cover rounded-2xl"
              />
              <div className="mt-3 flex justify-between items-center px-2">
                <span className="font-handwriting text-2xl text-ink-800">Theatrical crimson velvet exhibition celebrating womanhood</span>
                <span className="font-mono text-xs font-bold text-red-700">CELEBRATING IMPERFECTION</span>
              </div>
            </TactileProp>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4">
            <TactileProp
              variant="polaroid"
              onClick={() => onOpenProject(project)}
              cursorLabel="VIEW"
              className="p-3 bg-paper-50 rounded-2xl border border-ink-900/15"
            >
              <img src={images[1]?.url} alt="" className="w-full aspect-16/9 object-cover rounded-xl" />
              <p className="mt-2 font-handwriting text-lg text-center text-ink-800">Dried florals & organic botanical niche</p>
            </TactileProp>

            <TactileProp
              variant="polaroid"
              onClick={() => onOpenProject(project)}
              cursorLabel="VIEW"
              className="p-3 bg-paper-50 rounded-2xl border border-ink-900/15"
            >
              <img src={images[2]?.url} alt="" className="w-full aspect-16/9 object-cover rounded-xl" />
              <p className="mt-2 font-handwriting text-lg text-center text-ink-800">Suspended egg cocoon & sheer textile</p>
            </TactileProp>

            <TactileProp
              variant="polaroid"
              onClick={() => onOpenProject(project)}
              cursorLabel="VIEW"
              className="p-3 bg-paper-50 rounded-2xl border border-ink-900/15"
            >
              <img src={images[3]?.url} alt="" className="w-full aspect-16/9 object-cover rounded-xl" />
              <p className="mt-2 font-handwriting text-lg text-center text-ink-800">Illuminated breast sculpture niche</p>
            </TactileProp>
          </div>
        </div>
      );

    case 'tanishq':
      // Page 18: Festive master suite with green alcove + piano boudoir + foyer
      return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8 flex flex-col gap-6">
            <TactileProp
              variant="tilt"
              tapeCorner="both"
              onClick={() => onOpenProject(project)}
              cursorLabel="EXPAND"
              className="p-4 bg-paper-50 rounded-3xl border border-ink-900/15"
            >
              <img
                src={images[0]?.url}
                alt="Festive bedroom suite for Tanishq"
                className="w-full aspect-16/10 object-cover rounded-2xl"
              />
              <div className="mt-3 flex justify-between items-center px-2">
                <span className="font-handwriting text-2xl text-ink-800">Festive master suite with green scalloped alcove bed</span>
                <span className="font-mono text-xs px-2.5 py-1 rounded bg-studio-yellow/30 text-ink-900 font-bold">
                  JOYFUL & RADIANT
                </span>
              </div>
            </TactileProp>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-6">
            <TactileProp
              variant="tilt"
              onClick={() => onOpenProject(project)}
              cursorLabel="EXPAND"
              className="p-3 bg-paper-50 rounded-2xl border border-ink-900/15"
            >
              <img src={images[1]?.url} alt="" className="w-full aspect-16/10 object-cover rounded-xl" />
              <p className="mt-2 font-handwriting text-lg text-ink-800 px-1">Forest green arched foyer & carved sideboard</p>
            </TactileProp>

            <TactileProp
              variant="tilt"
              onClick={() => onOpenProject(project)}
              cursorLabel="EXPAND"
              className="p-3 bg-paper-50 rounded-2xl border border-ink-900/15"
            >
              <img src={images[2]?.url} alt="" className="w-full aspect-16/10 object-cover rounded-xl" />
              <p className="mt-2 font-handwriting text-lg text-ink-800 px-1">Boudoir corner with vintage upright piano</p>
            </TactileProp>
          </div>
        </div>
      );

    case 'samsung':
      // Page 19: Spiral notebook binder motif with greenhouse laundry studio
      return (
        <div className="relative p-6 sm:p-10 rounded-3xl bg-paper-50 border-2 border-ink-900/15 shadow-paper-lg">
          {/* Spiral notebook perforation rings on the left edge */}
          <div className="absolute left-3 top-8 bottom-8 flex flex-col justify-between pointer-events-none hidden sm:flex">
            {Array.from({ length: 14 }).map((_, i) => (
              <div key={i} className="w-4 h-2 rounded-full bg-paper-300 border border-ink-900/30" />
            ))}
          </div>

          <div className="sm:pl-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7">
              <TactileProp
                variant="tilt"
                tapeCorner="left"
                onClick={() => onOpenProject(project)}
                cursorLabel="EXPAND"
                className="p-3 bg-white rounded-2xl border border-ink-900/15"
              >
                <img
                  src={images[0]?.url}
                  alt="Greenhouse laundry room panoramic"
                  className="w-full aspect-16/10 object-cover rounded-xl"
                />
                <div className="mt-2 px-2 flex justify-between items-center">
                  <span className="font-handwriting text-2xl text-ink-800">Sun-drenched glass roof laundry studio</span>
                  <span className="font-mono text-xs font-bold text-studio-forest">SUNKISSED & FRESH</span>
                </div>
              </TactileProp>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-4">
              <TactileProp
                variant="tilt"
                onClick={() => onOpenProject(project)}
                cursorLabel="EXPAND"
                className="p-3 bg-white rounded-2xl border border-ink-900/15"
              >
                <img src={images[1]?.url} alt="" className="w-full aspect-16/10 object-cover rounded-xl" />
                <p className="mt-2 font-handwriting text-lg text-ink-800 px-1">Sage shiplap cabinetry & wicker laundry baskets</p>
              </TactileProp>

              <div className="p-4 rounded-xl bg-studio-forest/10 border border-studio-forest/20 text-ink-900">
                <p className="font-mono text-xs uppercase tracking-wider font-bold text-studio-forest mb-1">
                  DESIGN DIRECTION
                </p>
                <p className="font-handwriting text-xl">
                  "Functional aesthetics merging natural daylight, timber rafters, and appliance integration."
                </p>
              </div>
            </div>
          </div>
        </div>
      );

    case 'meesho':
      // Page 20: Irani café dining + service counter + art gallery wall
      return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <TactileProp
              variant="tilt"
              tapeCorner="left"
              onClick={() => onOpenProject(project)}
              cursorLabel="EXPAND"
              className="p-4 bg-paper-50 rounded-3xl border border-ink-900/15"
            >
              <img
                src={images[0]?.url}
                alt="Irani Café dining space"
                className="w-full aspect-16/10 object-cover rounded-2xl"
              />
              <div className="mt-3 flex justify-between items-center px-2">
                <span className="font-handwriting text-2xl text-ink-800">
                  Rosario's Café with red-and-white checkered tablecloths
                </span>
                <span className="font-mono text-xs font-bold text-studio-terracotta">(01)</span>
              </div>
            </TactileProp>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <TactileProp
              variant="tilt"
              onClick={() => onOpenProject(project)}
              cursorLabel="EXPAND"
              className="p-3 bg-paper-50 rounded-2xl border border-ink-900/15"
            >
              <img src={images[1]?.url} alt="" className="w-full aspect-16/10 object-cover rounded-xl" />
              <div className="mt-2 flex justify-between items-center px-2">
                <span className="font-handwriting text-xl text-ink-800">Nostalgic carved pink service bar with cookie jars</span>
                <span className="font-mono text-xs font-bold text-studio-terracotta">(02)</span>
              </div>
            </TactileProp>

            <TactileProp
              variant="tilt"
              onClick={() => onOpenProject(project)}
              cursorLabel="EXPAND"
              className="p-3 bg-paper-50 rounded-2xl border border-ink-900/15"
            >
              <img src={images[2]?.url} alt="" className="w-full aspect-16/10 object-cover rounded-xl" />
              <div className="mt-2 flex justify-between items-center px-2">
                <span className="font-handwriting text-xl text-ink-800">Sepia photo wall gallery & vintage signboards</span>
                <span className="font-mono text-xs font-bold text-studio-terracotta">(03)</span>
              </div>
            </TactileProp>
          </div>
        </div>
      );

    case 'paataal-lok':
      // Page 21: Secret attic hideout + investigation desk vignette
      return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7">
            <TactileProp
              variant="tilt"
              tapeCorner="both"
              onClick={() => onOpenProject(project)}
              cursorLabel="EXPAND"
              className="p-4 bg-[#1F1916] text-paper-100 rounded-3xl border border-ink-900/40 shadow-paper-lg"
            >
              <img
                src={images[0]?.url}
                alt="Secret Attic Hideout for Paataal Lok"
                className="w-full aspect-16/10 object-cover rounded-2xl filter brightness-95 contrast-110"
              />
              <div className="mt-3 flex justify-between items-center px-2">
                <span className="font-handwriting text-2xl text-studio-yellow">
                  Secret attic hideaway under pitched roof rafters
                </span>
                <span className="font-mono text-xs px-2.5 py-1 rounded bg-amber-950/80 text-amber-200 border border-amber-800/40">
                  DARK & DINGY
                </span>
              </div>
            </TactileProp>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <TactileProp
              variant="tilt"
              onClick={() => onOpenProject(project)}
              cursorLabel="EXPAND"
              className="p-4 bg-[#1F1916] text-paper-100 rounded-3xl border border-ink-900/40 shadow-paper-lg"
            >
              <img
                src={images[1]?.url}
                alt="Crime Map & Desk"
                className="w-full aspect-16/11 object-cover rounded-2xl filter brightness-95 contrast-110"
              />
              <div className="mt-3 px-2">
                <span className="font-handwriting text-2xl text-studio-yellow">
                  Investigation crime board with red connecting strings
                </span>
                <p className="font-sans text-xs text-paper-400 mt-1">
                  Weathered pine desk, green banker's lamp, evidence vials & vintage luggage trunks.
                </p>
              </div>
            </TactileProp>
          </div>
        </div>
      );

    default:
      return null;
  }
};
