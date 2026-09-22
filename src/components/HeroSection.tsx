import React, { useState } from 'react';
import { ArrowDown, Scissors, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onStartJourney: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onStartJourney }) => {
  const [tshirtColor, setTshirtColor] = useState<'cream' | 'charcoal' | 'sage' | 'terracotta'>('cream');

  const colorMap = {
    cream: { bg: '#EFECE4', stroke: '#191919', label: '100% Combed Cotton' },
    charcoal: { bg: '#252525', stroke: '#EFECE4', label: 'Washed Black Jersey' },
    sage: { bg: '#65785F', stroke: '#F2EFE8', label: 'Botanical Sage Dyed' },
    terracotta: { bg: '#A64B32', stroke: '#F2EFE8', label: 'Brick Ochre Blend' },
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-16 overflow-hidden border-b border-[#D4D0C7]"
    >
      {/* Editorial watermark / issue banner */}
      <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#6F6C66] mb-6">
        <span className="inline-block w-8 h-px bg-[#6F6C66]/50" />
        <span>AN INTERACTIVE DATA STORYTELLING ESSAY</span>
        <span className="inline-block w-8 h-px bg-[#6F6C66]/50" />
      </div>

      {/* Main Title */}
      <div className="text-center max-w-4xl mx-auto mb-6">
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-[#191919] font-normal tracking-tight leading-[0.9] mb-4">
          The Afterlife <br />
          <span className="italic font-light">of Clothes</span>
        </h1>
        <p className="font-sans text-lg sm:text-2xl text-[#191919] font-light max-w-2xl mx-auto leading-relaxed">
          You are done with this T-shirt. <br className="hidden sm:inline" />
          <span className="font-medium text-[#191919]">But is the T-shirt done?</span>
        </p>
      </div>

      {/* Central Garment Illustration Stage */}
      <div className="relative my-8 sm:my-10 flex flex-col items-center">
        {/* Decorative Care Label Tag hanging from the collar */}
        <div className="relative group">
          {/* T-Shirt SVG Graphic */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 drop-shadow-sm transition-transform duration-500 hover:scale-[1.02]">
            <svg
              viewBox="0 0 400 400"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Drop shadow / silhouette */}
              <path
                d="M130 90 C150 115, 250 115, 270 90 L340 145 C355 158, 335 185, 315 180 L290 170 L295 330 C295 338, 288 345, 280 345 L120 345 C112 345, 105 338, 105 330 L110 170 L85 180 C65 185, 45 158, 60 145 Z"
                fill={colorMap[tshirtColor].bg}
                stroke={colorMap[tshirtColor].stroke}
                strokeWidth="3.5"
                strokeLinejoin="round"
                className="transition-colors duration-500"
              />

              {/* Collar Ribbing */}
              <path
                d="M130 90 C160 125, 240 125, 270 90"
                stroke={colorMap[tshirtColor].stroke}
                strokeWidth="3.5"
                fill="none"
              />
              <path
                d="M135 96 C162 128, 238 128, 265 96"
                stroke={colorMap[tshirtColor].stroke}
                strokeWidth="1.5"
                strokeDasharray="4 3"
                fill="none"
              />

              {/* Sleeve Seams */}
              <line
                x1="110"
                y1="170"
                x2="140"
                y2="105"
                stroke={colorMap[tshirtColor].stroke}
                strokeWidth="2"
                strokeDasharray="5 3"
              />
              <line
                x1="290"
                y1="170"
                x2="260"
                y2="105"
                stroke={colorMap[tshirtColor].stroke}
                strokeWidth="2"
                strokeDasharray="5 3"
              />

              {/* Hem Stitches */}
              <line
                x1="110"
                y1="335"
                x2="290"
                y2="335"
                stroke={colorMap[tshirtColor].stroke}
                strokeWidth="1.5"
                strokeDasharray="4 2"
              />
              <line
                x1="110"
                y1="340"
                x2="290"
                y2="340"
                stroke={colorMap[tshirtColor].stroke}
                strokeWidth="1.5"
                strokeDasharray="4 2"
              />

              {/* Hanging Tag */}
              <g transform="translate(190, 115)">
                <line x1="10" y1="0" x2="10" y2="25" stroke="#6F6C66" strokeWidth="1.5" strokeDasharray="2 2" />
                <rect x="-15" y="25" width="50" height="70" rx="3" fill="#FAF8F5" stroke="#191919" strokeWidth="1.5" />
                <circle cx="10" cy="32" r="2.5" fill="#191919" />
                <line x1="-5" y1="42" x2="25" y2="42" stroke="#191919" strokeWidth="2" />
                <line x1="-5" y1="50" x2="25" y2="50" stroke="#6F6C66" strokeWidth="1" strokeDasharray="2 2" />
                <text x="10" y="65" textAnchor="middle" fill="#191919" fontSize="8" fontFamily="monospace" fontWeight="bold">100%</text>
                <text x="10" y="74" textAnchor="middle" fill="#6F6C66" fontSize="6.5" fontFamily="sans-serif">COTTON</text>
                <text x="10" y="85" textAnchor="middle" fill="#A64B32" fontSize="6" fontFamily="monospace">RN#2026</text>
              </g>
            </svg>
          </div>

          {/* Tactile swatch picker below garment */}
          <div className="flex items-center justify-center gap-2 mt-2">
            <span className="font-mono text-[11px] text-[#6F6C66] mr-1">Fabric Swatch:</span>
            {(['cream', 'charcoal', 'sage', 'terracotta'] as const).map((color) => (
              <button
                key={color}
                onClick={() => setTshirtColor(color)}
                className={`w-6 h-6 rounded-full border transition-all ${
                  tshirtColor === color
                    ? 'ring-2 ring-[#191919] ring-offset-2 scale-110'
                    : 'opacity-80 hover:opacity-100'
                }`}
                style={{
                  backgroundColor: colorMap[color].bg,
                  borderColor: '#D4D0C7',
                }}
                aria-label={`Select ${colorMap[color].label}`}
                title={colorMap[color].label}
              />
            ))}
          </div>
        </div>

        {/* Garment Specification Strip */}
        <div className="mt-4 px-4 py-1.5 rounded bg-[#FAF8F5] border border-[#D4D0C7] font-mono text-xs text-[#6F6C66] flex items-center gap-3">
          <span className="text-[#191919] font-medium">{colorMap[tshirtColor].label}</span>
          <span className="text-[#D4D0C7]">|</span>
          <span>160 GSM</span>
          <span className="text-[#D4D0C7]">|</span>
          <span>Single Jersey Knit</span>
        </div>
      </div>

      {/* Call to action */}
      <div className="mt-6 flex flex-col items-center gap-3">
        <button
          onClick={onStartJourney}
          id="hero-cta-btn"
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#191919] text-[#F2EFE8] text-sm sm:text-base font-medium rounded-none tracking-wider uppercase hover:bg-[#333] transition-all active:scale-[0.98] shadow-md hover:shadow-lg"
        >
          <span>Follow its journey</span>
          <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
        </button>

        <p className="font-mono text-xs text-[#6F6C66] tracking-tight">
          Scroll down or tap to trace its path through India's textile flow
        </p>
      </div>

      {/* Subtle bottom care-label motifs */}
      <div className="absolute bottom-3 left-4 right-4 hidden sm:flex items-center justify-between font-mono text-[10px] text-[#6F6C66]/70 uppercase tracking-widest pointer-events-none">
        <span>DO NOT BLEACH // WASH COLD</span>
        <span>RECYCLE // REUSE // REPAIR</span>
        <span>MADE FOR CIRCULARITY</span>
      </div>
    </section>
  );
};
