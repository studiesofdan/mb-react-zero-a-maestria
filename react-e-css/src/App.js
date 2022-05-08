import './App.css';
import MeuComponente from './components/ComponentCSS/MeuComponente';

function App() {
  return (
    <div className="App">
      <h1>React e CSS</h1>
      <MeuComponente />
      <h3 style={{
        color: "rebeccapurple",
      }}>Este elemento foi estilizado de forma inline</h3>
    </div>
  );
}

export default App;
