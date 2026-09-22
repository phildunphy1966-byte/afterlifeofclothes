import React, { useState } from 'react';
import { SORTING_ITEMS } from '../data/content';
import { PathwayType, SortingItem } from '../types';
import { Check, X, HelpCircle, ArrowRight, RotateCcw, AlertTriangle } from 'lucide-react';

export const SortingSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userDecisions, setUserDecisions] = useState<Record<string, PathwayType>>({});
  const [showResult, setShowResult] = useState(false);

  const currentItem: SortingItem = SORTING_ITEMS[currentIndex];
  const userChoice = userDecisions[currentItem.id];
  const isCorrect = userChoice === currentItem.correctPath;

  const handleChoose = (path: PathwayType) => {
    setUserDecisions((prev) => ({ ...prev, [currentItem.id]: path }));
    setShowResult(true);
  };

  const handleNext = () => {
    setShowResult(false);
    if (currentIndex < SORTING_ITEMS.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleRestart = () => {
    setUserDecisions({});
    setCurrentIndex(0);
    setShowResult(false);
  };

  const pathways: { id: PathwayType; label: string; color: string; desc: string }[] = [
    { id: 'reuse', label: 'Reuse (Wear)', color: '#65785F', desc: 'Second-hand resale or domestic gifting' },
    { id: 'recycle', label: 'Recycle (Fibre)', color: '#637A83', desc: 'Mechanical deconstruction into yarn' },
    { id: 'downcycle', label: 'Downcycle (Felt)', color: '#9A7A52', desc: 'Automotive felt, insulation, wipes' },
    { id: 'disposal', label: 'Discard (Waste)', color: '#A64B32', desc: 'Landfill or industrial incineration' },
  ];

  return (
    <section
      id="sorting"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-b border-[#D4D0C7]"
    >
      {/* Editorial Marker */}
      <div className="flex items-center gap-2 font-mono text-xs text-[#9A7A52] uppercase font-semibold mb-3">
        <span>ACT V : THE BOTTLENECK OF SORTING</span>
        <span className="text-[#D4D0C7]">/</span>
        <span>SECTION 06</span>
      </div>

      {/* Heading */}
      <div className="max-w-3xl mb-12">
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#191919] font-normal leading-tight mb-4">
          Clothes don't sort themselves.
        </h2>
        <p className="font-sans text-base sm:text-lg text-[#6F6C66] font-light leading-relaxed">
          No automated optical sensor can instantly tell whether a blended knit has enough fibre length to spin into
          yarn, or if glued sequins will ruin a shredding machine. Real women in sorting yards make these split-second
          calls hundreds of times per hour.
        </p>
      </div>

      {/* Interactive Sorting Activity Box */}
      <div className="bg-[#FAF8F5] border border-[#D4D0C7] p-6 sm:p-10">
        {/* Progress header */}
        <div className="flex items-center justify-between border-b border-[#D4D0C7] pb-4 mb-8 font-mono text-xs text-[#6F6C66]">
          <span className="uppercase">
            GARMENT SPECIMEN {currentIndex + 1} OF {SORTING_ITEMS.length}
          </span>
          <div className="flex items-center gap-1">
            {SORTING_ITEMS.map((_, i) => (
              <span
                key={i}
                className={`w-6 h-1.5 rounded-full transition-all ${
                  i === currentIndex
                    ? 'bg-[#191919]'
                    : userDecisions[SORTING_ITEMS[i].id]
                    ? 'bg-[#65785F]'
                    : 'bg-[#D4D0C7]'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Specimen Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
          {/* Left: Garment Manifest */}
          <div className="lg:col-span-7 bg-[#F2EFE8] border border-[#D4D0C7] p-6">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <span className="font-mono text-[10px] text-[#6F6C66] uppercase tracking-wider block">
                  GARMENT ARCHIVE ID #{currentItem.id.toUpperCase()}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#191919] font-normal mt-1">
                  {currentItem.name}
                </h3>
              </div>
              <span className="px-2.5 py-1 bg-[#FAF8F5] border border-[#D4D0C7] font-mono text-xs text-[#191919]">
                {currentItem.blend}
              </span>
            </div>

            {/* Spec Table */}
            <div className="space-y-3 font-mono text-xs border-t border-[#D4D0C7] pt-4">
              <div className="grid grid-cols-3 gap-2">
                <span className="text-[#6F6C66]">FIBRE:</span>
                <span className="col-span-2 text-[#191919] font-medium">{currentItem.material}</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <span className="text-[#6F6C66]">PHYSICAL STATE:</span>
                <span className="col-span-2 text-[#191919]">{currentItem.condition}</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <span className="text-[#6F6C66]">FEATURES:</span>
                <span className="col-span-2 text-[#191919]">{currentItem.details}</span>
              </div>
            </div>
          </div>

          {/* Right: Decision Panel */}
          <div className="lg:col-span-5">
            <h4 className="font-mono text-xs uppercase text-[#6F6C66] mb-3 tracking-wider">
              Where would you send this garment?
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
              {pathways.map((p) => {
                const isChosen = userChoice === p.id;
                const isTarget = currentItem.correctPath === p.id;

                let buttonStyle = 'bg-[#FAF8F5] border-[#D4D0C7] hover:border-[#191919] text-[#191919]';
                if (showResult) {
                  if (isTarget) {
                    buttonStyle = 'bg-[#65785F]/15 border-[#65785F] text-[#191919] font-semibold';
                  } else if (isChosen && !isTarget) {
                    buttonStyle = 'bg-[#A64B32]/10 border-[#A64B32] text-[#A64B32] line-through';
                  } else {
                    buttonStyle = 'opacity-40 border-[#D4D0C7]';
                  }
                }

                return (
                  <button
                    key={p.id}
                    id={`sort-btn-${p.id}`}
                    disabled={showResult}
                    onClick={() => handleChoose(p.id)}
                    className={`p-3 text-left border transition-all flex flex-col justify-between ${buttonStyle}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-lg font-medium">{p.label}</span>
                      {showResult && isTarget && <Check className="w-4 h-4 text-[#65785F]" />}
                      {showResult && isChosen && !isTarget && <X className="w-4 h-4 text-[#A64B32]" />}
                    </div>
                    <span className="font-sans text-xs text-[#6F6C66] mt-0.5">{p.desc}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Feedback / Reality Explanation */}
        {showResult && (
          <div className="p-5 rounded bg-[#F2EFE8] border border-[#D4D0C7] animate-fadeIn">
            <div className="flex items-start gap-3">
              <div
                className={`p-1.5 rounded-full shrink-0 ${
                  isCorrect ? 'bg-[#65785F] text-[#F2EFE8]' : 'bg-[#A64B32] text-[#F2EFE8]'
                }`}
              >
                {isCorrect ? <Check className="w-4 h-4" /> : <AlertTriangle className="w-4 h-4" />}
              </div>

              <div className="space-y-2 flex-1">
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-xs font-bold uppercase tracking-wide">
                    {isCorrect ? 'Ideal Industry Pathway' : 'Common Misconception'}
                  </span>
                  <span className="text-xs text-[#6F6C66]">
                    → Correct destination:{' '}
                    <strong className="capitalize text-[#191919]">
                      {pathways.find((p) => p.id === currentItem.correctPath)?.label}
                    </strong>
                  </span>
                </div>

                <p className="font-sans text-sm text-[#191919] leading-relaxed">
                  {currentItem.explanation}
                </p>

                <div className="font-mono text-xs text-[#6F6C66] pt-2 border-t border-[#D4D0C7] flex items-center gap-1.5">
                  <span className="text-[#A64B32] font-semibold">Real-world friction:</span>
                  <span>{currentItem.realWorldFriction}</span>
                </div>
              </div>
            </div>

            {/* Next / Finish control */}
            <div className="mt-5 flex justify-end">
              {currentIndex < SORTING_ITEMS.length - 1 ? (
                <button
                  onClick={handleNext}
                  id="next-specimen-btn"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#191919] text-[#F2EFE8] text-xs font-mono uppercase tracking-wider hover:bg-[#333] transition-all"
                >
                  <span>Examine Next Garment</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <button
                  onClick={handleRestart}
                  id="restart-sorting-btn"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#E5E0D5] text-[#191919] border border-[#D4D0C7] text-xs font-mono uppercase tracking-wider hover:bg-[#DCD6C8] transition-all"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Restart Sorting Exercise</span>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
