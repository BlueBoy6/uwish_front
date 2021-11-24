import { Navigate } from 'react-router-dom';

export function ProtectedRoutes({ children }: { children: JSX.Element }) {
  console.log('ooops : ', !!sessionStorage.USER_TOKEN);
  if (!sessionStorage.USER_TOKEN) return <Navigate to="/" />;
  return <div>c'est la merde frangin :{children}</div>;
}
