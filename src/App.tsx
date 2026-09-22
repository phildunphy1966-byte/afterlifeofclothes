import React, { useState, useEffect } from 'react';
import { JourneyState, ReasonId, DisposalChoiceId } from './types';
import { Navigation } from './components/Navigation';
import { SourcesDrawer } from './components/SourcesDrawer';
import { HeroSection } from './components/HeroSection';
import { ReasonSection } from './components/ReasonSection';
import { NationalScaleSection } from './components/NationalScaleSection';
import { DisposalSection } from './components/DisposalSection';
import { CollectionSankeySection } from './components/CollectionSankeySection';
import { SortingSection } from './components/SortingSection';
import { PanipatSection } from './components/PanipatSection';
import { DefinitionsSection } from './components/DefinitionsSection';
import { OutcomeSection } from './components/OutcomeSection';
import { PrePostSection } from './components/PrePostSection';
import { SurveySection } from './components/SurveySection';
import { QuotesSection } from './components/QuotesSection';
import { RecapSection } from './components/RecapSection';
import { EndingSection } from './components/EndingSection';

export function App() {
  const [journeyState, setJourneyState] = useState<JourneyState>(() => {
    const saved = localStorage.getItem('afterlife_journey_state');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        // ignore parse error
      }
    }
    return { reason: null, disposalChoice: null };
  });

  const [isSourcesOpen, setIsSourcesOpen] = useState(false);
  const [activeSourceId, setActiveSourceId] = useState<string | undefined>(undefined);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Save journey state to localStorage
  useEffect(() => {
    localStorage.setItem('afterlife_journey_state', JSON.stringify(journeyState));
  }, [journeyState]);

  // Track scroll progress for the micro-thread indicator
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectReason = (reason: ReasonId) => {
    setJourneyState((prev) => ({ ...prev, reason }));
  };

  const handleSelectDisposal = (disposalChoice: DisposalChoiceId) => {
    setJourneyState((prev) => ({ ...prev, disposalChoice }));
  };

  const handleReset = () => {
    setJourneyState({ reason: null, disposalChoice: null });
    localStorage.removeItem('afterlife_journey_state');
    scrollToSection('hero');
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenSources = (sourceId?: string) => {
    setActiveSourceId(sourceId);
    setIsSourcesOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F2EFE8] text-[#191919] selection:bg-[#65785F]/20 selection:text-[#191919] flex flex-col font-sans">
      {/* Top sticky care-label navigation */}
      <Navigation
        journeyState={journeyState}
        onReset={handleReset}
        onOpenSources={handleOpenSources}
        scrollProgress={scrollProgress}
      />

      {/* Main Story Flow */}
      <main className="flex-1">
        {/* 01. Hero */}
        <HeroSection onStartJourney={() => scrollToSection('reason')} />

        {/* 02. Reason */}
        <ReasonSection
          selectedReason={journeyState.reason}
          onSelectReason={handleSelectReason}
          onContinue={() => scrollToSection('india-scale')}
        />

        {/* 03. India Scale */}
        <NationalScaleSection onOpenSources={handleOpenSources} />

        {/* 04. Disposal Choice */}
        <DisposalSection
          selectedDisposal={journeyState.disposalChoice}
          onSelectDisposal={handleSelectDisposal}
          onContinue={() => scrollToSection('collection')}
        />

        {/* 05. Collection Pathways */}
        <CollectionSankeySection onOpenSources={handleOpenSources} />

        {/* 06. Sorting Activity */}
        <SortingSection />

        {/* 07. Panipat Hub */}
        <PanipatSection onOpenSources={handleOpenSources} />

        {/* 08. Outcome Definitions */}
        <DefinitionsSection />

        {/* 09. Post-Consumer Outcomes (100-garment Pictogram) */}
        <OutcomeSection onOpenSources={handleOpenSources} />

        {/* 10. Pre- vs Post-Consumer Comparison */}
        <PrePostSection />

        {/* 11. Field Survey (TBD Ethics Standard) */}
        <SurveySection />

        {/* 12. Qualitative Voices */}
        <QuotesSection />

        {/* 13. Personalized Journey Recap */}
        <RecapSection
          journeyState={journeyState}
          onReset={handleReset}
          onScrollToSection={scrollToSection}
        />

        {/* 14. Reflection & Ending */}
        <EndingSection onRestart={handleReset} onOpenSources={handleOpenSources} />
      </main>

      {/* Sources & Methodology Drawer */}
      <SourcesDrawer
        isOpen={isSourcesOpen}
        onClose={() => setIsSourcesOpen(false)}
        selectedSourceId={activeSourceId}
      />
    </div>
  );
}

export default App;
