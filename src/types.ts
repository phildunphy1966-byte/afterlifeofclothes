export type ReasonId = 'fit' | 'damaged' | 'bored' | 'style';
export type DisposalChoiceId = 'donate' | 'give_sell' | 'repurpose' | 'discard';

export interface JourneyState {
  reason: ReasonId | null;
  disposalChoice: DisposalChoiceId | null;
}

export type PathwayType = 'reuse' | 'recycle' | 'downcycle' | 'disposal';

export interface SortingItem {
  id: string;
  name: string;
  material: string;
  blend: string;
  condition: string;
  details: string;
  correctPath: PathwayType;
  explanation: string;
  realWorldFriction: string;
}

export interface QuoteItem {
  id: string;
  quote: string;
  speaker: string;
  location: string;
  category: 'Donation' | 'Uncertainty' | 'Attachment' | 'Convenience';
  insight: string;
}

export interface SourceItem {
  id: string;
  title: string;
  institution: string;
  year?: number | string;
  url: string;
  role: string;
  excerpt: string;
}
