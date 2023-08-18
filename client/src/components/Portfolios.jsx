import React, { useState, useEffect } from 'react';
import App from '/Users/jamespreston/sei-course/classwork/Projects/Project_4/my-project/client/src/App.jsx'
import { supabase } from "./../supabase.js";


function Portfolios({ selectedItems, setSelectedItems }) {
    const[insertPortfolio, setinsertPortfolio] = useState([])
    const deleteItem = async (index,id) => {

const { error } = await supabase
.from('securities')
.delete()
.eq('id', id)

      const newSelectedItems = [...insertPortfolio];
      newSelectedItems.splice(index, 1);
      setinsertPortfolio(newSelectedItems);
    };


    const getPortfolio = async () => {
    const  data2    = await supabase.auth.getUser()
    console.log(data2);
    let { data: securities, error } = await supabase
    .from('securities')
    .select('*')
    .eq("email",data2.data.user.email)
    console.log(securities);
    setinsertPortfolio(securities)
    }

        useEffect(()=> {
    getPortfolio()
    },[])
  
    return (
      <div className="portfolios-page">
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Remove</th>
                <th>Ticker</th>
                <th>Price</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {insertPortfolio.map((item, index) => (
                <tr key={index}>
                  <td>
                    <button onClick={() => deleteItem(index,item.id)}>Remove</button> 
                  </td>
                  <td>{item.ticker}</td>
                  <td>{item.price}</td>
                  <td>{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="footerComment"> Created by James Preston</p>
      </div>
    );
  }

  export default Portfolios