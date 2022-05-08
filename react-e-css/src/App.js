import './App.css';
import MeuComponente from './components/ComponentCSS/MeuComponente';

function App() {
  const gatinnn = 1;

  return (
    <div className="App">
      <h1>React e CSS</h1>

      <MeuComponente />

      <h3 style={{
        color: "rebeccapurple",
      }}>Este elemento foi estilizado de forma inline</h3>

      <h4 style={gatinnn < 10 ? {color: "purple"} : {color: "red"}}> 
      CSS Dinâmico 
      </h4>
      
    </div>
  );
}

export default App;
