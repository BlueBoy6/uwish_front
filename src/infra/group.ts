import api from 'infra/api';


export default function* getGroup(id: any): Generator<any | boolean> {
  try {
    const user_token = sessionStorage.getItem('USER_TOKEN');
    const {data}: any = yield api.get(`/groups/${id}`, { headers : {Authorization: `Bearer ${user_token}`} } ) || {data: null} ;    
    return data;
  } catch (err: any) {
    console.error('Ah shit bro, authent failed : ', err.message);
    return false;
  }
}
