import { useCounterContext } from "../hooks/useCounterContext";

const History = () => {
  const { counter } = useCounterContext();
  
  return (
    <div>
      <p>History</p>
      <p>Valor do contador: {counter}</p>
    </div>
  )
}

export default History