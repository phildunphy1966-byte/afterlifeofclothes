# Suggested Components
AppShell; StoryProgress; SourcesDrawer; RestartJourney; Section; HeroTshirt; ReasonSelector; NationalScaleReveal; DisposalSelector; JourneyRecap; WasteSplitChart; CollectionSankey; OutcomePictogram; PrePostComparison; SurveyBarChart; SurveyDotPlot; PanipatMap; ProcessFlow; SortingGame; OutcomeDefinitionCards; QuoteWall; ThemeFilter; DataSourceTag; AccessibleTooltip; Metric; Annotation.

State:
```ts
type JourneyState = {
  reason: 'fit' | 'damaged' | 'bored' | 'style' | null;
  disposalChoice: 'donate' | 'give_sell' | 'repurpose' | 'discard' | null;
};
```
Keep national data separate from future survey data.
