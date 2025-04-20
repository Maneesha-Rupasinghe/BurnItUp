import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import BIUNavBar from './components/BIUNavBar';

import About from './pages/About';
import Counter from './pages/Counter';
import Home from './pages/Home';
import Contact from './pages/Contact';
import SignUpPage from './pages/SignUp';
import SignInPage from './pages/SignIn';
import ProtectedRoute from './components/ProtectedRoutes';

import { useAuth } from './context/AuthContext';

const PageWrapper = () => {
  const location = useLocation();
  const { user } = useAuth();

  let currentPage: 'Home' | 'Calory' | 'Contact' | 'About' = 'Home';
  if (location.pathname === '/calory') currentPage = 'Calory';
  else if (location.pathname === '/contact') currentPage = 'Contact';
  else if (location.pathname === '/about') currentPage = 'About';


  return (
    <>
      {user && <BIUNavBar currentPage={currentPage} />}
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/calory"
          element={
            <ProtectedRoute>
              <Counter />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          }
        />
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <PageWrapper />
    </BrowserRouter>
  );
}

export default App;
