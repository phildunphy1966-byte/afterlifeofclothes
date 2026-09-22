import React, { useState } from 'react';
import { NATIONAL_DATA } from '../data/content';
import { Layers, HelpCircle, ExternalLink, Factory, Home } from 'lucide-react';

interface NationalScaleSectionProps {
  onOpenSources: (id?: string) => void;
}

export const NationalScaleSection: React.FC<NationalScaleSectionProps> = ({ onOpenSources }) => {
  const [activeTab, setActiveTab] = useState<'both' | 'post' | 'pre'>('both');

  return (
    <section
      id="india-scale"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-b border-[#D4D0C7]"
    >
      {/* Editorial Marker */}
      <div className="flex items-center gap-2 font-mono text-xs text-[#637A83] uppercase font-semibold mb-3">
        <span>ACT II : THE NATIONAL CANVAS</span>
        <span className="text-[#D4D0C7]">/</span>
        <span>SECTION 03</span>
      </div>

      {/* Main Stat Headline */}
      <div className="max-w-3xl mb-12">
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#191919] font-normal leading-tight mb-4">
          Your T-shirt is one <br className="hidden sm:inline" />
          of millions.
        </h2>
        <p className="font-sans text-base sm:text-lg text-[#6F6C66] font-light leading-relaxed">
          Behind every individual decision sits an immense domestic flow. The Ministry of Textiles estimates India's
          aggregate annual textile waste at:
        </p>
      </div>

      {/* Giant Metric Display with Care Label Border */}
      <div className="p-8 sm:p-12 bg-[#FAF8F5] border border-[#D4D0C7] mb-10 relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-baseline justify-between gap-4 border-b border-[#D4D0C7] pb-8 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#6F6C66] uppercase tracking-widest mb-1">
              <span>OFFICIAL 2026 ESTIMATE // INDIA</span>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="font-serif text-6xl sm:text-8xl md:text-9xl text-[#191919] tracking-tight font-normal">
                7.073
              </span>
              <span className="font-sans text-xl sm:text-3xl text-[#6F6C66] font-light">
                million tonnes / year
              </span>
            </div>
          </div>

          <div className="bg-[#F2EFE8] px-4 py-3 rounded border border-[#D4D0C7] text-left">
            <span className="block font-mono text-xs text-[#6F6C66] uppercase">Equivalent Volume</span>
            <span className="font-mono text-xl sm:text-2xl font-bold text-[#191919]">7,073 KTPA</span>
            <span className="block text-[11px] font-sans text-[#6F6C66]">Kilo Tonnes Per Annum</span>
          </div>
        </div>

        {/* Proportional Split Bar Chart (Interactive) */}
        <div className="mb-6">
          <div className="flex items-center justify-between font-mono text-xs text-[#6F6C66] mb-2">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('post')}
                className={`font-medium transition-colors ${
                  activeTab === 'post' || activeTab === 'both' ? 'text-[#191919]' : 'text-[#6F6C66]/50'
                }`}
              >
                ■ POST-CONSUMER ({NATIONAL_DATA.postConsumer.percent}%)
              </button>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('pre')}
                className={`font-medium transition-colors ${
                  activeTab === 'pre' || activeTab === 'both' ? 'text-[#191919]' : 'text-[#6F6C66]/50'
                }`}
              >
                PRE-CONSUMER ({NATIONAL_DATA.preConsumer.percent}%) ■
              </button>
            </div>
          </div>

          {/* Bar graphic */}
          <div className="w-full h-10 sm:h-12 flex rounded-none overflow-hidden border border-[#191919] p-0.5 bg-[#191919]">
            {/* Post-consumer segment (58%) */}
            <button
              onClick={() => setActiveTab('post')}
              style={{ width: `${NATIONAL_DATA.postConsumer.percent}%` }}
              className={`h-full bg-[#637A83] hover:bg-[#526871] text-[#F2EFE8] font-mono text-xs sm:text-sm font-semibold flex items-center justify-center transition-all ${
                activeTab === 'post' ? 'ring-2 ring-white z-10' : ''
              }`}
              title="Click to inspect Post-Consumer waste breakdown"
            >
              <span className="truncate px-2">58% · Post-Consumer</span>
            </button>

            {/* Pre-consumer segment (42%) */}
            <button
              onClick={() => setActiveTab('pre')}
              style={{ width: `${NATIONAL_DATA.preConsumer.percent}%` }}
              className={`h-full bg-[#9A7A52] hover:bg-[#856742] text-[#F2EFE8] font-mono text-xs sm:text-sm font-semibold flex items-center justify-center transition-all ${
                activeTab === 'pre' ? 'ring-2 ring-white z-10' : ''
              }`}
              title="Click to inspect Pre-Consumer waste breakdown"
            >
              <span className="truncate px-2">42% · Pre-Consumer</span>
            </button>
          </div>
        </div>

        {/* Breakdown Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Post-Consumer Card */}
          <div
            onClick={() => setActiveTab('post')}
            className={`p-6 border transition-all cursor-pointer ${
              activeTab === 'post' || activeTab === 'both'
                ? 'bg-[#F2EFE8] border-[#637A83] ring-1 ring-[#637A83]'
                : 'bg-[#FAF8F5] border-[#D4D0C7] opacity-60'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded bg-[#637A83] text-[#F2EFE8]">
                  <Home className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-2xl text-[#191919]">Post-Consumer</h3>
              </div>
              <span className="font-mono text-lg font-bold text-[#637A83]">
                4.10M tonnes (58%)
              </span>
            </div>

            <p className="font-sans text-xs sm:text-sm text-[#191919]/90 leading-relaxed mb-4">
              {NATIONAL_DATA.postConsumer.description}
            </p>

            <div className="p-3 bg-[#E8E4DA] border border-[#D4D0C7] text-xs font-mono space-y-1">
              <div className="flex justify-between">
                <span className="text-[#6F6C66]">Volume:</span>
                <span className="font-bold text-[#191919]">4,100 KTPA</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6F6C66]">Primary Origin:</span>
                <span className="text-[#191919]">Individual Closets &amp; Homes</span>
              </div>
            </div>
          </div>

          {/* Pre-Consumer Card */}
          <div
            onClick={() => setActiveTab('pre')}
            className={`p-6 border transition-all cursor-pointer ${
              activeTab === 'pre' || activeTab === 'both'
                ? 'bg-[#F2EFE8] border-[#9A7A52] ring-1 ring-[#9A7A52]'
                : 'bg-[#FAF8F5] border-[#D4D0C7] opacity-60'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded bg-[#9A7A52] text-[#F2EFE8]">
                  <Factory className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-2xl text-[#191919]">Pre-Consumer</h3>
              </div>
              <span className="font-mono text-lg font-bold text-[#9A7A52]">
                2.973M tonnes (42%)
              </span>
            </div>

            <p className="font-sans text-xs sm:text-sm text-[#191919]/90 leading-relaxed mb-4">
              {NATIONAL_DATA.preConsumer.description}
            </p>

            <div className="p-3 bg-[#E8E4DA] border border-[#D4D0C7] text-xs font-mono space-y-1">
              <div className="flex justify-between">
                <span className="text-[#6F6C66]">Volume:</span>
                <span className="font-bold text-[#191919]">2,973 KTPA</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6F6C66]">Primary Origin:</span>
                <span className="text-[#191919]">Spinning, Weaving &amp; Garmenting Mills</span>
              </div>
            </div>
          </div>
        </div>

        {/* Source citation footnote */}
        <div className="mt-8 pt-4 border-t border-[#D4D0C7] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-mono text-[#6F6C66]">
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-[#191919]">Source:</span>
            <span>{NATIONAL_DATA.sourceLabel}</span>
          </div>
          <button
            onClick={() => onOpenSources('mot-2026')}
            className="inline-flex items-center gap-1 text-[#637A83] hover:underline"
          >
            <span>Audit Official Data</span>
            <ExternalLink className="w-3 h-3" />
          </button>
        </div>
      </div>
    </section>
  );
};
