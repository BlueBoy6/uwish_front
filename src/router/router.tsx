import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from 'ui/pages/Login';
import { Dashboard } from 'ui/pages/Dashboard';
import { ProtectedRoutes } from 'router/ProtectedRoutes';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="dashboard"
          element={
            <ProtectedRoutes>
              <Dashboard />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
