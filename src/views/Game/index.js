import React, { useEffect, useState } from "react";
import "./style.scss";
import { useQuery, gql } from "@apollo/client";
import Layout from "../../components/Layout";
import CardGame from "../../components/CardGame";

const GET_CHARACTERS = gql`
  query getCharacters {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;
const index = () => {
  const { data, loading, error } = useQuery(GET_CHARACTERS);
  function getGrid(values, open) {
    const gridResult = values
      .sort((a, b) => (Math.floor(Math.random() * 9) % 3 ? -1 : 1))
      .map((e) => ({ ...e, isOpen: open }));
    return gridResult;
  }

  const [hits, setHits] = useState(0);
  const [shifts, setShifts] = useState(0);
  const [grid, setGrid] = useState([]);
  const [last, setLast] = useState(null);
  const openCardsList = [];
  useEffect(() => {
    if (!loading && data.characters.results) {
      let values = data?.characters?.results.slice(0, 6);
      values = [...values, ...values];
      setGrid(getGrid(values, true));
      let timer = setTimeout(() => {
        setGrid(getGrid(values, false));
      }, 3000);
    }
  }, [loading]);

  useEffect(() => {
    console.log(grid, "grid: ");
  }, [grid]);

  function onChange(id) {
    if (openCardsList.length === 0 || openCardsList.length % 2) {
      setLast(id);
      openCardsList.length && openCardsList.indexOf(id) !== -1
        ? openCardsList.splice(openCardsList.indexOf(id), 1)
        : openCardsList.push(id);
    } else {
      setLast(null);
    }
    if (last !== null && grid[last].id == grid[id].id) {
      setHits(hits + 1);
    }
    const d = [...grid];
    d[id].isOpen = !d[id].isOpen;
    setGrid(d);
  }

  return (
    <Layout>
      <div className="header-game">
        <p className="text-counter">Aciertos: {hits} </p>
        <p className="text-counter">Turnos: {shifts}</p>
      </div>
      <div className="container-game">
        {grid.length > 0 &&
          grid.map((el, index) => (
            <CardGame
              key={index}
              item={el}
              image={el.image}
              name={el.name}
              id={el}
              onFliped={() => onChange(index)}
            />
          ))}
      </div>
    </Layout>
  );
};

export default index;
