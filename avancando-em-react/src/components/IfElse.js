import React, {useState} from 'react'

const ConditionalRender = () => {
    const [name, setName] = useState("Julio");

  return (
      <div>
          <h1>If ternário</h1>
          {name === "Jão"? (
              <div>
                  <p>O nome é Jão</p>
              </div>
          ) : (
              <div>
                  <p>Nome não encontrado!</p>
              </div>
          )}

          <button onClick={() => setName("Jão")}>Clica aqui</button>
      </div>
  )
}

export default ConditionalRender