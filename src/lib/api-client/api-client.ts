import {doFetch, RequestMethodEnum, RequestParams} from "./do-fetch";

export function* getEpisode(guid: string): ReturnType<typeof doFetch> {
  try {
    const requestParams: RequestParams = {
      method: RequestMethodEnum.GET,
      url: `/episodes/${guid}`,
    }

    return yield doFetch(requestParams);
  } catch (error) {
    throw error;
  }
}