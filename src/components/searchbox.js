import React from 'react';
import './searchbox.css';

const Searchbox = ({ searchbox }) => (
  <div className='searchbox'>
    <input
      type='search'
      placeholder='search robots'
      className='search-input'
      onChange={searchbox}
    />
  </div>
)

export default Searchbox;
