import React from 'react'
import { useParams } from 'react-router-dom';

const Paises = () => {
    // 4 - rota dinâmica
    const { id } = useParams();
    
    return (
    <>
        <p>ID do país: {id}</p>
    </>
    )
}

export default Paises