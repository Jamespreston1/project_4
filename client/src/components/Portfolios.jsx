import React, { useState, useEffect } from 'react';
import App from '/Users/jamespreston/sei-course/classwork/Projects/Project_4/my-project/client/src/App.jsx'


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
        <p className="footerComment"> Created by James Preston</p>
      </div>
    );
  }

  export default Portfolios