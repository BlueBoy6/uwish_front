import { Navigate } from 'react-router-dom';
import Header from 'ui/components/layout/Header'
import Page from 'ui/components/layout/Page';

export function ProtectedRoutes({ children }: { children: JSX.Element }) {
  if (!sessionStorage.USER_TOKEN) return <Navigate to="/" />;
  return <Page>
    <Header />
    {children}
  </Page>;
}
