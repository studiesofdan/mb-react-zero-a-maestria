import React, { useState } from 'react'

const PreviousState = () => {
    const [users, setUsers] = useState([
        {id: 1, name: "Rita Ora", age: 31},
        {id: 2, name: "SHAKIRA", age: 45},
        {id: 3, name: "Karol G", age: 32},
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            console.log(prevUsers);
            return prevUsers.filter((user) => randomNumber !== user.id);
        });
    }

  return (
    <div>
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name} - {user.age}
                </li>
            ))}
        </ul>

        <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default PreviousState
