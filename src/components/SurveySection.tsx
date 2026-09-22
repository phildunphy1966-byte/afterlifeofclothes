import React, { useState } from 'react';
import { Clock, ShieldAlert, CheckCircle2, FileCode, HelpCircle, Send } from 'lucide-react';

export const SurveySection: React.FC = () => {
  const [userPollAnswer, setUserPollAnswer] = useState<string | null>(null);
  const [hasVoted, setHasVoted] = useState(false);

  const pollOptions = [
    { id: 'wear_again', text: 'Worn by someone in need directly (Reuse)' },
    { id: 'downcycled_rag', text: 'Torn into industrial cleaning rags or mops (Downcycle)' },
    { id: 'recycled_yarn', text: 'Mechanically unspun into yarn in Panipat (Recycle)' },
    { id: 'landfill_burn', text: 'Ended up at Ghazipur or local landfill (Disposal)' },
  ];

  const handleVote = (id: string) => {
    setUserPollAnswer(id);
    setHasVoted(true);
  };

  return (
    <section
      id="survey"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-b border-[#D4D0C7]"
    >
      {/* Editorial Marker */}
      <div className="flex items-center gap-2 font-mono text-xs text-[#6F6C66] uppercase font-semibold mb-3">
        <span>ACT X : FIELD SURVEY RESEARCH</span>
        <span className="text-[#D4D0C7]">/</span>
        <span>SECTION 11</span>
      </div>

      {/* Heading */}
      <div className="max-w-3xl mb-12">
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#191919] font-normal leading-tight mb-4">
          What do young consumers <br className="hidden sm:inline" />
          think happens next?
        </h2>
        <p className="font-sans text-base sm:text-lg text-[#6F6C66] font-light leading-relaxed">
          How do urban Indian youth (18–30) perceive their discarded clothes? Are people aware that 45% ends up
          incinerated or in landfills?
        </p>
      </div>

      {/* Ethical Research Transparency Banner */}
      <div className="p-6 bg-[#FAF8F5] border border-[#D4D0C7] mb-8">
        <div className="flex items-start gap-3 mb-4 pb-4 border-b border-[#D4D0C7]">
          <div className="p-2 rounded bg-[#E8E4DA] text-[#6F6C66] shrink-0">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#65785F] uppercase">
              <span>Primary Field Survey Data — Currently in Collection</span>
            </div>
            <h3 className="font-serif text-2xl text-[#191919] mt-0.5">
              Zero-Fabrication Standard (TBD State)
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#6F6C66] mt-1 leading-relaxed">
              In accordance with our research ethics protocol, we never generate simulated percentages or mock respondents.
              The field survey is actively gathering responses across Mumbai, Delhi NCR, Bengaluru, and Pune.
              The questionnaire schema (`survey_template.csv`) is published below.
            </p>
          </div>
        </div>

        {/* Survey Schema Overview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-xs font-mono">
          <div className="p-4 bg-[#F2EFE8] border border-[#D4D0C7]">
            <span className="text-[#6F6C66] block mb-1">TARGET AUDIENCE</span>
            <span className="font-bold text-[#191919] text-sm">Urban Youth (18–30)</span>
            <p className="text-[11px] text-[#6F6C66] mt-1 font-sans">College students, young professionals</p>
          </div>

          <div className="p-4 bg-[#F2EFE8] border border-[#D4D0C7]">
            <span className="text-[#6F6C66] block mb-1">SAMPLE TARGET</span>
            <span className="font-bold text-[#191919] text-sm">N = 500 Responses</span>
            <p className="text-[11px] text-[#6F6C66] mt-1 font-sans">Stratified across 4 metropolitan tiers</p>
          </div>

          <div className="p-4 bg-[#F2EFE8] border border-[#D4D0C7]">
            <span className="text-[#6F6C66] block mb-1">QUESTION DOMAINS</span>
            <span className="font-bold text-[#191919] text-sm">6 Core Inquiries</span>
            <p className="text-[11px] text-[#6F6C66] mt-1 font-sans">Wardrobe turnover, disposal assumptions</p>
          </div>
        </div>

        {/* Live Reader Poll (Interactive component to let reader participate) */}
        <div className="p-6 bg-[#E8E4DA] border border-[#D4D0C7]">
          <span className="font-mono text-xs font-bold uppercase text-[#65785F] block mb-1">
            READER PARTICIPATION POLL
          </span>
          <h4 className="font-serif text-xl sm:text-2xl text-[#191919] mb-3">
            Before reading this story, what did you assume happened to clothes given to domestic help or charities?
          </h4>

          {!hasVoted ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {pollOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => handleVote(opt.id)}
                  id={`poll-opt-${opt.id}`}
                  className="p-3 text-left bg-[#FAF8F5] hover:bg-[#F2EFE8] border border-[#D4D0C7] hover:border-[#191919] transition-all text-xs font-sans text-[#191919] flex items-center justify-between"
                >
                  <span>{opt.text}</span>
                  <Send className="w-3 h-3 text-[#6F6C66]" />
                </button>
              ))}
            </div>
          ) : (
            <div className="p-4 bg-[#FAF8F5] border border-[#65785F] rounded">
              <div className="flex items-center gap-2 text-xs font-mono text-[#65785F] font-bold mb-1">
                <CheckCircle2 className="w-4 h-4" />
                <span>Your perspective has been registered in the session cache.</span>
              </div>
              <p className="font-sans text-sm text-[#191919]">
                You selected:{' '}
                <strong>{pollOptions.find((o) => o.id === userPollAnswer)?.text}</strong>.
                When official survey responses are compiled, this view will show the exact perception gap between
                consumer expectations and the Ministry of Textiles' 45% landfill reality.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
