export enum ItemEnum {
  POLL = 'poll',
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
  options?: Array<string>,
  multipleOptions?: boolean,
  text?: string,
  buttonUrl?: string,
  buttonText?: string,
  imageUrl?: string,
}