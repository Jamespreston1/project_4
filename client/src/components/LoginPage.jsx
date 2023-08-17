import React, { useState, useEffect } from 'react';
import { supabase } from "./../supabase.js";

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = async () => {
      const { user, error } = await supabase.auth.signIn({ email, password });
  
      if (error) {
        console.error("Error logging in:", error.message);
      } else {
        console.log("Logged in as:", user.email);
      }
    };
  
    return (
      <div className="login-container">
        <h1>Login</h1>
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="signInButton" onClick={handleLogin}>Login</button>
        <p className="footerComment"> Created by James Preston</p>
      </div>
    );
  }

  export default LoginPage