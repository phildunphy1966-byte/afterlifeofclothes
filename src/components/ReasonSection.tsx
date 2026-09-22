import React from 'react';
import { Check, Tag, Info, ArrowRight } from 'lucide-react';
import { ReasonId } from '../types';
import { REASON_OPTIONS } from '../data/content';

interface ReasonSectionProps {
  selectedReason: ReasonId | null;
  onSelectReason: (id: ReasonId) => void;
  onContinue: () => void;
}

export const ReasonSection: React.FC<ReasonSectionProps> = ({
  selectedReason,
  onSelectReason,
  onContinue,
}) => {
  return (
    <section
      id="reason"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-b border-[#D4D0C7]"
    >
      {/* Editorial Marker */}
      <div className="flex items-center gap-2 font-mono text-xs text-[#65785F] uppercase font-semibold mb-3">
        <span>ACT I : THE WARDROBE DEPARTURE</span>
        <span className="text-[#D4D0C7]">/</span>
        <span>SECTION 02</span>
      </div>

      {/* Heading */}
      <div className="max-w-3xl mb-12">
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#191919] font-normal leading-tight mb-3">
          You don't want this <br className="hidden sm:inline" />
          T-shirt anymore.
        </h2>
        <p className="font-sans text-base sm:text-xl text-[#6F6C66] font-light">
          Why did you stop wearing it? Select the reason that best describes why it fell out of your rotation.
        </p>
      </div>

      {/* Choice Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
        {REASON_OPTIONS.map((opt) => {
          const isSelected = selectedReason === opt.id;
          return (
            <button
              key={opt.id}
              id={`reason-card-${opt.id}`}
              onClick={() => onSelectReason(opt.id)}
              className={`text-left p-6 rounded-none transition-all duration-200 relative group flex flex-col justify-between border ${
                isSelected
                  ? 'bg-[#FAF8F5] border-[#191919] shadow-md ring-2 ring-[#191919]'
                  : 'bg-[#FAF8F5]/60 hover:bg-[#FAF8F5] border-[#D4D0C7] hover:border-[#191919]/60'
              }`}
            >
              {/* Care Label Top Notch */}
              <div className="flex items-center justify-between font-mono text-[11px] text-[#6F6C66] mb-4 pb-2 border-b border-[#D4D0C7]/70">
                <span className="tracking-wider">{opt.labelCode}</span>
                <div
                  className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                    isSelected
                      ? 'bg-[#191919] border-[#191919] text-[#F2EFE8]'
                      : 'border-[#D4D0C7] group-hover:border-[#191919]'
                  }`}
                >
                  {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                </div>
              </div>

              {/* Title & Description */}
              <div className="mb-4">
                <h3 className="font-serif text-2xl sm:text-3xl text-[#191919] font-normal mb-2">
                  {opt.title}
                </h3>
                <p className="font-sans text-sm text-[#6F6C66] leading-relaxed">
                  {opt.subtitle}
                </p>
              </div>

              {/* Contextual Data Tag */}
              <div className="mt-2 pt-3 border-t border-dashed border-[#D4D0C7] text-xs font-sans text-[#191919]/80 flex items-start gap-2 bg-[#F2EFE8]/70 p-2.5">
                <Info className="w-3.5 h-3.5 text-[#65785F] shrink-0 mt-0.5" />
                <span className="leading-snug">{opt.contextStat}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Next Step Confirmation Bar */}
      {selectedReason && (
        <div className="p-4 sm:p-5 bg-[#E8E4DA] border border-[#D4D0C7] flex flex-col sm:flex-row items-center justify-between gap-4 transition-all">
          <div className="flex items-center gap-3">
            <Tag className="w-5 h-5 text-[#65785F]" />
            <p className="font-sans text-sm text-[#191919]">
              Choice logged:{' '}
              <strong className="font-semibold capitalize">
                {REASON_OPTIONS.find((r) => r.id === selectedReason)?.title}
              </strong>
              . Your individual garment is now ready to be mapped against national volumes.
            </p>
          </div>
          <button
            onClick={onContinue}
            id="continue-to-scale-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#191919] text-[#F2EFE8] text-xs font-mono uppercase tracking-wider hover:bg-[#333] transition-all"
          >
            <span>Examine India's Scale</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </section>
  );
};
