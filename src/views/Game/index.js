import React, { useEffect, useState } from 'react'
import './style.scss';
import { useQuery, gql } from '@apollo/client';
import Layout from '../../components/Layout'
import CardGame from '../../components/CardGame';

const index = () => {
  const GET_CHARACTERS = gql`
  query getCharacters {
      characters {
      results {
          id
          name
          image
      }
      }
}`
const { data, loading, error } = useQuery(GET_CHARACTERS);
function getGrid () {

  let gridResult = [[], [], []];
  let characterIndex = 11;
  
  while (characterIndex >= 0) {
    let randomIndex = Math.floor(Math.random() * 3);
    if (
      gridResult[randomIndex] !== undefined &&
      gridResult[randomIndex].length < 4
    ) {
      gridResult[randomIndex].push(characterIndex);
      characterIndex -= 1;
    }
  }
  return gridResult;
}

    const [hits, setHits] = useState(0);
    const [shifts, setShifts] = useState(0);
    const [grid, setGrid] = useState([]);
    const [cards, setCards] = useState([]);
    useEffect(() => {
      let value = data?.characters?.results.slice(0, 6);
      if(value.length) {
        value = [...value, ...value];
        setGrid(getGrid(value))
        setCards(value)
      }
      console.log(cards, 'cards');
    }, [data]);

    const Row = ({colum}) => {
      console.log(colum, 'colum');
      return colum.map(row => <CardGame key={row} image={cards[row].image} name={cards[row].name} />)
    }


  return (
    <Layout>
        <div className='header-game'>
            <p className='text-counter'>Aciertos: {hits} </p>
            <p className='text-counter'>Turnos: {shifts}</p>
        </div>
        <div className='container-game'>
         {cards.length && grid?.map((order) => {
            return <Row column={order} />
            })}
        </div>
    </Layout>
  )
}

export default index
