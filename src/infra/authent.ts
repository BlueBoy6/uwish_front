import api from 'infra/api';

export default function* authenticate({
  identifier,
  password,
}: {
  identifier: string;
  password: string;
}): Generator<any | boolean> {
  try {
    const authent = yield api.post({
      url: '/auth/local',
      data: {
        identifier: identifier,
        password: password,
      },
    });
    return authent;
  } catch (err: any) {
    console.error('ah shit bro authent failed : ', err.message);
    return false;
  }
}
