import React from 'react';
import { Check, ArrowRight, AlertCircle, Sparkles } from 'lucide-react';
import { DisposalChoiceId } from '../types';
import { DISPOSAL_OPTIONS } from '../data/content';

interface DisposalSectionProps {
  selectedDisposal: DisposalChoiceId | null;
  onSelectDisposal: (id: DisposalChoiceId) => void;
  onContinue: () => void;
}

export const DisposalSection: React.FC<DisposalSectionProps> = ({
  selectedDisposal,
  onSelectDisposal,
  onContinue,
}) => {
  return (
    <section
      id="disposal"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-b border-[#D4D0C7]"
    >
      {/* Editorial Marker */}
      <div className="flex items-center gap-2 font-mono text-xs text-[#A64B32] uppercase font-semibold mb-3">
        <span>ACT III : THE DECISION NODE</span>
        <span className="text-[#D4D0C7]">/</span>
        <span>SECTION 04</span>
      </div>

      {/* Heading */}
      <div className="max-w-3xl mb-12">
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#191919] font-normal leading-tight mb-3">
          What would you do <br className="hidden sm:inline" />
          with it?
        </h2>
        <p className="font-sans text-base sm:text-lg text-[#6F6C66] font-light leading-relaxed">
          How do you intend to part with this unwanted T-shirt? Your choice determines how it leaves your closet,
          initiating its journey into India's complex collection chain.
        </p>
      </div>

      {/* Choice Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
        {DISPOSAL_OPTIONS.map((opt) => {
          const isSelected = selectedDisposal === opt.id;
          return (
            <button
              key={opt.id}
              id={`disposal-card-${opt.id}`}
              onClick={() => onSelectDisposal(opt.id)}
              className={`text-left p-6 transition-all duration-200 relative flex flex-col justify-between border ${
                isSelected
                  ? 'bg-[#FAF8F5] border-[#191919] shadow-md ring-2 ring-[#191919]'
                  : 'bg-[#FAF8F5]/60 hover:bg-[#FAF8F5] border-[#D4D0C7] hover:border-[#191919]/60'
              }`}
            >
              {/* Header Badge */}
              <div className="flex items-center justify-between font-mono text-[11px] text-[#6F6C66] mb-3 pb-2 border-b border-[#D4D0C7]/70">
                <span className="font-semibold text-[#A64B32] tracking-wider">{opt.symbol}</span>
                <div
                  className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                    isSelected
                      ? 'bg-[#191919] border-[#191919] text-[#F2EFE8]'
                      : 'border-[#D4D0C7]'
                  }`}
                >
                  {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                </div>
              </div>

              {/* Body */}
              <div className="mb-4">
                <h3 className="font-serif text-2xl sm:text-3xl text-[#191919] font-normal mb-2">
                  {opt.title}
                </h3>
                <p className="font-sans text-sm text-[#6F6C66] leading-relaxed mb-3">
                  {opt.tagline}
                </p>
                <div className="font-mono text-xs text-[#65785F] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#65785F]" />
                  <span>{opt.pathwayHint}</span>
                </div>
              </div>

              {/* Reality check callout */}
              <div className="mt-2 pt-3 border-t border-dashed border-[#D4D0C7] text-xs font-sans text-[#191919]/80 bg-[#F2EFE8]/70 p-2.5">
                <span className="font-semibold text-[#191919] block mb-0.5">System Reality:</span>
                <span className="leading-snug">{opt.editorialCaution}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Core Editorial Principle Warning Box */}
      <div className="p-4 sm:p-5 rounded bg-[#FAF8F5] border border-[#D4D0C7] mb-8 flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-[#A64B32] shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm font-sans text-[#191919] leading-relaxed">
          <strong className="font-semibold block font-mono text-xs text-[#A64B32] uppercase mb-0.5">
            Key Principle: Choice ≠ Guaranteed Fate
          </strong>
          Your decision determines where the garment enters the next system —{' '}
          <em>not necessarily where it finally ends</em>. Donated shirts with stains can be shredded into industrial
          wipes, while garments put in household garbage are often intercepted by informal waste pickers.
        </div>
      </div>

      {/* Continue button */}
      {selectedDisposal && (
        <div className="flex justify-end">
          <button
            onClick={onContinue}
            id="continue-to-collection-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#191919] text-[#F2EFE8] text-xs font-mono uppercase tracking-wider hover:bg-[#333] transition-all"
          >
            <span>See Collection Pathways</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </section>
  );
};
