import React from 'react'
import { useQuery, gql } from '@apollo/client';
import { Link } from "react-router-dom";
import './style.scss'
import Layout from '../../components/Layout'
import CardPrimary from '../../components/CardPrimary';

const index = () => {
    const GET_CHARACTERS = gql`
        query getCharacters {
            characters {
            results {
                id
                name
                status
                species
                image
            }
            }
    }`
    const { data, loading, error } = useQuery(GET_CHARACTERS);
    const characters = data?.characters.results.slice(0, 12)
  console.log(characters);
  return (
    <Layout>
        <p className='title-characters'>Personajes</p>
        <div className='container-grid'>
            {characters?.map((character) => {
                return <CardPrimary key={character.id} image={character.image} name={character.name} status={character.status} species={character.species} />
            })}
        </div>
        <Link to="/game">Jugar</Link>
    </Layout>
  )
}

export default index
