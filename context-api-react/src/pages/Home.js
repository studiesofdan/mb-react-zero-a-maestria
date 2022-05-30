import ChangeCounter from '../components/ChangeCounter';

// 4 - refatorando o hook
import { useCounterContext } from '../hooks/useCounterContext';

const Home = () => {
  const { counter } = useCounterContext();

  return (
    <div>
      <h1>Home</h1>
      <p>Valor do contador: {counter}</p>
      {/* 3 - alterando valor */}
      <ChangeCounter />
    </div>
  )
}

export default Home