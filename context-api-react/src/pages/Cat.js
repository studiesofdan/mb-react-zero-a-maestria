import { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'

const Cat = () => {
  const { counter } = useContext(CounterContext);

  return (
    <div>
      <p>Cat</p>
      <p>Valor do contador: {counter}</p>
    </div>
  )
}

export default Cat