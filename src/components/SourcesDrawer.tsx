import React, { useEffect, useRef } from 'react';
import { X, ExternalLink, ShieldCheck, FileSpreadsheet, Info } from 'lucide-react';
import { SOURCES_LIST } from '../data/content';

interface SourcesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedSourceId?: string;
}

export const SourcesDrawer: React.FC<SourcesDrawerProps> = ({
  isOpen,
  onClose,
  selectedSourceId,
}) => {
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="sources-drawer-title"
      className="fixed inset-0 z-50 overflow-hidden bg-black/40 backdrop-blur-xs flex justify-end transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        ref={drawerRef}
        className="w-full max-w-xl bg-[#F2EFE8] h-full shadow-2xl border-l border-[#D4D0C7] flex flex-col p-6 sm:p-8 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-[#D4D0C7] pb-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-xs px-2 py-0.5 bg-[#191919] text-[#F2EFE8] uppercase tracking-wider font-semibold">
                Documentation
              </span>
              <span className="font-mono text-xs text-[#6F6C66]">AUDIT // 2026</span>
            </div>
            <h2 id="sources-drawer-title" className="font-serif text-2xl sm:text-3xl text-[#191919]">
              Sources, Data &amp; Methodology
            </h2>
          </div>
          <button
            onClick={onClose}
            id="close-sources-btn"
            aria-label="Close sources panel"
            className="p-1.5 rounded text-[#6F6C66] hover:text-[#191919] hover:bg-[#E5E0D5] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Ethical Standards Callout */}
        <div className="mb-6 p-4 rounded bg-[#E8E4DA] border border-[#D4D0C7] text-xs font-sans text-[#191919] leading-relaxed">
          <div className="flex items-center gap-2 font-mono font-semibold text-[#65785F] uppercase text-[11px] mb-1">
            <ShieldCheck className="w-4 h-4" />
            <span>Research Integrity Directive</span>
          </div>
          <p>
            National waste volumes and destination pathways are directly derived from empirical studies by the
            <strong> Ministry of Textiles (2026)</strong>. No survey or consumer quote figures are fabricated;
            unconfirmed datasets remain explicitly identified as exploratory schemas or pending surveys.
          </p>
        </div>

        {/* Sources List */}
        <div className="space-y-6 flex-1">
          <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#6F6C66] border-b border-[#D4D0C7] pb-1">
            Primary Evidence &amp; References
          </h3>

          {SOURCES_LIST.map((src) => {
            const isHighlighted = selectedSourceId === src.id;
            return (
              <article
                key={src.id}
                id={`source-card-${src.id}`}
                className={`p-4 rounded border transition-all duration-200 ${
                  isHighlighted
                    ? 'bg-[#E5E0D5] border-[#65785F] ring-2 ring-[#65785F]/30'
                    : 'bg-[#FAF8F5] border-[#D4D0C7]'
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <span className="font-mono text-[11px] font-semibold text-[#65785F] tracking-wide uppercase">
                    {src.role}
                  </span>
                  {src.year && (
                    <span className="font-mono text-[11px] text-[#6F6C66]">
                      [{src.year}]
                    </span>
                  )}
                </div>

                <h4 className="font-serif text-lg text-[#191919] font-medium leading-snug mb-1">
                  {src.title}
                </h4>
                <p className="font-sans text-xs text-[#6F6C66] mb-3">
                  {src.institution}
                </p>

                <p className="font-sans text-xs text-[#191919] leading-relaxed bg-[#F2EFE8] p-2.5 rounded border border-[#D4D0C7]/60 mb-3">
                  {src.excerpt}
                </p>

                {src.url && src.url !== '#' && (
                  <a
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#191919] hover:text-[#65785F] hover:underline underline-offset-2"
                  >
                    <span>Inspect Original Document</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </article>
            );
          })}
        </div>

        {/* Data Architecture Footer */}
        <div className="mt-8 pt-4 border-t border-[#D4D0C7] flex items-center justify-between text-xs font-mono text-[#6F6C66]">
          <div className="flex items-center gap-1.5">
            <FileSpreadsheet className="w-4 h-4 text-[#65785F]" />
            <span>Schema: national_textile_flow.csv</span>
          </div>
          <button
            onClick={onClose}
            className="px-3 py-1.5 bg-[#191919] text-[#F2EFE8] rounded text-xs hover:bg-[#333] transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
