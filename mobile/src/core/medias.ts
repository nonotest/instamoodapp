// TODO:
// hasura custom fields -> camelCase
// export hasura to typescript

type MediaProps = {
  id?: string;
  insertedAt?: string;
  mediaSourceName: string;
  moodName: string;
  internalId?: any;
  uuid: string;
};

export type YoutubeMedia = MediaProps & {
  data: {
    videoId: string;
    username?: string;
  };
};

export type InstagramMedia = MediaProps & {
  data: {
    userId?: number;
    url: string;
  };
};

export type QuotableMedia = MediaProps & {
  data: {
    content: string;
    author: string;
  };
};

export type MemeApiMedia = MediaProps & {
  data: {
    title: string;
    url: string;
  };
};

// id: new Date().getTime(),

export type Media =
  | MemeApiMedia
  | YoutubeMedia
  | InstagramMedia
  | QuotableMedia;
export type MediaSource = {
  id: string;
  name: string;
};
