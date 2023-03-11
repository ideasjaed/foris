import React from 'react'
import './style.scss';
import Header from '../Header';

const index = ({ children }) => {
  return (
    <div className='container'>
      <Header />
      <div className='content-game'>
        {children}
      </div>
    </div>
  )
}

export default index
