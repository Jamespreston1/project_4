import React, { useState, useEffect } from 'react';

function HomePage() {
    // const [data, setData] = useState();
  
    // useEffect(() => {
    //   getData();
    // }, []);
  
    // async function getData() {
    //   // const { data } = await supabase.from("users").select();
    //   setData(data[0].name);
    // }
  
    return <div className="home-page">
      {/* {data} */} 
      <h1> Welcome to <em><strong>What the ETF!</strong></em></h1> 
      <p> <strong>We're here to learn about ETF's, do some research and hopefully, get trading! </strong> </p> 
      
      <p className="footerComment"> Created by James Preston</p>
      </div>;
  
    
  }

  export default HomePage