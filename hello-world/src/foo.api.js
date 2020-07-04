import request from './request';

export function fetcFooList(id) {
  return request({
    url: 'http://localhost:8081/foo.json',
    method: 'get',
    params: { id }
  });
}
