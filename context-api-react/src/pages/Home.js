import ChangeCounter from '../components/ChangeCounter';

// 4 - refatorando o hook
import { useCounterContext } from '../hooks/useCounterContext';

// 5 - context mais complexo
import { useTitleColorContext } from '../hooks/useTitleColorContext';

const Home = () => {
  const { counter } = useCounterContext();

  // 5 - context mais complexo
  const { color, dispatch } = useTitleColorContext();

  // 6 - alterando state complexo
  const setTitleColor = (color) => {
    dispatch({ type: color });
  }

  return (
    <div>
      <h1 style={{ color: color }}>Home</h1>
      <p>Valor do contador: {counter}</p>
      {/* 3 - alterando valor */}
      <ChangeCounter />
       {/* 6 - alterando state complexo */}
       <div>
         <button onClick={() => setTitleColor("RED")}>Red</button>
         <button onClick={() => setTitleColor("YELLOW")}>Yellow</button>
       </div>
    </div>
  )
}

export default Home