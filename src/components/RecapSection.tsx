import React from 'react';
import { JourneyState } from '../types';
import { REASON_OPTIONS, DISPOSAL_OPTIONS } from '../data/content';
import { Tag, ArrowRight, RotateCcw, AlertCircle, Shirt } from 'lucide-react';

interface RecapSectionProps {
  journeyState: JourneyState;
  onReset: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export const RecapSection: React.FC<RecapSectionProps> = ({
  journeyState,
  onReset,
  onScrollToSection,
}) => {
  const { reason, disposalChoice } = journeyState;

  const reasonObj = REASON_OPTIONS.find((r) => r.id === reason);
  const disposalObj = DISPOSAL_OPTIONS.find((d) => d.id === disposalChoice);

  // Generate plausible branch narrative based on user's choices
  const getBranchNarrative = () => {
    if (!reason || !disposalChoice) {
      return {
        step1: "You parted with your T-shirt without specifying why or how.",
        step2: "It likely joined India's 4.10 million tonnes of annual post-consumer textile waste.",
        step3: "Its outcome is evenly divided between the 55% recovery streams and the 45% landfill burn rate.",
      };
    }

    if (disposalChoice === 'repurpose') {
      return {
        step1: `Because ${reasonObj?.title.toLowerCase()}, you decided to repurpose it into a household cleaning rag (pocha).`,
        step2: "Your decision kept the 100% cotton material directly in use at home for an additional 6 to 18 months, avoiding immediate municipal transit.",
        step3: "Eventually, after threadbare disintegration, it will enter municipal waste. But you maximized its initial life cycle through domestic reuse.",
      };
    }

    if (disposalChoice === 'donate') {
      return {
        step1: `You let it go because ${reasonObj?.title.toLowerCase()} and handed it over as a donation.`,
        step2: "Depending on whether it was given to domestic staff, an NGO, or a clothing drop-box, it entered the 34% informal recovery channel.",
        step3: "If in good physical condition, it will be worn again. If stained or ill-fitting, it is likely routed to Panipat's rag-pullers for shoddy blanket yarn or sliced into industrial wiping cloths.",
      };
    }

    if (disposalChoice === 'give_sell') {
      return {
        step1: `You stopped wearing it because ${reasonObj?.title.toLowerCase()} and passed it on to a friend or thrift circle.`,
        step2: "This direct circular transfer avoids all collection friction and zero waste processing energy.",
        step3: "Another person wears it for another 1–3 years before it finally re-enters the national textile sorting flow.",
      };
    }

    // Discard
    return {
      step1: `You dropped it in the trash bin because ${reasonObj?.title.toLowerCase()}.`,
      step2: "It entered the 66% municipal solid waste stream managed by Urban Local Bodies.",
      step3: "Due to organic moisture and kitchen garbage contamination in mixed garbage bins, it faces an estimated ~45% probability of landfill burial or incinerator burning.",
    };
  };

  const narrative = getBranchNarrative();

  return (
    <section
      id="recap"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-b border-[#D4D0C7]"
    >
      {/* Editorial Marker */}
      <div className="flex items-center gap-2 font-mono text-xs text-[#65785F] uppercase font-semibold mb-3">
        <span>ACT XII : PERSONAL RECKONING</span>
        <span className="text-[#D4D0C7]">/</span>
        <span>SECTION 13</span>
      </div>

      {/* Heading */}
      <div className="max-w-3xl mb-12">
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#191919] font-normal leading-tight mb-4">
          Remember your T-shirt?
        </h2>
        <p className="font-sans text-base sm:text-lg text-[#6F6C66] font-light leading-relaxed">
          At the start of this journey, you made two quick decisions. Here is how that single garment traced its path
          through India's massive systemic pipeline.
        </p>
      </div>

      {/* Personal Journey Card */}
      <div className="bg-[#FAF8F5] border border-[#D4D0C7] p-6 sm:p-10 mb-8">
        {/* User Choice Tags */}
        <div className="flex flex-wrap items-center gap-3 pb-6 mb-8 border-b border-[#D4D0C7]">
          <div className="flex items-center gap-2 font-mono text-xs text-[#6F6C66]">
            <span>INITIAL REASON:</span>
            <span className="px-2.5 py-1 bg-[#E8E4DA] text-[#191919] font-semibold border border-[#D4D0C7]">
              {reasonObj ? reasonObj.title : 'Not chosen yet'}
            </span>
          </div>

          <span className="text-[#D4D0C7] hidden sm:inline">→</span>

          <div className="flex items-center gap-2 font-mono text-xs text-[#6F6C66]">
            <span>DISPOSAL CHOICE:</span>
            <span className="px-2.5 py-1 bg-[#E8E4DA] text-[#191919] font-semibold border border-[#D4D0C7]">
              {disposalObj ? disposalObj.title : 'Not chosen yet'}
            </span>
          </div>

          {(!reason || !disposalChoice) && (
            <button
              onClick={() => onScrollToSection('reason')}
              className="ml-auto text-xs font-mono text-[#65785F] hover:underline"
            >
              Choose Reason &amp; Disposal Now
            </button>
          )}
        </div>

        {/* 3-Step Journey Timeline */}
        <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-[#D4D0C7] mb-8">
          {/* Node 1 */}
          <div className="relative flex items-start gap-4">
            <div className="w-7 h-7 rounded-full bg-[#191919] text-[#F2EFE8] flex items-center justify-center font-mono text-xs font-bold shrink-0 z-10">
              1
            </div>
            <div className="p-4 bg-[#F2EFE8] border border-[#D4D0C7] flex-1">
              <span className="font-mono text-[10px] uppercase text-[#6F6C66] block mb-1">
                WARDROBE DISCARD MOMENT
              </span>
              <p className="font-sans text-sm sm:text-base text-[#191919] leading-relaxed">
                {narrative.step1}
              </p>
            </div>
          </div>

          {/* Node 2 */}
          <div className="relative flex items-start gap-4">
            <div className="w-7 h-7 rounded-full bg-[#637A83] text-[#F2EFE8] flex items-center justify-center font-mono text-xs font-bold shrink-0 z-10">
              2
            </div>
            <div className="p-4 bg-[#F2EFE8] border border-[#D4D0C7] flex-1">
              <span className="font-mono text-[10px] uppercase text-[#6F6C66] block mb-1">
                COLLECTION &amp; TRANSIT
              </span>
              <p className="font-sans text-sm sm:text-base text-[#191919] leading-relaxed">
                {narrative.step2}
              </p>
            </div>
          </div>

          {/* Node 3 */}
          <div className="relative flex items-start gap-4">
            <div className="w-7 h-7 rounded-full bg-[#65785F] text-[#F2EFE8] flex items-center justify-center font-mono text-xs font-bold shrink-0 z-10">
              3
            </div>
            <div className="p-4 bg-[#F2EFE8] border border-[#D4D0C7] flex-1">
              <span className="font-mono text-[10px] uppercase text-[#6F6C66] block mb-1">
                DOWNSTREAM SYSTEMIC DESTINATION
              </span>
              <p className="font-sans text-sm sm:text-base text-[#191919] leading-relaxed">
                {narrative.step3}
              </p>
            </div>
          </div>
        </div>

        {/* Ethical Non-Deterministic Disclaimer */}
        <div className="p-4 bg-[#E8E4DA] border border-[#D4D0C7] flex items-start gap-3 text-xs font-sans text-[#6F6C66]">
          <AlertCircle className="w-4 h-4 text-[#9A7A52] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-[#191919] font-medium">Methodological Note: </strong>
            User choices illustrate systemic flow tendencies rather than rigid individual outcomes. Real-world
            garment destinations depend on local municipal infrastructure, fabric contamination, and economic resale
            markets.
          </p>
        </div>

        {/* Change Choice / Experiment Controls */}
        <div className="mt-6 pt-4 border-t border-[#D4D0C7] flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => onScrollToSection('reason')}
            className="text-xs font-mono text-[#191919] hover:text-[#65785F] flex items-center gap-1.5 underline underline-offset-4"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Try Different Choices</span>
          </button>

          <span className="font-mono text-xs text-[#6F6C66]">
            One small decision enters a very large system.
          </span>
        </div>
      </div>
    </section>
  );
};
