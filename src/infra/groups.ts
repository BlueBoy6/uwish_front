import api from 'infra/api';


export default function* getGroupsOfUser(idUser: number): Generator<any | boolean> {
    try {
        console.log('OSKOUR id user :', idUser)
        if (idUser) {
            const user_token = sessionStorage.getItem('USER_TOKEN');
          const groups = yield api.get(`/groups?filters[members][id][$eq]=${idUser}&populate=*`, { headers: { Authorization: `Bearer ${user_token}` } }) || { data: null };
          return (groups as any).data.data;
      }
  } catch (err: any) {
    console.error('Ah shit bro, authent failed : ', err.message);
    return false;
  }
}
