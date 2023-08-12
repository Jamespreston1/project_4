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
      <div className="textContainer">
        <h2><em>What is an ETF?</em></h2>
        <p>Good question! An ETF is...</p>
        <h2> How is that different to a stock</h2>
      </div>

      <div className="textContainer">
        <h2><em>Terminology</em></h2>
        <p>Total Assets</p>
        <p>Tracking Error</p>
        <p>Total Return 1YR</p>
        <p>Total Return 3YR</p>
      </div>

      <div className="textContainer">
        <h3><em>How can you get started with trading?</em></h3>
        <p>Good question!</p>
      </div>
    </div>
  );
}


function SearchPage() {
  const [filter, setFilter] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const filterByTicker = () => {
    setFilteredData(data.filter(item => item.Ticker.toLowerCase().includes(filter.toLowerCase())));
  };

  const filterByName = () => {
    setFilteredData(data.filter(item => item.Name.toLowerCase().includes(filter.toLowerCase())));
  };

  const filterByDescription = () => {
    setFilteredData(data.filter(item => item.Description.toLowerCase().includes(filter.toLowerCase())));
  };

  const resetFilter = () => {
    setFilteredData(data);
    setFilter('');
  };

  console.log(data);

  return (
    <div className="search-page">
      <div className="search-filters">
        <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} placeholder="Filter by..." />
        <button onClick={filterByTicker}>Filter by Ticker</button>
        <button onClick={filterByName}>Filter by Name</button>
        <button onClick={filterByDescription}>Filter by Description</button>
        <button onClick={resetFilter}>Reset</button>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Add to Portfolio</th>
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
            {filteredData.map((item, index) => (
              <tr key={index}>
                <td><input type="checkbox" /></td>
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
    </div>
  );
}

function PortfolioPage() {
  return <div className="portfolio-page">This is the portfolio page.</div>;
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
          <Link to="/portfolio">Portfolio</Link> {' | '}
          <Link to="/login">Login</Link> {' | '}
          <Link to="/logout">Log Out</Link> {' | '}
          <Link to="/signUp">Sign Up</Link> 
          
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Information" element={<Information />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="/signUp" element={<SignUpPage />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
