import './App.css';
import MeuComponente from './components/ComponentCSS/MeuComponente';
import Title from './components/CSSModules/Title';

function App() {
  const gatinnn = 1;
  const forest = true;

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

      <h5 className={forest ? "evermore" : "brusinha"}>gold rush</h5>
      
      <Title />
    </div>
  );
}

export default App;
