import React, { useState, useEffect } from 'react';
import { supabase } from "./supabase.js";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import './App.css';


function HomePage() {
  const [data, setData] = useState();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const { data } = await supabase.from("project4").select();
    setData(data[0].name);
  }

  return <>{data}</>;

}

function OtherPage() {
  return <div>Place holder page</div>;
}

function SearchPage() {
  const [country, setCountry] = React.useState('');
  const [thematic, setThematic] = React.useState('');
  const [minPrice, setMinPrice] = React.useState('');
  const [maxPrice, setMaxPrice] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Country: ${country}\nThematic: ${thematic}\nMin Price: ${minPrice}\nMax Price: ${maxPrice}`);
  };

  return (
    <div>
      <h2>Input Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Country:</label>
          <select value={country} onChange={(e) => setCountry(e.target.value)}>
            <option value="" disabled>Select a country</option>
            <option value="Argentina">Argentina</option>
            <option value="Australia">Australia</option>
            <option value="Brazil">Brazil</option>
            <option value="Canada">Canada</option>
            <option value="China">China</option>
            <option value="France">France</option>
            <option value="Germany">Germany</option>
            <option value="India">India</option>
            <option value="Indonesia">Indonesia</option>
            <option value="Italy">Italy</option>
            <option value="Japan">Japan</option>
            <option value="Mexico">Mexico</option>
            <option value="Russia">Russia</option>
            <option value="Saudi Arabia">Saudi Arabia</option>
            <option value="South Africa">South Africa</option>
            <option value="South Korea">South Korea</option>
            <option value="Turkey">Turkey</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="United States">United States</option>
            <option value="European Union">European Union</option>
          </select>
        </div>
        <div>
          <label>Thematic:</label>
          <select value={thematic} onChange={(e) => setThematic(e.target.value)}>
            <option value="" disabled>Select a sector</option>
            <option value="Energy">Energy</option>
            <option value="Materials">Materials</option>
            <option value="Industrials">Industrials</option>
            <option value="Consumer Discretionary">Consumer Discretionary</option>
            <option value="Consumer Staples">Consumer Staples</option>
            <option value="Health Care">Health Care</option>
            <option value="Financials">Financials</option>
            <option value="Information Technology">Information Technology</option>
            <option value="Communication Services">Communication Services</option>
            <option value="Utilities">Utilities</option>
            <option value="Real Estate">Real Estate</option>
          </select>
        </div>
        <div>
          <label>Price:</label>
          <div>
            <label>Min:</label>
            <input
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              placeholder="Min Price"
            />
          </div>
          <div>
            <label>Max:</label>
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              placeholder="Max Price"
            />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}





function LoginPage() {
  return <div>This is the login page.</div>;
}

function LogoutPage() {
  return <div>You have been logged out.</div>;
}

function SignUpPage() {
  return <div>This is the sign-up page.</div>;
}

function App() {
  return (
    <Router>
      <div>
        <div className="navbar">
          <Link to="/">Home</Link> {' | '}
          <Link to="/otherPage">Other Page</Link> {' | '}
          <Link to="/search">Search</Link> {' | '}
          <Link to="/login">Login</Link> {' | '}
          <Link to="/logout">Log Out</Link> {' | '}
          <Link to="/signUp">Sign Up</Link>
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/otherPage" element={<OtherPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/login" element={<LoginPage />} /> {/* Added login route */}
          <Route path="/logout" element={<LogoutPage />} /> {/* Added logout route */}
          <Route path="/signUp" element={<SignUpPage />} /> {/* Added sign-up route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
