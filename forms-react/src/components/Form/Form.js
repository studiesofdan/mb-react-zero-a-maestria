import React, { useState } from 'react'

import './Form.css';

const Form = ({user }) => {
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");

  const [bio, setBio] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando o formulário");
    console.log(name, email, bio);

    setName("")
    setEmail("")
    setBio("")
  }



  return (
    <div>
        <form onSubmit={handleSubmit}>
            <section>
                <label htmlFor='name'>Nome:</label>
                <input 
                  type="text" 
                  name="name" 
                  placeholder='Digite o seu nome' 
                  onChange={handleName} value={name} />

                <br />

                <label>
                  <span>Idade:</span>
                  <input type="text" name="idade" placeholder='Digite a sua idade' />
                </label>

                <br />

                <label>
                  <span>E-mail:</span>
                  <input 
                    type="email" 
                    name="email" 
                    placeholder='Digite seu e-mail' 
                    onChange={(e) => setEmail(e.target.value)} 
                    value={email} />
                </label>

                <br />

                <label>
                  <span>Bio:</span>
                  <textarea 
                    name="bio" 
                    placeholder="Descrição do usuário" 
                    onChange={(e) => setBio(e.target.value)} 
                    value={bio} >
                  </textarea>
                </label>
            </section>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default Form