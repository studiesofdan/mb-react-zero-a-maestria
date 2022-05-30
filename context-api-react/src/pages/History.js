import { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'

const History = () => {
  const { counter } = useContext(CounterContext);
  
  return (
    <div>
      <p>History</p>
      <p>Valor do contador: {counter}</p>
    </div>
  )
}

export default History