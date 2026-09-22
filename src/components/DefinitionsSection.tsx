import React, { useState } from 'react';
import { DEFINITION_CARDS } from '../data/content';
import { ChevronDown, ChevronUp, Zap, AlertCircle } from 'lucide-react';

export const DefinitionsSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>('reuse');

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="definitions"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-b border-[#D4D0C7]"
    >
      {/* Editorial Marker */}
      <div className="flex items-center gap-2 font-mono text-xs text-[#637A83] uppercase font-semibold mb-3">
        <span>ACT VII : TAXONOMY OF RECOVERY</span>
        <span className="text-[#D4D0C7]">/</span>
        <span>SECTION 08</span>
      </div>

      {/* Heading */}
      <div className="max-w-3xl mb-12">
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#191919] font-normal leading-tight mb-4">
          A second life can mean <br className="hidden sm:inline" />
          different things.
        </h2>
        <p className="font-sans text-base sm:text-lg text-[#6F6C66] font-light leading-relaxed">
          The terms “sustainable”, “recycled”, and “reused” are frequently blurred in brand marketing.
          In textile waste science, each term represents a radically distinct thermodynamic and economic reality.
        </p>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
        {DEFINITION_CARDS.map((card) => {
          const isExpanded = expandedId === card.id;

          return (
            <div
              key={card.id}
              id={`def-card-${card.id}`}
              className={`p-6 border transition-all duration-200 cursor-pointer ${
                isExpanded
                  ? 'bg-[#FAF8F5] border-[#191919] shadow-md ring-1 ring-[#191919]'
                  : 'bg-[#FAF8F5]/70 hover:bg-[#FAF8F5] border-[#D4D0C7]'
              }`}
              onClick={() => toggleExpand(card.id)}
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <div className="flex items-center gap-2.5">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: card.color }}
                  />
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#191919]">
                    {card.term}
                  </h3>
                </div>
                <div className="p-1 text-[#6F6C66]">
                  {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </div>

              <p className="font-mono text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: card.color }}>
                {card.subtitle}
              </p>

              <p className="font-sans text-sm text-[#191919] leading-relaxed mb-4">
                {card.whatItIs}
              </p>

              {/* Expandable Technical Inset */}
              {isExpanded && (
                <div className="pt-4 border-t border-dashed border-[#D4D0C7] space-y-3 font-sans text-xs">
                  <div className="p-3 bg-[#F2EFE8] border border-[#D4D0C7]/80 rounded">
                    <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold text-[#191919] uppercase mb-1">
                      <Zap className="w-3 h-3 text-[#9A7A52]" />
                      <span>Thermodynamic &amp; Resource Footprint</span>
                    </div>
                    <p className="text-[#6F6C66] leading-relaxed">{card.energyImpact}</p>
                  </div>

                  <div className="p-3 bg-[#E8E4DA] border border-[#D4D0C7]/80 rounded">
                    <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold text-[#A64B32] uppercase mb-1">
                      <AlertCircle className="w-3 h-3 text-[#A64B32]" />
                      <span>Systemic Limits</span>
                    </div>
                    <p className="text-[#6F6C66] leading-relaxed">{card.limits}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
