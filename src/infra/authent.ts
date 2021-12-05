import api from 'infra/api';
import { payloadAuthenticateType } from 'types/authent';

export default function* authenticate({
  identifier,
  password,
}: {
  identifier: string;
  password: string;
}): Generator<any | boolean> {
  try {
    const authent = yield api.post('/auth/local', {
      identifier: identifier,
      password: password,
    });
    const authentData = (authent as any).data
    console.log('authentData', authentData)
    return {
      jwt: (authentData as payloadAuthenticateType).jwt,
      ...(authentData as payloadAuthenticateType).user,
    };
  } catch (err: any) {
    console.error('Ah shit bro, authent failed : ', err.message);
    return false;
  }
}
