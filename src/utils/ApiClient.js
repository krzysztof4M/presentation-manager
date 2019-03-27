const API_URL = 'https://staging.sessionlab.com/assignment';
const API_TOKEN  = 'ce1bbbf5-282d-4ea5-ab10-737956ea0fdf';
const methods = ['get', 'post', 'put', 'patch', 'delete'];

export default class ApiClient {
  constructor() {
    methods.forEach((method) =>
      this[method] = (path, { data, signal } = {}) => {
        const requestParams = {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${API_TOKEN}`,
            'Content-Type': 'application/json'
          },
          method: method.toUpperCase(),
          body: JSON.stringify(data),
          signal
        };

        return fetch(API_URL + path, requestParams)
          .then(parseResponse);
      });
  }
}

function parseResponse(response) {
  const { status, ok } = response;

  return new Promise((resolve, reject) => {
    return response.json()
      .then(json => (ok ? resolve(json) : reject({ ...json, status })));
  });
}
