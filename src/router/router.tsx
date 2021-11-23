import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from 'ui/pages/Login';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
