import React, { useState } from 'react'

const ManageData = () => {
    let someData = 15;
    const [number, setNumber] = useState(15);

  return (
    <div>
        {/* Exemplo com uma variável local */}
        <section>
            <p>Valor: {someData}</p>
            <button onClick={() => (someData = 15)}>Mudar variável</button>
        </section>

        {/* Exemplo com useState */}
        <section>
            <p>Valor: {number}</p>
            <button onClick={() => (setNumber(25))}>Mudar o state</button>
        </section>
    </div>
  )
}

export default ManageData