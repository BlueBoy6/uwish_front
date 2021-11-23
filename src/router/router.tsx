import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from 'ui/pages/Login';
import { Dashboard } from 'ui/pages/Dashboard';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
