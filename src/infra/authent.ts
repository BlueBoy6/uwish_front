import api from 'infra/api';

export default function* authenticate({
  identifier,
  password,
}: {
  identifier: string;
  password: string;
}): Generator {
  try {
    console.log('identifier call api : ', identifier);
    console.log('pass call api : ', password);
    const authent = yield api.post({
      url: '/auth/local',
      data: {
        identifier: identifier,
        password: password,
      },
    });
    console.log('retour de lotantification', authent);
    return authent;
  } catch (err: any) {
    console.error('la con de lui ça a fail : ', err.message);
    return false;
  }
}
