import './App.css';

import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions';
import Eventos from './components/Eventos';
import Challenge from './components/Challenge';

function App() {
  return (
    <div className="App">
      <h1>React: Fundamentos</h1>
      <FirstComponent />
      <TemplateExpressions />
      <Eventos />
      <Challenge />
    </div>
  );
}

export default App;
