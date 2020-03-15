import React from 'react';

const Searchbox = ({ searchbox }) => (
  <div className='searchbox'>
    <input
      type='search'
      placeholder='search robots'
      style={{
        height: '50px',
        width: '400px',
        fontSize: '20px',
        backgroundColor: 'pink',
        borderRadius: '5px',
        color: 'purple',
        padding: '5px 10px',
        boxShadow: '4px 4px 8px 0px rgba( 0, 0, 0, 0.2 )'
      }}
      onChange={searchbox}
    />
  </div>
)

export default Searchbox;
