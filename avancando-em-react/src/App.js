import './App.css';
import SovietArtefacts from "./assets/images/soviet-artefacts-gpjGmbPLUxk-unsplash.jpg";
import ListRenderer from './components/ListRenderer';

import ManageData from './components/ManageData';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Avançando em React</h1>
      </header>
      <section>
        {/* Imagem na pasta public */}
        <img src="/ling-tang-rsD_jv_A8Yo-unsplash.jpg" width="50%" height="50%" alt="Paisagem" />

        <br/>

        {/* Imagens em src */}
        <img src={SovietArtefacts} width="50%" height="50%" alt="Soviet Artefacts" />
      </section>

      <ManageData />
      <ListRenderer />
    </div>
  );
}

export default App;
