import React, { createContext, useContext, useState } from 'react';
import { Route, Routes, BrowserRouter as Router, Navigate } from 'react-router-dom';
import HomePage from './subpages/home';
import Register from './subpages/register';
import AboutUs from './subpages/AboutUs';
import Vote from './subpages/vote';
import Voting from './subpages/admin/voting';
import Guidelines from './subpages/guidelines';
import ElectionRegistration from './subpages/admin/cand_res';
import WinnerDeclaration from './subpages/admin/winner';
import Adminlogin from './subpages/admin/admin_login';
import Admin from './subpages/admin/admin';
import OtpTest from './subpages/test';
import Verify from './subpages/verify';

export const AuthContext = createContext();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path='/guidelines' element={<Guidelines />} />
          <Route path="/vote" element={<Vote />} />
          <Route path="/register" element={<Register />} />
          <Route path="/voting" element={<Voting />} />
          <Route path='/test' element={<OtpTest />} />
          <Route path='/verify' element={<Verify />} />

          <Route path="/admin_login" element={<Adminlogin />} />
          {isAuthenticated && (
            <>
              <Route path="/can_res" element={<ElectionRegistration />} />
              <Route path="/leadbord" element={<WinnerDeclaration />} />
              <Route path="/admin" element={<Admin />} />
            </>
          )}
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
