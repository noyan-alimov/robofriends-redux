import React from 'react';

const Searchbox = ({ searchbox }) => (
  <div className='searchbox'>
    <input
      type='search'
      placeholder='search robots'
      style={{ height: '25px', width: '400px' }}
      onChange={searchbox}
    />
  </div>
)

export default Searchbox;
