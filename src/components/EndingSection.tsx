import React from 'react';
import { RotateCcw, BookOpen, Scissors, Heart, Sparkles, Compass } from 'lucide-react';

interface EndingSectionProps {
  onRestart: () => void;
  onOpenSources: (id?: string) => void;
}

export const EndingSection: React.FC<EndingSectionProps> = ({ onRestart, onOpenSources }) => {
  return (
    <section
      id="reflection"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center"
    >
      {/* Editorial Marker */}
      <div className="flex items-center justify-center gap-2 font-mono text-xs text-[#6F6C66] uppercase font-semibold mb-6">
        <span className="w-6 h-px bg-[#D4D0C7]" />
        <span>EPILOGUE</span>
        <span className="w-6 h-px bg-[#D4D0C7]" />
      </div>

      {/* Main Provocation */}
      <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#191919] font-normal leading-[1.05] tracking-tight mb-6">
        You were done with it. <br />
        <span className="italic font-light">But its story continued.</span>
      </h2>

      <p className="font-sans text-lg sm:text-xl text-[#6F6C66] font-light max-w-2xl mx-auto leading-relaxed mb-12">
        Discarding a garment ends your relationship with it — not its physical existence.
        <br />
        <span className="font-medium text-[#191919]">Where will your next unwanted T-shirt go?</span>
      </p>

      {/* 4 Tangible Principles for Mindful Garment Stewardship */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left mb-14">
        <div className="p-6 bg-[#FAF8F5] border border-[#D4D0C7]">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#65785F] uppercase mb-2">
            <Heart className="w-4 h-4" />
            <span>01. WEAR 9 MONTHS LONGER</span>
          </div>
          <h3 className="font-serif text-xl text-[#191919] mb-1">
            Extend the Active Wardrobe Life
          </h3>
          <p className="font-sans text-xs text-[#6F6C66] leading-relaxed">
            Extending the active life of clothing by just nine months reduces carbon, water, and waste footprints by
            roughly 20–30% according to UNEP benchmarks.
          </p>
        </div>

        <div className="p-6 bg-[#FAF8F5] border border-[#D4D0C7]">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#637A83] uppercase mb-2">
            <Scissors className="w-4 h-4" />
            <span>02. CHOOSE MONO-MATERIALS</span>
          </div>
          <h3 className="font-serif text-xl text-[#191919] mb-1">
            Beware of Inseparable Blends
          </h3>
          <p className="font-sans text-xs text-[#6F6C66] leading-relaxed">
            100% cotton, 100% linen, or 100% wool can be shredded and respun in hubs like Panipat. Polyester-cotton
            intimate blends with elastane and plastic prints almost always become landfill.
          </p>
        </div>

        <div className="p-6 bg-[#FAF8F5] border border-[#D4D0C7]">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#9A7A52] uppercase mb-2">
            <Compass className="w-4 h-4" />
            <span>03. KEEP IT SEPARATE &amp; DRY</span>
          </div>
          <h3 className="font-serif text-xl text-[#191919] mb-1">
            Never Mix with Wet Domestic Waste
          </h3>
          <p className="font-sans text-xs text-[#6F6C66] leading-relaxed">
            The moment a clean cotton shirt touches kitchen moisture in a municipal bin, its fiber recovery value plummets.
            Hand clean clothes directly to informal waste pickers, kabadiwalas, or donation centers.
          </p>
        </div>

        <div className="p-6 bg-[#FAF8F5] border border-[#D4D0C7]">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#A64B32] uppercase mb-2">
            <Sparkles className="w-4 h-4" />
            <span>04. REVIIVE LOCAL REPAIR</span>
          </div>
          <h3 className="font-serif text-xl text-[#191919] mb-1">
            Support Neighborhood Darzis
          </h3>
          <p className="font-sans text-xs text-[#6F6C66] leading-relaxed">
            India's vibrant informal network of neighborhood tailors, darners, and cobblers makes repair readily accessible.
            A ₹50 seam repair prevents another piece of clothing entering the 4.10M-tonne waste stream.
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          onClick={onRestart}
          id="ending-restart-btn"
          className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#191919] text-[#F2EFE8] font-mono text-xs uppercase tracking-wider hover:bg-[#333] transition-all shadow-sm"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Restart Garment Journey</span>
        </button>

        <button
          onClick={() => onOpenSources()}
          id="ending-sources-btn"
          className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#FAF8F5] text-[#191919] border border-[#D4D0C7] font-mono text-xs uppercase tracking-wider hover:bg-[#E5E0D5] transition-all"
        >
          <BookOpen className="w-4 h-4 text-[#65785F]" />
          <span>Inspect Methodology &amp; Sources</span>
        </button>
      </div>

      {/* Editorial colophon / footer note */}
      <div className="mt-20 pt-8 border-t border-[#D4D0C7] text-xs font-mono text-[#6F6C66] flex flex-col sm:flex-row items-center justify-between gap-3">
        <span>THE AFTERLIFE OF CLOTHES // 2026 EDITION</span>
        <span>Based on Ministry of Textiles empirical data</span>
        <span>Crafted for Urban Indian Consumers</span>
      </div>
    </section>
  );
};
