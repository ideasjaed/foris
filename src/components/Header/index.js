import React from 'react';
import getIcon from '../Icon/index.js';
import './style.scss';

const index = () => {
  return (
    <header className='container-header'>
        {getIcon('header-icon')}
        <div className='title-header'>
            <p>Juego de memoria</p>
        </div>
    </header>
  )
}

export default index
