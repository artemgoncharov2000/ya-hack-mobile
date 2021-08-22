export enum RequestMethodEnum {
  GET = 'GET',
  OPTIONS = 'OPTIONS',
  HEAD = 'HEAD',
  PUT = 'PUT',
  POST = 'POST',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

const DEFAULT_HEADERS = {
  Authentication: 'Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJ1c2VyIiwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6IlJPTEVfVVNFUiJ9XSwiaWF0IjoxNjI5MjMxMDA1LCJleHAiOjE2MzAzNTcyMDB9.z3OV1WESZnv7pl_yZFy-EM6O7_qfgww40ruqyIUocAldQrB5rNyDnJP0kVWHjhah'
}

const END_POINT = 'localhost:8080'

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
: RequestParams): WrapGenerator<FetchResponse> {

  const fullPath = END_POINT + url;
  const headers = {...DEFAULT_HEADERS};

  let body;

  if (data) {
    body = JSON.stringify(data);
  }

  try {
    let response = yield fetch(fullPath, {
      method,
      body,
      headers,
    })

    const responseData = yield response.json();

    return {data: responseData, status: response.status};
  } catch (err) {
    throw err;
  }

}