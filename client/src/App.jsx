import React, { useState, useEffect } from 'react';
import { supabase } from "./supabase.js";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import { data  } from '/Users/jamespreston/sei-course/classwork/Projects/Project_4/my-project/client/data.js';

function HomePage() {
  const [data, setData] = useState();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const { data } = await supabase.from("project4").select();
    setData(data[0].name);
  }

  return <div className="home-page">{data}</div>;
}

function Information() {
  return (
    <div className="information-page">
      <h2><em>What is an EFT?</em></h2>
      <p>Good question! An ETF is...</p>
      <h2><em>Terminology</em></h2>
      <p>Total Assets</p>
      <p>Tracking Error</p>
      <p>Total Return 1YR</p>
      <p>Total Return 3YR</p>
      <h3><em>How can you get started with trading?</em></h3>
      <p>Good question!</p>

    </div>
  );
}

function SearchPage() {
  return (
    <div className="search-page">
      <table>
        <thead>
          <tr>
            <th>Ticker</th>
            <th>Name</th>
            <th>Total Assets</th>
            <th>Price</th>
            <th>1 Year Total Return</th>
            <th>3 Year Total Return</th>
            <th>Tracking Error</th>
            <th>Expense Ratio</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.Ticker}</td>
              <td>{item.Name}</td>
              <td>{item['Total Assets']}</td>
              <td>{item.Price}</td>
              <td>{item['1YR TR%']}%</td>
              <td>{item['3YR TR%']}%</td>
              <td>{item['Tracking Error']}</td>
              <td>{item['Expense Ratio']}%</td>
              <td>{item.Description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function LoginPage() {
  return <div className="login-page">This is the login page.</div>;
}

function LogoutPage() {
  return <div className="logout-page">You have been logged out.</div>;
}

function SignUpPage() {
  return <div className="sign-up-page">This is the sign-up page.</div>;
}

function App() {
  return (
    <Router>
      <div>
        <div className="navbar">
          <Link to="/">Home</Link> {' | '}
          <Link to="/Information">Information</Link> {' | '}
          <Link to="/search">Search</Link> {' | '}
          <Link to="/login">Login</Link> {' | '}
          <Link to="/logout">Log Out</Link> {' | '}
          <Link to="/signUp">Sign Up</Link>
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Information" element={<Information />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="/signUp" element={<SignUpPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
