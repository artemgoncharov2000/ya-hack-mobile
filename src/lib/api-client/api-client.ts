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

export function* getPodcast(podcastId: string): ReturnType<typeof doFetch> {
  try {
    const requestParams: RequestParams = {
      method: RequestMethodEnum.GET,
      url: `/podcasts/${podcastId}`,
    }

    return yield doFetch(requestParams);
  } catch (error) {
    return error;
  }
}

export function* getPollResult(id: string, answers: Array<number>): ReturnType<typeof doFetch> {
  try {
    const requestParams: RequestParams = {
      method: RequestMethodEnum.POST,
      url: `/stats/polls/${id}`,
      data: {
        answers,
      },
    }

    return yield doFetch(requestParams);
  } catch (error) {
    return error;
  }
}