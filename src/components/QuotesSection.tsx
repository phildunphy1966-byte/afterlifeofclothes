import React, { useState } from 'react';
import { QUALITATIVE_QUOTES } from '../data/content';
import { Quote, Filter, MapPin, Tag } from 'lucide-react';

export const QuotesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Donation', 'Uncertainty', 'Attachment', 'Convenience'];

  const filteredQuotes =
    activeCategory === 'All'
      ? QUALITATIVE_QUOTES
      : QUALITATIVE_QUOTES.filter((q) => q.category === activeCategory);

  return (
    <section
      id="voices"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-b border-[#D4D0C7]"
    >
      {/* Editorial Marker */}
      <div className="flex items-center gap-2 font-mono text-xs text-[#6F6C66] uppercase font-semibold mb-3">
        <span>ACT XI : QUALITATIVE VOICES</span>
        <span className="text-[#D4D0C7]">/</span>
        <span>SECTION 12</span>
      </div>

      {/* Heading */}
      <div className="max-w-3xl mb-10">
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#191919] font-normal leading-tight mb-4">
          What people told us.
        </h2>
        <p className="font-sans text-base sm:text-lg text-[#6F6C66] font-light leading-relaxed">
          From wardrobe guilt and fast fashion sales to the domestic tradition of cutting old shirts into kitchen rags,
          here are real anonymized accounts from urban consumers across Indian cities.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
        <span className="font-mono text-xs text-[#6F6C66] mr-2 flex items-center gap-1">
          <Filter className="w-3.5 h-3.5" />
          <span>Filter:</span>
        </span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            id={`filter-quote-${cat.toLowerCase()}`}
            className={`px-3 py-1.5 rounded-none font-mono text-xs font-medium transition-all ${
              activeCategory === cat
                ? 'bg-[#191919] text-[#F2EFE8] border border-[#191919]'
                : 'bg-[#FAF8F5] text-[#6F6C66] hover:text-[#191919] border border-[#D4D0C7]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Quote Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredQuotes.map((q) => (
          <article
            key={q.id}
            id={`quote-card-${q.id}`}
            className="p-6 bg-[#FAF8F5] border border-[#D4D0C7] flex flex-col justify-between relative group hover:border-[#191919] transition-all"
          >
            {/* Quote Icon & Category Badge */}
            <div className="flex items-center justify-between mb-4">
              <Quote className="w-6 h-6 text-[#D4D0C7] group-hover:text-[#65785F] transition-colors" />
              <span className="font-mono text-[10px] uppercase font-semibold px-2 py-0.5 bg-[#E8E4DA] text-[#6F6C66]">
                {q.category}
              </span>
            </div>

            {/* Main Quote Text */}
            <blockquote className="font-serif text-lg sm:text-xl text-[#191919] font-normal leading-relaxed italic mb-6">
              “{q.quote}”
            </blockquote>

            {/* Author & City Footer */}
            <div className="pt-4 border-t border-dashed border-[#D4D0C7]">
              <div className="flex items-center justify-between font-mono text-xs text-[#191919] font-medium mb-1">
                <span>{q.speaker}</span>
                <span className="flex items-center gap-1 text-[#6F6C66]">
                  <MapPin className="w-3 h-3 text-[#65785F]" />
                  <span>{q.location}</span>
                </span>
              </div>
              <p className="font-sans text-[11px] text-[#6F6C66] italic">
                {q.insight}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
