import React from 'react';
import './card.css';

const Card = ({ name, email, id }) => (
  <div className='card'>
    <img className='image' src={`https://robohash.org/${id}`} />
    <h2 className='name'>{name}</h2>
    <h4 className='email'>{email}</h4>
  </div>
)

export default Card;
