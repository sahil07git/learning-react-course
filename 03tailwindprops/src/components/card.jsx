import React from 'react'

function Card({title, description}) {
  return (
    <div className='bg-white shadow-md rounded-lg p-4 w-64 text-center'>
        <h2 className='text-xl font-bold text-blue-600 mb-2'>{title}</h2>
        <p className='text-gray-700'>{description}</p>
    </div>
  );
}

export default Card;
