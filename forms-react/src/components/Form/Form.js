import React, { useState } from 'react'

import './Form.css';

const Form = ({user}) => {
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [bio, setBio] = useState("");
  const [opcao, setOpcao] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando o formulário");
    console.log(name, email, bio, opcao);

    setName("")
    setEmail("")
    setBio("")
    setOpcao("")
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

                <br />

                <label>
                  <span>Selecione opção:</span>
                  <select name="opcao" onChange={(e) => setOpcao(e.target.value)} value={opcao} >
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrador</option>
                  </select>
                </label>

            </section>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default Form