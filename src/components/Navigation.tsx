import React from 'react';
import { RotateCcw, BookOpen, Scissors, Tag } from 'lucide-react';
import { JourneyState } from '../types';

interface NavigationProps {
  journeyState: JourneyState;
  onReset: () => void;
  onOpenSources: (sourceId?: string) => void;
  scrollProgress: number;
}

export const Navigation: React.FC<NavigationProps> = ({
  journeyState,
  onReset,
  onOpenSources,
  scrollProgress,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#F2EFE8]/90 backdrop-blur-md border-b border-[#D4D0C7] transition-all duration-300">
      {/* Top micro-thread progress bar */}
      <div className="w-full h-1 bg-[#D4D0C7]/40 relative overflow-hidden">
        <div
          className="h-full bg-[#191919] transition-all duration-150 ease-out"
          style={{ width: `${Math.min(100, Math.max(0, scrollProgress))}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        {/* Logo / Title with care-label accent */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-2 py-0.5 border border-[#191919] bg-[#191919] text-[#F2EFE8] font-mono text-[11px] font-semibold tracking-wider uppercase">
            <Scissors className="w-3 h-3" />
            <span>FABRIC-LOG // 2026</span>
          </div>
          <span className="font-serif italic text-lg sm:text-xl font-medium tracking-tight text-[#191919]">
            The Afterlife of Clothes
          </span>
        </div>

        {/* User's interactive tracking pill (shows if choices made) */}
        <div className="hidden md:flex items-center gap-2 font-mono text-xs text-[#6F6C66]">
          {journeyState.reason ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#E5E0D5] text-[#191919] border border-[#D4D0C7]">
              <Tag className="w-3 h-3 text-[#65785F]" />
              <span className="font-medium capitalize">{journeyState.reason}</span>
            </span>
          ) : (
            <span className="text-[#6F6C66]/70 italic">1 Garment in Wardrobe</span>
          )}

          {journeyState.disposalChoice && (
            <>
              <span className="text-[#D4D0C7]">→</span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#E5E0D5] text-[#191919] border border-[#D4D0C7]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#65785F]" />
                <span className="font-medium capitalize">{journeyState.disposalChoice.replace('_', ' ')}</span>
              </span>
            </>
          )}
        </div>

        {/* Action controls: Sources drawer trigger & Restart */}
        <div className="flex items-center gap-2 sm:gap-3">
          {(journeyState.reason || journeyState.disposalChoice) && (
            <button
              onClick={onReset}
              id="nav-reset-journey-btn"
              title="Restart interactive garment journey"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono font-medium text-[#6F6C66] hover:text-[#191919] hover:bg-[#E5E0D5] rounded border border-transparent hover:border-[#D4D0C7] transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Reset Choice</span>
            </button>
          )}

          <button
            onClick={() => onOpenSources()}
            id="nav-sources-btn"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-[#191919] bg-[#E5E0D5] hover:bg-[#DCD6C8] border border-[#D4D0C7] rounded transition-colors"
          >
            <BookOpen className="w-3.5 h-3.5 text-[#65785F]" />
            <span>Sources &amp; Data</span>
          </button>
        </div>
      </div>
    </header>
  );
};
