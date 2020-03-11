// TODO:
// hasura custom fields -> camelCase

import { Ts_Medias_By_Top_Trends_Vw } from '../generated/graphql';

export type YoutubeMediaVwBase = Omit<Ts_Medias_By_Top_Trends_Vw, 'metadata'>;
type YoutubeMediaVwMetadata = {
  videoId: string;
  username?: string;
};
export type YoutubeMediaVw = YoutubeMediaVwBase & {
  metadata: YoutubeMediaVwMetadata;
};

export type InstagramMediaVwBase = Omit<Ts_Medias_By_Top_Trends_Vw, 'metadata'>;
type InstagramMediaVwMetadata = {
  userId?: number;
  url: string;
};
export type InstagramMediaVw = InstagramMediaVwBase & {
  metadata: InstagramMediaVwMetadata;
};

export type QuotableMedia = Ts_Medias_By_Top_Trends_Vw & {
  metadata: {
    content: string;
    author: string;
  };
};

export type MemeApiMedia = Ts_Medias_By_Top_Trends_Vw & {
  metadata: {
    title: string;
    url: string;
  };
};

// id: new Date().getTime(),

export type MediaVw =
  | MemeApiMedia
  | YoutubeMediaVw
  | InstagramMediaVw
  | QuotableMedia;

export type MediaSource = {
  id: string;
  name: string;
};
