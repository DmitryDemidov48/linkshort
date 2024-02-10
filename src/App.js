import React from 'react';
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import RegistrationPage from "./pages/RegistrationPage";
import Header from "./components/Header";

function App() {
  return (
      <Router>
          <Header/>
          <Routes>
          <Route  path ="/linkshort" element={<HomePage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegistrationPage/>} />
          <Route element={<NotFoundPage/>} />
          </Routes>
      </Router>
  );
}

export default App;
