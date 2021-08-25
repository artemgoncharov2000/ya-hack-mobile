const axios = require('axios');

export enum RequestMethodEnum {
  GET = 'GET',
  OPTIONS = 'OPTIONS',
  HEAD = 'HEAD',
  PUT = 'PUT',
  POST = 'POST',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

const END_POINT = 'http://localhost:8080'

export interface FetchResponse<T> {
  status: number;
  data: T;
  reason?: string;
}

export type RequestParams = {
  method: RequestMethodEnum,
  url: string,
  data?: any,
}

export function* doFetch({
  data,
  method,
  url,
} //@ts-expect-error
: RequestParams): WrapGeneratorT<FetchResponse> {
  const fullPath = END_POINT + url;

  try {
    console.log('data: ', JSON.stringify(data))
    let response = yield axios({
      url: fullPath,
      method: method,
      data: data,
      headers: {
        authorization: 'Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJ1c2VyIiwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6IlJPTEVfVVNFUiJ9XSwiaWF0IjoxNjI5MjMxMDA1LCJleHAiOjE2MzAzNTcyMDB9.z3OV1WESZnv7pl_yZFy-EM6O7_qfgww40ruqyIUocAldQrB5rNyDnJP0kVWHjhah',
      },
    })
    return {data: response['data'], status: response.status};
  } catch (err) {
    throw err;
  }

}