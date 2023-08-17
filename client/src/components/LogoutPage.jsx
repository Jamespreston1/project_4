import React, { useState, useEffect } from 'react';
import { supabase } from "./../supabase.js";
import { toast } from 'react-toastify';

function LogoutPage() {
    const [confirmLogout, setConfirmLogout] = useState(false);
  
    const handleLogoutConfirmation = () => {
      setConfirmLogout(true);
    };
  
    const handleLogout = async () => {
      const { error } = await supabase.auth.signOut();
  
      if (error) {
        console.error("Error signing out:", error.message);
        toast.error('Error logging out. Please try again.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.success('Log out successful', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
  
        // Redirecting back to the login page after a successful logout using window.location
        window.location.href = "/signUp";
      }
    };
  
    useEffect(() => {
      const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
        if (event === 'SIGNED_OUT') {
          console.log("logged out successfull!")
          // authListener?.unsubscribe();
          // Handle the post-sign-out logic here if you want
        }
      });
  
      // Cleanup the listener on component unmount
      return () => {
        // authListener?.unsubscribe();
      };
    }, []);
  
    return (
      <div className="logout-container">
        {!confirmLogout ? (
          <>
            <h1>Are you sure you want to log out?</h1>
            <button onClick={handleLogoutConfirmation}>Yes, I want to logout</button>
          </>
        ) : (
          <>
            <h1>Logging you out...</h1>
            {handleLogout()}
          </>
        )}
      </div>
    );
  }

  export default LogoutPage