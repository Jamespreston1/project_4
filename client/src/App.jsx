import React, { useState, useEffect } from 'react';
import { Auth } from '@supabase/auth-ui-react'
import { supabase } from "./supabase.js";
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import './App.css';
import bcrypt from 'bcryptjs';
import { data } from '/Users/jamespreston/sei-course/classwork/Projects/Project_4/my-project/client/data.js';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchPage from './components/SearchPage.jsx';
import SignUpPage from './components/SignUpPage.jsx';
import LogoutPage from './components/LogoutPage.jsx';
import LoginPage from './components/LoginPage.jsx';
import Portfolios from './components/Portfolios.jsx';
import Information from './components/Information.jsx';
import HomePage from './components/HomePage.jsx';

// --------------------------------------------------- Supabase UI   
// function AuthComponent() {
//   return (
//     <div>
//       <Auth supabaseCliient={supabase} />
//     </div>
//   );
// }

// --------------------------------------------------- App routing  
function App() {
  const [selectedItems, setSelectedItems] = useState([]); 

  return (
    <Router>
      <div>
        <div className="navbar">
          <Link to="/">Home</Link> {' | '}
          <Link to="/Information">Information</Link> {' | '}
          <Link to="/search">Search</Link> {' | '}
          <Link to="/portfolios">Portfolios</Link> {' | '}
          {/* <Link to="/login">Login</Link> {' | '} */} 
          <Link to="/signUp">Login or Sign Up</Link> {' | '}
          <Link to="/logout">Logout</Link> 
          
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Information" element={<Information />} />
          <Route path="/search" element={<SearchPage selectedItems={selectedItems} setSelectedItems={setSelectedItems} />} />
          <Route path="/portfolios" element={<Portfolios selectedItems={selectedItems} setSelectedItems={setSelectedItems} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="/signUp" element={<SignUpPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
