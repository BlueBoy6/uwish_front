import api from 'infra/api';
import { payloadAuthenticateType, userStoreType } from 'types/authent';

export default function* authenticate({
  identifier,
  password,
}: {
  identifier: string;
  password: string;
}): Generator<userStoreType | boolean> {
  try {
    const authent = yield api.post('/auth/local', {
      identifier: identifier,
      password: password,
    }) as any;
    const data = (authent as any).data;
    console.log('authent : ', authent)
    return {
      jwt: data.jwt,
      ...data.user,
    };
  } catch (err: any) {
    console.error('Ah shit bro, authent failed : ', err.message);
    return false;
  }
}
