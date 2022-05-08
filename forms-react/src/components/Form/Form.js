import React, { useState } from 'react'

import './Form.css';

const Form = () => {
  const [name, setName] = useState();

  const handleName = (e) => {
    setName(e.target.value);
  }

  console.log(name);

  return (
    <div>
        <form>
            <section>
                <label htmlFor='name'>Nome:</label>
                <input type="text" name="name" placeholder='Digite o seu nome' onChange={handleName} />

                <br />

                <label>
                  <span>Idade:</span>
                  <input type="text" name="idade" placeholder='Digite a sua idade' />
                </label>
            </section>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default Form