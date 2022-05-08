import './App.css';
import Form from './components/Form/Form';

function App() {
  return (
    <div className="App">
      <h1>Forms com React</h1>
      <Form user={{ name: "Lepix", email: "lepix@mail.cu" }} />
    </div>
  );
}

export default App;