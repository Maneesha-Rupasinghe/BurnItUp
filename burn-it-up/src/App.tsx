
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BIUNavBar from './components/BIUNavBar';

import About from './pages/About';
import Counter from './pages/Counter';
import Home from './pages/Home';
import Contact from './pages/Contact';
import SignUpPage from './pages/SignUp';
import SignInPage from './pages/SignIn';



function App() {
  // Get current page path
  const path = window.location.pathname;
  let currentPage: 'Home' | 'Calory' | 'Contact' | 'About' = 'Home';

  if (path === '/') currentPage = 'Home';
  else if (path === '/calory') currentPage = 'Calory';
  else if (path === '/contact') currentPage = 'Contact';
  else if (path === '/about') currentPage = 'About';

  return (
    <BrowserRouter>
      <BIUNavBar currentPage={currentPage} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calory" element={<Counter />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;