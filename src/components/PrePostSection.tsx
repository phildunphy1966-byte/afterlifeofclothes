import React from 'react';
import { NATIONAL_DATA } from '../data/content';
import { Factory, Home, ArrowRight, ShieldCheck, Flame } from 'lucide-react';

export const PrePostSection: React.FC = () => {
  const { preConsumer, postConsumer } = NATIONAL_DATA;

  return (
    <section
      id="comparison"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-b border-[#D4D0C7]"
    >
      {/* Editorial Marker */}
      <div className="flex items-center gap-2 font-mono text-xs text-[#637A83] uppercase font-semibold mb-3">
        <span>ACT IX : THE PARADOX OF OWNERSHIP</span>
        <span className="text-[#D4D0C7]">/</span>
        <span>SECTION 10</span>
      </div>

      {/* Heading */}
      <div className="max-w-3xl mb-12">
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#191919] font-normal leading-tight mb-4">
          Something changes <br className="hidden sm:inline" />
          after we buy it.
        </h2>
        <p className="font-sans text-base sm:text-lg text-[#6F6C66] font-light leading-relaxed">
          The textile industry is remarkably adept at capturing its own factory scraps. The breakdown occurs only once
          clothing enters civilian wardrobes.
        </p>
      </div>

      {/* Dual Comparative Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        {/* Pre-Consumer Column (Factory Floor) */}
        <div className="bg-[#FAF8F5] border border-[#D4D0C7] p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-[#D4D0C7] pb-3 mb-4">
              <div className="flex items-center gap-2">
                <Factory className="w-5 h-5 text-[#9A7A52]" />
                <h3 className="font-serif text-2xl sm:text-3xl text-[#191919]">Pre-Consumer Waste</h3>
              </div>
              <span className="font-mono text-xs font-semibold px-2 py-0.5 bg-[#9A7A52]/15 text-[#9A7A52]">
                FACTORY STAGE
              </span>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-4xl sm:text-5xl text-[#191919] font-normal">
                  {preConsumer.millionTonnes}M
                </span>
                <span className="font-sans text-sm text-[#6F6C66]">tonnes / year (42%)</span>
              </div>
              <p className="font-sans text-xs text-[#6F6C66] mt-1">
                Cutting clips, selvedge trimmings, rejected yarn cones, sample bolts.
              </p>
            </div>

            {/* Pathways breakdown */}
            <div className="space-y-3 font-mono text-xs mb-6">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-[#191919]">Upcycled into fresh products:</span>
                  <span className="font-bold text-[#65785F]">{preConsumer.upcyclingPct}%</span>
                </div>
                <div className="w-full h-2 bg-[#E5E0D5] rounded-full overflow-hidden">
                  <div className="h-full bg-[#65785F]" style={{ width: `${preConsumer.upcyclingPct}%` }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-[#191919]">Downcycled (felts/padding):</span>
                  <span className="font-bold text-[#9A7A52]">{preConsumer.downcyclingPct}%</span>
                </div>
                <div className="w-full h-2 bg-[#E5E0D5] rounded-full overflow-hidden">
                  <div className="h-full bg-[#9A7A52]" style={{ width: `${preConsumer.downcyclingPct}%` }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-[#A64B32]">Incinerated or landfilled:</span>
                  <span className="font-bold text-[#A64B32]">~{preConsumer.landfillIncinerationPct}%</span>
                </div>
                <div className="w-full h-2 bg-[#E5E0D5] rounded-full overflow-hidden">
                  <div className="h-full bg-[#A64B32]" style={{ width: `${preConsumer.landfillIncinerationPct}%` }} />
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-[#F2EFE8] border border-[#D4D0C7] text-xs font-sans text-[#191919]">
            <span className="font-bold block mb-1">Why it recovers so well:</span>
            Industrial fabric offcuts are 100% clean, mono-material, pre-sorted by color, free of zippers/sweat, and
            sold by weight in truckloads directly between manufacturing plants.
          </div>
        </div>

        {/* Post-Consumer Column (Wardrobe) */}
        <div className="bg-[#FAF8F5] border border-[#D4D0C7] p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-[#D4D0C7] pb-3 mb-4">
              <div className="flex items-center gap-2">
                <Home className="w-5 h-5 text-[#637A83]" />
                <h3 className="font-serif text-2xl sm:text-3xl text-[#191919]">Post-Consumer Waste</h3>
              </div>
              <span className="font-mono text-xs font-semibold px-2 py-0.5 bg-[#A64B32]/15 text-[#A64B32]">
                WARDROBE STAGE
              </span>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-4xl sm:text-5xl text-[#191919] font-normal">
                  {postConsumer.millionTonnes}M
                </span>
                <span className="font-sans text-sm text-[#6F6C66]">tonnes / year (58%)</span>
              </div>
              <p className="font-sans text-xs text-[#6F6C66] mt-1">
                Discarded shirts, jeans, bedsheets, fast fashion, and worn garments.
              </p>
            </div>

            {/* Pathways breakdown */}
            <div className="space-y-3 font-mono text-xs mb-6">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-[#191919]">Recovery (Reuse, Recycle, Downcycle):</span>
                  <span className="font-bold text-[#65785F]">{postConsumer.outcomes.recoveryPercent}%</span>
                </div>
                <div className="w-full h-2 bg-[#E5E0D5] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#65785F]"
                    style={{ width: `${postConsumer.outcomes.recoveryPercent}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-[#A64B32] font-semibold">Incinerated or Landfilled:</span>
                  <span className="font-bold text-[#A64B32]">{postConsumer.outcomes.disposalPercent}%</span>
                </div>
                <div className="w-full h-2 bg-[#E5E0D5] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#A64B32]"
                    style={{ width: `${postConsumer.outcomes.disposalPercent}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-[#F2EFE8] border border-[#D4D0C7] text-xs font-sans text-[#191919]">
            <span className="font-bold block mb-1">Why 45% ends up lost:</span>
            Household clothes are scattered across millions of homes, sewn with blended synthetic threads, soiled with
            organic waste in municipal bins, and missing accessible collection infrastructure.
          </div>
        </div>
      </div>
    </section>
  );
};
