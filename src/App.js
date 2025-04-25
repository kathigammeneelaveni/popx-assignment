import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Change here
import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';
import AccountSettingsPage from './pages/AccountSettingsPage';

const App = () => {
  return (
    <Router>
      <Routes>  {/* Change here */}
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create-account" element={<CreateAccountPage />} />
        <Route path="/account-settings" element={<AccountSettingsPage />} />
      </Routes>  {/* Change here */}
    </Router>
  );
};

export default App;
