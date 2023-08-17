import React, { useState, useEffect } from 'react';
import App from '/Users/jamespreston/sei-course/classwork/Projects/Project_4/my-project/client/src/App.jsx';
import data from '/Users/jamespreston/sei-course/classwork/Projects/Project_4/my-project/client/data.js'
import { supabase } from '../supabase';

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
  
    // integrating everything into supabase
    const buildPortfolio = async () => {
    const  data2    = await supabase.auth.getUser()
    const input = tempSelectedItems.map(item => {
      return({ticker:item.Ticker,description:item.Description,price:item.Price,email:data2.data.user.email})
    })
    console.log(input)
        const { data, error } = await supabase
        .from('securities')
        .insert(input)
        .select()
    
      
      console.log(data);
      console.log(error);
    
      console.log(data2)
      setSelectedItems(tempSelectedItems);
      console.log(tempSelectedItems)
      setTempSelectedItems([]);
    };
  
    const handleCheckboxChange = (item, isChecked) => {
      console.log(item);
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
          <button   style={{backgroundColor: tempSelectedItems.length > 0 ? 'green' : 'grey'}} onClick={()=>{buildPortfolio()}}
  >
    Build My Portfolio
  </button>
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
        <p className="footerComment"> Created by James Preston</p>
      </div>
    );
  }

  export default SearchPage