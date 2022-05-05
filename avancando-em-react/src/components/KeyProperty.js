import React, { useState } from 'react'

const KeyProperty = () => {
    const [list] = useState(["Marina Sena", "Jão", "The Aces", "Selena Gomez"]);

    const [users] = useState([
        {id: 1, name: "Matheus", age: 31},
        {id: 13, name: "João", age: 21},
        {id: 80, name: "Pedro", age: 50},
    ]);

  return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>

        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name} - {user.age}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default KeyProperty
