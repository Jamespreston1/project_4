import React, { useState, useEffect } from 'react';
import { supabase } from "./supabase.js";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import { data } from '/Users/jamespreston/sei-course/classwork/Projects/Project_4/my-project/client/data.js';


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
        <h2>How is that different to a stock</h2>
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

function SearchPage({ selectedItems, setSelectedItems }) {
  const [filter, setFilter] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const [tempSelectedItems, setTempSelectedItems] = useState([]);

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
    setTempSelectedItems([]);
  };

  const buildPortfolio = () => {
    setSelectedItems(tempSelectedItems);
    setTempSelectedItems([]);
  };

  const handleCheckboxChange = (item, isChecked) => {
    if (isChecked) {
      setTempSelectedItems([...tempSelectedItems, item]);
    } else {
      setTempSelectedItems(tempSelectedItems.filter(selectedItem => selectedItem !== item));
    }
  };

  return (
    <div className="search-page">
      <div className="search-filters">
        <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} placeholder="Filter by..." />
        <button onClick={filterByTicker}>Filter by Ticker</button>
        <button onClick={filterByName}>Filter by Name</button>
        <button onClick={filterByDescription}>Filter by Description</button>
        <button onClick={resetFilter}>Reset</button>
        <button onClick={buildPortfolio}>Build My Portfolio</button>
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
                <td>
                  <input
                    type="checkbox"
                    checked={tempSelectedItems.includes(item)}
                    onChange={(e) => handleCheckboxChange(item, e.target.checked)}
                  />
                </td>
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

function Portfolios({ selectedItems, setSelectedItems }) {
  const deleteItem = (index) => {
    const newSelectedItems = [...selectedItems];
    newSelectedItems.splice(index, 1);
    setSelectedItems(newSelectedItems);
  };

  return (
    <div className="portfolios-page">
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Remove</th>
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
            {selectedItems.map((item, index) => (
              <tr key={index}>
                <td>
                  <button onClick={() => deleteItem(index)}>Remove</button> 
                </td>
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

function LoginPage() {
  return <div className="login-page">This is the login page.</div>;
}

function LogoutPage() {
  return <div className="logout-page">You have been logged out.</div>;
}

// Sign up Page 
function SignUpPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});

  const emailOptions = ['@outlook.com', '@gmail.com', '@hotmail.com', '@test.com'];

  const validate = () => {
    let isValid = true;
    let errors = {};

    // Name validation
    if (!form.name || /\d/.test(form.name)) {
      isValid = false;
      errors.name = 'Name cannot contain numbers';
    }

    // Email validation
    if (!form.email || !/^\S+@\S+\.\S+$/.test(form.email)) {
      isValid = false;
      errors.email = 'Please enter a valid email';
    }

    // Password validation
    if (!form.password || !/^(?=.*[a-zA-Z])(?=.*\d).{8,}$/.test(form.password)) {
      isValid = false;
      errors.password = 'Password must contain at least one letter, one number, and be 8 characters long';
    }

    // Confirm password validation
    if (form.password !== form.confirmPassword) {
      isValid = false;
      errors.confirmPassword = 'Passwords must match';
    }

    setErrors(errors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Submit the sign-up form
      console.log('Sign-up form submitted successfully');
    }
  };

  return (
    <div className="sign-up-page">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            pattern="[a-zA-Z\s]*"
            title="Name cannot contain numbers"
          />
          {errors.name && <div className="error">{errors.name}</div>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            list="emailOptions"
          />
          <datalist id="emailOptions">
            {emailOptions.map((option, index) => (
              <option key={index} value={option} />
            ))}
          </datalist>
          {errors.email && <div className="error">{errors.email}</div>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            pattern="^(?=.*[a-zA-Z])(?=.*\d).{8,}$"
            title="Password must contain at least one letter, one number, and be 8 characters long"
          />
          {errors.password && <div className="error">{errors.password}</div>}
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}


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
          <Link to="/login">Login</Link> {' | '}
          <Link to="/logout">Logout</Link> {' | '}
          <Link to="/signUp">Sign Up</Link>
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
