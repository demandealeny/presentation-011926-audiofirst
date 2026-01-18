import type { ImageMetadata } from "astro";

export enum SlideType {
  TITLE = 'TITLE',
  intro = 'INTRO',
  LIST = 'LIST',
  CENTER_EMOJI = 'CENTER_EMOJI',
  SPLIT = 'SPLIT', // Keeping for backward compatibility if needed, though unused now
  PROCESS = 'PROCESS',
  BIG_STATEMENT = 'BIG_STATEMENT',
  CONTACT = 'CONTACT',
  IMAGE_CTA = 'IMAGE_CTA',
  CARDS = 'CARDS'
}

export interface SlideContent {
  id: string;
  type: SlideType;
  title: string;
  subtitle?: string;
  content?: string | string[];
  emoji?: string;
  image?: ImageMetadata; // Added image property
  highlight?: boolean; // Changes background to white/yellow
  extraData?: {
    label?: string;
    items?: {
      title: string;
      desc?: string;
      icon?: string;
      image?: string; // Added image property for items (e.g., cards)
    }[];
  };
}