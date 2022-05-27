import React from 'react'
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

import "./Home.css"

const Home = () => {
  // 3 - carregamento de dados
  const url = 'http://localhost:3000/paises'
  const { data: countries, loading, error } = useFetch(url)

  return (
    <div>
      <h1>Países</h1>
      {error && <p>{error}</p>}
      <ul className="country">
        {countries && countries.map(country => (
        <li key={country.id}>
          <h2>{country.pais}</h2>
          <p>{country.sigla}</p>
        </li>
        ))}
      </ul>
    </div>
  )
}

export default Home