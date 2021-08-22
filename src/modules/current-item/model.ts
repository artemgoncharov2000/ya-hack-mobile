export enum ItemEnum {
  POLL = 'pol',
  IMAGE_BUTTON = 'imagebutton',
  TEXT = 'text',
  FORM = 'form',
}

export type CurrentItemStateT = {
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
}