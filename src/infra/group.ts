import { flatResponseFromApi } from 'helpers/flatResponseFromApi';
import api from 'infra/api';

export default function* getGroup(id: any): Generator<any | boolean> {
  try {
    const group: any = yield api.get(`/groups/${id}?populate=*`) || {
      data: null,
    };
    return flatResponseFromApi(group.data.data);
  } catch (err: any) {
    console.error('Ah shit bro, authent failed : ', err.message);
    return false;
  }
}
