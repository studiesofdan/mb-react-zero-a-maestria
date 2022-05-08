import React from 'react'

const UserDetails = ({ nome, idade, profissao }) => {
  return (
    <div>
        <h2>Desafio 4: Pessoas</h2>
        <ul>
            <li>Nome: {nome}</li>
            <li>Idade: {idade} </li>
            <li>Profissão: {profissao}</li>
            <li>Pode tirar carteira de habilitação? 
                
                { idade >= 18 ? (
                <p>SIM</p>
                ) : (
                <p>NÃO</p>
                )}

            </li>
        </ul>
    </div>
  )
}

export default UserDetails