import axios from 'axios';

const apiUrl = 'http://localhost:2333';
// const apiUrl = "https://uwish.david6.fr";

type methodArgs = {
  url: string;
  data: any | undefined;
  headers?: any;
};

type configArgs = methodArgs & {
  method: string;
};

type configOutput = {
  method: string;
  url: string;
  headers: {
    Authorization: string;
  };
  transformResponse: Object;
  data: any | undefined;
};

const methods = {
  get: ({ url, data, headers }: methodArgs) =>
    ApiCall(config({ method: 'get', url, data, headers })),
  post: ({ url, data, headers }: methodArgs) =>
    ApiCall(config({ method: 'post', url, data, headers })),
  put: ({ url, data, headers }: methodArgs) =>
    ApiCall(config({ method: 'put', url, data, headers })),
};

// il faut ajouter ça en header des prochaines requêtes
// { Authorization: `Bearer ${sessionStorage.user_token}` };

const config = ({ method, url, data, headers }: configArgs): configOutput => {
  const a = {
    method: method,
    url: `${apiUrl}${url}`,
    headers: {
      ...headers,
    },
    transformResponse: (data: any) => JSON.parse(data),
    data: data || undefined,
  };
  console.log('config', a);
  return a;
};

function* ApiCall(conf: any): any {
  try {
    const result = yield axios(conf);
    return result.data;
  } catch (err: any) {
    throw new Error(
      `une erreur est arrivé lors de la requête : ${err.message}`,
    );
  }
}

export default methods;
