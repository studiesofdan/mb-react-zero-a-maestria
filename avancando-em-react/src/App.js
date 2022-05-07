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
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';

function App() {
  const name = "Taylor Swift"
  const [userName] = useState("Taylor Swift");

  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0 },
    { id: 2, brand: "Kia", color: "Branco", newCar: false, km: 34445 },
    { id: 3, brand: "Cherry", color: "Vermelho", newCar: false, km: 26543767 },
  ]

  function showMessage() {
    console.log("Evento do componente pai")
  }
  
  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg);
  }

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

      <CarDetails brand="Kia" km={123456} color="Orange" newCar={false} />
      <CarDetails brand="Ford" km={120000} color="Red" newCar={false} />
      <CarDetails brand="Renault" km={2} color="Pink" newCar={true} />

      {cars.map((car) => (
        <CarDetails 
          key={car.id}
          brand={car.brand} 
          color={car.color} 
          newCar={car.newCar} 
          km={car.km} 
        />
      ))}

      <Fragment propFragment="tuts tuts" />

      <Container myValue="testing">
        <p>E este é o conteúdo</p>
      </Container>

      <Container myValue="testing 2">
        <h5>Testando o container</h5>
      </Container>

      <ExecuteFunction myFunction={showMessage} />

      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
      
    </div>
  );
}

export default App;
