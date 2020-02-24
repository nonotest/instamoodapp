import { execute as getYoutube } from './youtube';
import { execute as getQuotable } from './quote';
import { execute as getMeme } from './meme';

import { Media } from './index';

export type MoodLifter = {
  name: string;
  getResult: (
    name: string,
  ) => Promise<{
    error: Object | null | undefined;
    result: Media | null | undefined;
  }>;
};

export const YOUTUBE_LIFTER: MoodLifter = {
  name: 'youtube',
  getResult: getYoutube,
};

export const QUOTE_LIFTER: MoodLifter = {
  name: 'quotable',
  getResult: getQuotable,
};

export const MEME_LIFTER: MoodLifter = {
  name: 'meme',
  getResult: getMeme,
};
