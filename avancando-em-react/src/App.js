import { useState } from 'react';

import './App.css';
import SovietArtefacts from "./assets/images/soviet-artefacts-gpjGmbPLUxk-unsplash.jpg";

import ManageData from './components/ManageData';
import ListRenderer from './components/ListRenderer';
import KeyProperty from './components/KeyProperty';
import PreviousState from './components/PreviousState';
import ConditionalRender from './components/ConditionalRender';
import IfElse from './components/IfElse';
import ShowUsername from './components/ShowUsername';
import CarDetails from './components/CarDetails';

function App() {
  const name = "Taylor Swift"
  const [userName] = useState("Taylor Swift");

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
      <ShowUsername name={userName} />
      <CarDetails brand="Kia" km={123456} color="Orange" />
    </div>
  );
}

export default App;
