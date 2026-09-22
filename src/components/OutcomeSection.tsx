import React, { useState } from 'react';
import { NATIONAL_DATA } from '../data/content';
import { ExternalLink, Percent, Hash, Shirt } from 'lucide-react';

interface OutcomeSectionProps {
  onOpenSources: (id?: string) => void;
}

export const OutcomeSection: React.FC<OutcomeSectionProps> = ({ onOpenSources }) => {
  const [viewMode, setViewMode] = useState<'percent' | 'tonnes'>('percent');
  const [hoveredGarment, setHoveredGarment] = useState<number | null>(null);

  const totalIcons = 100;
  const recoveryCount = 55; // 55%
  const disposalCount = 45; // 45%

  const { outcomes } = NATIONAL_DATA.postConsumer;

  return (
    <section
      id="outcomes"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-b border-[#D4D0C7]"
    >
      {/* Editorial Marker */}
      <div className="flex items-center gap-2 font-mono text-xs text-[#A64B32] uppercase font-semibold mb-3">
        <span>ACT VIII : THE FINAL POST-CONSUMER LEDGER</span>
        <span className="text-[#D4D0C7]">/</span>
        <span>SECTION 09</span>
      </div>

      {/* Heading */}
      <div className="max-w-3xl mb-12">
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#191919] font-normal leading-tight mb-4">
          Where does post-consumer <br className="hidden sm:inline" />
          textile waste end up?
        </h2>
        <p className="font-sans text-base sm:text-lg text-[#6F6C66] font-light leading-relaxed">
          Out of the <strong>4.10 million tonnes</strong> discarded annually across Indian homes, how much actually
          avoids the furnace and the landfill?
        </p>
      </div>

      {/* Main Pictogram & Data Stage */}
      <div className="bg-[#FAF8F5] border border-[#D4D0C7] p-6 sm:p-10 mb-8">
        {/* Toggle between % and KTPA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#D4D0C7] pb-6 mb-8">
          <div>
            <span className="font-mono text-xs uppercase text-[#6F6C66] block">100-Garment Normalized Sample</span>
            <span className="font-serif text-2xl text-[#191919]">Every Icon Represents 1% (~41,000 Tonnes)</span>
          </div>

          <div className="flex items-center gap-2 p-1 bg-[#E5E0D5] rounded border border-[#D4D0C7]">
            <button
              onClick={() => setViewMode('percent')}
              id="view-percent-btn"
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded transition-all ${
                viewMode === 'percent'
                  ? 'bg-[#191919] text-[#F2EFE8] shadow-xs'
                  : 'text-[#191919] hover:text-[#000]'
              }`}
            >
              <Percent className="w-3.5 h-3.5" />
              <span>Percentages</span>
            </button>
            <button
              onClick={() => setViewMode('tonnes')}
              id="view-tonnes-btn"
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded transition-all ${
                viewMode === 'tonnes'
                  ? 'bg-[#191919] text-[#F2EFE8] shadow-xs'
                  : 'text-[#191919] hover:text-[#000]'
              }`}
            >
              <Hash className="w-3.5 h-3.5" />
              <span>Approx. Tonnes</span>
            </button>
          </div>
        </div>

        {/* 100-Garment Pictogram Grid */}
        <div className="mb-8">
          <div className="grid grid-cols-10 sm:grid-cols-20 gap-1.5 sm:gap-2 p-4 sm:p-6 bg-[#F2EFE8] border border-[#D4D0C7]">
            {Array.from({ length: totalIcons }).map((_, idx) => {
              const isRecovery = idx < recoveryCount;
              const color = isRecovery ? '#65785F' : '#A64B32';

              return (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredGarment(idx)}
                  onMouseLeave={() => setHoveredGarment(null)}
                  className={`relative p-1 rounded flex items-center justify-center transition-transform hover:scale-125 cursor-default ${
                    hoveredGarment === idx ? 'ring-2 ring-[#191919] z-10' : ''
                  }`}
                  style={{
                    backgroundColor: isRecovery ? '#65785F/10' : '#A64B32/10',
                  }}
                  title={
                    isRecovery
                      ? `Garment #${idx + 1}: Reuse/Recycle/Downcycle pathway`
                      : `Garment #${idx + 1}: Incineration/Landfill pathway`
                  }
                >
                  <Shirt
                    className="w-4 h-4 sm:w-5 sm:h-5 transition-colors"
                    style={{ color }}
                  />
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-[#6F6C66] mt-2 px-1">
            <span>55 Garments (Recovery Streams)</span>
            <span>45 Garments (Disposal / Landfill)</span>
          </div>
        </div>

        {/* Dual Metric Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Recovery Card */}
          <div className="p-6 bg-[#F2EFE8] border-l-4 border-[#65785F] border-t border-r border-b border-[#D4D0C7]">
            <span className="font-mono text-xs font-bold uppercase text-[#65785F] block mb-1">
              RECOVERY PATHWAYS
            </span>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="font-serif text-4xl sm:text-5xl text-[#191919] font-normal">
                {viewMode === 'percent' ? `${outcomes.recoveryPercent}%` : `${outcomes.recoveryKTPA} KTPA`}
              </span>
              <span className="font-sans text-sm text-[#6F6C66]">
                {viewMode === 'percent' ? `(~${outcomes.recoveryKTPA} KTPA)` : '(2.255 million tonnes)'}
              </span>
            </div>
            <p className="font-sans text-sm text-[#191919] leading-relaxed">
              Garments successfully routed to domestic secondhand wearing, mechanical shoddy unravelling in Panipat,
              or shredded into industrial automotive wipes and carpet felts.
            </p>
          </div>

          {/* Landfill Card */}
          <div className="p-6 bg-[#F2EFE8] border-l-4 border-[#A64B32] border-t border-r border-b border-[#D4D0C7]">
            <span className="font-mono text-xs font-bold uppercase text-[#A64B32] block mb-1">
              INCINERATION &amp; LANDFILL
            </span>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="font-serif text-4xl sm:text-5xl text-[#191919] font-normal">
                {viewMode === 'percent' ? `${outcomes.disposalPercent}%` : `${outcomes.disposalKTPA} KTPA`}
              </span>
              <span className="font-sans text-sm text-[#6F6C66]">
                {viewMode === 'percent' ? `(~${outcomes.disposalKTPA} KTPA)` : '(1.845 million tonnes)'}
              </span>
            </div>
            <p className="font-sans text-sm text-[#191919] leading-relaxed">
              Nearly half of all discarded household garments are either buried in massive municipal open dump yards or
              burned in waste-to-energy incinerators due to wet waste contamination and synthetic composite blends.
            </p>
          </div>
        </div>

        {/* Source citation */}
        <div className="mt-8 pt-4 border-t border-[#D4D0C7] flex justify-between items-center text-xs font-mono text-[#6F6C66]">
          <span>Data: Ministry of Textiles (2026), Section 5: Post-Consumer Material Balances</span>
          <button
            onClick={() => onOpenSources('mot-2026')}
            className="text-[#65785F] hover:underline flex items-center gap-1"
          >
            <span>Review Original Research</span>
            <ExternalLink className="w-3 h-3" />
          </button>
        </div>
      </div>
    </section>
  );
};
