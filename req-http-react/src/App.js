import './App.css';
import { useState, useEffect } from 'react';

const url = "http://localhost:3000/musicas";

function App() {
  const [musicas, setMusicas] = useState([]);

  // 1 - resgatando dados
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();

      setMusicas(data);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Lista de músicas</h1>
      <ul>
        {musicas.map((musica) => (
          <li key={musica.id}>
            {musica.artista} - {musica.faixa}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
