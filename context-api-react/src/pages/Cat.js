import { useCounterContext } from "../hooks/useCounterContext";

const Cat = () => {
  const { counter } = useCounterContext();

  return (
    <div>
      <p>Cat</p>
      <p>Valor do contador: {counter}</p>
    </div>
  )
}

export default Cat