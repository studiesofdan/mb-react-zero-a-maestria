import React from 'react'

import './Form.css';

const Form = () => {
  return (
    <div>
        <form>
            <section>
                <label htmlFor='name'>Nome:</label>
                <input type="text" name="name" placeholder='Digite o seu nome' />
            </section>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default Form