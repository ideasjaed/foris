import React from 'react'
import './style.scss'

const index = ({id, image, name, status, species}) => {
  return (
    <div className='container-card' key={id}>
      <img src={image} />
      <p className='title'>{name}</p>
      <p className='description'>{status} - {species} </p>
    </div>
  )
}

export default index
