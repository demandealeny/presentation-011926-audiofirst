export enum SlideType {
  TITLE = 'TITLE',
  intro = 'INTRO',
  LIST = 'LIST',
  CENTER_EMOJI = 'CENTER_EMOJI',
  SPLIT = 'SPLIT',
  PROCESS = 'PROCESS',
  BIG_STATEMENT = 'BIG_STATEMENT',
  CONTACT = 'CONTACT'
}

export interface SlideContent {
  id: string;
  type: SlideType;
  title: string;
  subtitle?: string;
  content?: string | string[];
  emoji?: string;
  highlight?: boolean; // Changes background to white/yellow
  extraData?: {
    label?: string;
    items?: { title: string; desc?: string; icon?: string }[];
  };
}