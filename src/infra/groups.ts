import { flatResponseFromApi } from 'helpers/flatResponseFromApi';
import api from 'infra/api';

export default function* getGroupsOfUser(
  idUser: number,
): Generator<any | boolean> {
  try {
    if (idUser) {
      const groups = yield api.get(
        `/groups?filters[members][id][$eq]=${idUser}&populate=*`,
      ) || { data: null };
      return flatResponseFromApi((groups as any).data.data);
    }
  } catch (err: any) {
    console.error('Ah shit bro, authent failed : ', err.message);
    return false;
  }
}
