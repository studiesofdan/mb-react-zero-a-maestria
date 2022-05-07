import './App.css';
import SovietArtefacts from "./assets/images/soviet-artefacts-gpjGmbPLUxk-unsplash.jpg";

import ManageData from './components/ManageData';
import ListRenderer from './components/ListRenderer';
import KeyProperty from './components/KeyProperty';
import PreviousState from './components/PreviousState';
import ConditionalRender from './components/ConditionalRender';
import IfElse from './components/IfElse';

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
      <KeyProperty />
      <PreviousState />
      <ConditionalRender />
      <IfElse />
    </div>
  );
}

export default App;
