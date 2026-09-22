import React, { useState } from 'react';
import { PANIPAT_STEPS } from '../data/content';
import { MapPin, Cog, ArrowRight, ExternalLink, RefreshCw, Scissors } from 'lucide-react';

interface PanipatSectionProps {
  onOpenSources: (id?: string) => void;
}

export const PanipatSection: React.FC<PanipatSectionProps> = ({ onOpenSources }) => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="panipat"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-b border-[#D4D0C7]"
    >
      {/* Editorial Marker */}
      <div className="flex items-center gap-2 font-mono text-xs text-[#9A7A52] uppercase font-semibold mb-3">
        <span>ACT VI : THE INDUSTRIAL METAMORPHOSIS</span>
        <span className="text-[#D4D0C7]">/</span>
        <span>SECTION 07</span>
      </div>

      {/* Heading */}
      <div className="max-w-3xl mb-12">
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#191919] font-normal leading-tight mb-4">
          From old textile <br className="hidden sm:inline" />
          to new material.
        </h2>
        <div className="flex items-center gap-2 font-mono text-sm text-[#9A7A52] font-semibold mb-2">
          <MapPin className="w-4 h-4" />
          <span>PANIPAT, HARYANA · THE CAST-OFF CAPITAL</span>
        </div>
        <p className="font-sans text-base sm:text-lg text-[#6F6C66] font-light leading-relaxed">
          Around 90 km north of Delhi, the historic industrial cluster of Panipat processes hundreds of thousands of
          tonnes of discarded global and domestic clothing annually. Here, discarded clothes are unspun, shredded, and
          reborn as coarse 'shoddy' yarn.
        </p>
      </div>

      {/* Interactive Process Pipeline */}
      <div className="bg-[#FAF8F5] border border-[#D4D0C7] p-6 sm:p-10 mb-8">
        {/* Step Navigation Bar */}
        <div className="flex items-center justify-between border-b border-[#D4D0C7] pb-4 mb-8 overflow-x-auto gap-2">
          {PANIPAT_STEPS.map((step, idx) => (
            <button
              key={step.step}
              onClick={() => setActiveStep(idx)}
              id={`panipat-step-${idx}`}
              className={`pb-2 text-left shrink-0 transition-all font-mono text-xs ${
                activeStep === idx
                  ? 'border-b-2 border-[#191919] text-[#191919] font-bold'
                  : 'text-[#6F6C66] hover:text-[#191919]'
              }`}
            >
              <span className="block text-[10px] text-[#9A7A52]">STEP {step.step}</span>
              <span className="font-serif text-base font-normal">{step.title.split('&')[0]}</span>
            </button>
          ))}
        </div>

        {/* Active Stage Details & Graphic Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Interactive Diagram / Concept Graphic */}
          <div className="lg:col-span-5 bg-[#F2EFE8] border border-[#D4D0C7] p-8 flex flex-col items-center justify-center min-h-[280px] text-center relative overflow-hidden">
            <div className="w-24 h-24 rounded-full bg-[#E5E0D5] border border-[#D4D0C7] flex items-center justify-center mb-4 relative">
              {activeStep === 0 && <Scissors className="w-10 h-10 text-[#65785F]" />}
              {activeStep === 1 && <Cog className="w-10 h-10 text-[#9A7A52] animate-spin" style={{ animationDuration: '8s' }} />}
              {activeStep === 2 && <RefreshCw className="w-10 h-10 text-[#637A83]" />}
              {activeStep === 3 && (
                <div className="w-12 h-12 rounded-full border-4 border-dashed border-[#191919] flex items-center justify-center">
                  <div className="w-4 h-4 bg-[#191919] rounded-full" />
                </div>
              )}
              {activeStep === 4 && (
                <div className="w-14 h-10 border-2 border-[#191919] bg-[#9A7A52]/20 flex items-center justify-center font-mono text-[9px] font-bold text-[#191919]">
                  BLANKET
                </div>
              )}
            </div>

            <span className="font-mono text-[10px] uppercase tracking-widest text-[#9A7A52] font-semibold">
              STAGE {PANIPAT_STEPS[activeStep].step} : {PANIPAT_STEPS[activeStep].tag}
            </span>
            <h4 className="font-serif text-2xl text-[#191919] mt-1 mb-2">
              {PANIPAT_STEPS[activeStep].title}
            </h4>
            <span className="font-sans text-xs text-[#6F6C66]">
              {PANIPAT_STEPS[activeStep].subtitle}
            </span>

            {/* Stepper buttons */}
            <div className="flex items-center gap-2 mt-6">
              <button
                onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                disabled={activeStep === 0}
                className="px-3 py-1 bg-[#FAF8F5] border border-[#D4D0C7] text-xs font-mono disabled:opacity-30 hover:bg-[#E5E0D5]"
              >
                Prev
              </button>
              <button
                onClick={() => setActiveStep((prev) => Math.min(PANIPAT_STEPS.length - 1, prev + 1))}
                disabled={activeStep === PANIPAT_STEPS.length - 1}
                className="px-3 py-1 bg-[#191919] text-[#F2EFE8] text-xs font-mono disabled:opacity-30 hover:bg-[#333]"
              >
                Next Step
              </button>
            </div>
          </div>

          {/* Right: Technical Explanation */}
          <div className="lg:col-span-7 space-y-4">
            <div className="font-mono text-xs text-[#6F6C66] flex items-center gap-2">
              <span>PANIPAT INDUSTRIAL CLUSTER</span>
              <span className="text-[#D4D0C7]">/</span>
              <span>RECYCLED TEXTILE VALUE CHAIN</span>
            </div>

            <p className="font-sans text-base text-[#191919] leading-relaxed">
              {PANIPAT_STEPS[activeStep].description}
            </p>

            {/* Micro Technical Fact Box */}
            <div className="p-4 bg-[#E8E4DA] border border-[#D4D0C7] rounded-none">
              <span className="font-mono text-[11px] font-bold uppercase text-[#9A7A52] block mb-1">
                Process Characteristic
              </span>
              <p className="font-sans text-sm text-[#191919] font-medium">
                {PANIPAT_STEPS[activeStep].stat}
              </p>
            </div>
          </div>
        </div>

        {/* Cluster Context Footer */}
        <div className="mt-8 pt-4 border-t border-[#D4D0C7] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono text-[#6F6C66]">
          <span>Source: Foundation for MSME Clusters (FMC) 2026 Readiness Report</span>
          <button
            onClick={() => onOpenSources('fmc-2026')}
            className="text-[#9A7A52] hover:underline flex items-center gap-1"
          >
            <span>Read Panipat Field Report</span>
            <ExternalLink className="w-3 h-3" />
          </button>
        </div>
      </div>
    </section>
  );
};
