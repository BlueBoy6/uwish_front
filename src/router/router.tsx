import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from 'ui/pages/Login';
import { Dashboard } from 'ui/pages/Dashboard';
import Group from 'ui/pages/Group';
import UserWishlist from 'ui/pages/UserWishlist';
import { ProtectedRoutes } from 'router/ProtectedRoutes';
import 'ui/reset.css';

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
        <Route
          path="group/:id"
          element={
            <ProtectedRoutes>
              <Group />
            </ProtectedRoutes>
          }
        />
        <Route
          path="user-wishlist/:id"
          element={
            <ProtectedRoutes>
              <UserWishlist />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
