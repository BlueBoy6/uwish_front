const objectGotKey = (object: any, key: string) => {
  if(object === null) return false
  return Object.keys(object).includes(key);
};

function flat(object: any) {
  const objectFlatten = {} as any;
  for (let key in object) {
    if (objectGotKey(object[key], 'data')) {
      if (objectGotKey(object[key].data, 'attributes')) {
        objectFlatten[key] = {
          id: object[key].data.id,
          ...object[key].data.attributes,
        };
      } else {
        if (object[key].data.some((k: any) => objectGotKey(k, 'attributes'))) {
          objectFlatten[key] = object[key].data.map((key: any) => ({
            id: key.id,
            ...key.attributes,
          }));
        } else objectFlatten[key] = object[key].data;
      }
    } else objectFlatten[key] = object[key];

    if (objectGotKey(object[key], 'attributes')) {
      objectFlatten[key] = {
        id: object[key].data.id,
        ...object[key].data.attributes,
      };
    }
  }
  console.groupEnd();
  return objectFlatten;
}

export function flatResponseFromApi(response: any) {
  const typeResponse = Array.isArray(response);

  if (typeResponse) {
    const responseFormated = response.map((r) => ({
      id: r.id,
      ...flat(r.attributes),
    }));
    return responseFormated;
  }
  if (objectGotKey(response, 'attributes')) {
    return {
      id: (response as any).id,
      ...flat((response as any).attributes),
    };
  }
  return response;
}
