export enum ItemEnum {
  POLL = 'pol',
  IMAGE_BUTTON = 'imagebutton',
  TEXT = 'text',
  FORM = 'form',
}

export type EpisodeItemT = {
  id: string,
  type: ItemEnum,
  timeStart: number,
  timeEnd: number,
  question?: string,
  options?: string,
  multipleAnswer?: boolean,
  text?: string,
  buttonUrl?: string,
  buttonText?: string,
  imageUrl?: string,
};

export type EpisodeStateT = {
  podcastId: string,
  guid: string,
  episodeNumber: number,
  title: string,
  duration: number,
  url: string,
  description: string,
  published: boolean,
  items: Array<EpisodeItemT> | null,
};