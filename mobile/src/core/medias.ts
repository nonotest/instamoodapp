// TODO:
// hasura custom fields -> camelCase

import { Read_Top_Medias_By_Top_Trends_Fn } from '../generated/graphql';

export type YoutubeMediaVwBase = Omit<
  Read_Top_Medias_By_Top_Trends_Fn,
  'metadata'
>;
type YoutubeMediaVwMetadata = {
  videoId: string;
  username?: string;
};
export type YoutubeMediaVw = YoutubeMediaVwBase & {
  metadata: YoutubeMediaVwMetadata;
};

export type InstagramMediaVwBase = Omit<
  Read_Top_Medias_By_Top_Trends_Fn,
  'metadata'
>;
type InstagramMediaVwMetadata = {
  userId?: number;
  url: string;
};
export type InstagramMediaVw = InstagramMediaVwBase & {
  metadata: InstagramMediaVwMetadata;
};

export type QuotableMedia = Read_Top_Medias_By_Top_Trends_Fn & {
  metadata: {
    content: string;
    author: string;
  };
};

export type MemeApiMedia = Read_Top_Medias_By_Top_Trends_Fn & {
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
