import './App.css';
import { useState, useEffect } from 'react';

const url = "http://localhost:3000/musicas";

function App() {
  const [musicas, setMusicas] = useState([]);

  const [artista, setArtista] = useState("");
  const [faixa, setFaixa] = useState("");

  // 1 - resgatando dados
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();

      setMusicas(data);
    }
    fetchData();
  }, []);

  // 2 - add de musicas
  const handleSubmit = async (e) => {
    e.preventDefault();

    const musica = {
      artista,
      faixa,
    };

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(musica),
    })

    // 3 - carregamento dinâmico
    const addedMusic = await res.json();
    setMusicas((prevProducts) => [...prevProducts, addedMusic]);

    setArtista("");
    setFaixa("");
  };

  return (
    <div className="App">
      <section>
        <h1>Lista de músicas</h1>
        <ul>
          {musicas.map((musica) => (
            <li key={musica.id}>
              {musica.artista} - {musica.faixa}
            </li>
          ))}
        </ul>
      </section>

      <br/><br/>

      <section className="adicionarMusica">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Cadastrar artista e música</legend>

            <label>
              Artista: 
              <input type="text" value={artista} name="name" onChange={(e) => setArtista(e.target.value)} />
            </label>

            <label>
              Música:
              <input type="text" value={faixa} name="name" onChange={(e) => setFaixa(e.target.value)} />
            </label>

            <input type='submit' value="Cadastrar" />
          </fieldset>
        </form>
      </section>
    </div>
  );
}

export default App;
