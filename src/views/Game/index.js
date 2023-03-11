import React, { useState } from 'react'
import './style.scss'
import Layout from '../../components/Layout'

const index = () => {
    const [hits, setHits] = useState(0);
    const [shifts, setShifts] = useState(0)

  return (
    <Layout>
        <div className='header-game'>
            <p className='text-counter'>Aciertos: {hits} </p>
            <p className='text-counter'>Turnos: {shifts}</p>
        </div>
    </Layout>
  )
}

export default index
