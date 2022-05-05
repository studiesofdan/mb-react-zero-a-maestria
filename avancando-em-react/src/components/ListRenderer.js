import React, { useState } from 'react'

const ListRenderer = () => {
    const [list] = useState(["Rihanna", "Taylor Swift", "Harry Styles", "HAIM"]);

  return (
    <div>
        <ul>
            {list.map((item) => (
                <li>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default ListRenderer