import React from 'react'
import { useParams, Link } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

const Paises = () => {
    // 4 - rota dinâmica
    const { id } = useParams();
    
    // 5 - carregamento dado individual
    const url = "http://localhost:3000/paises/" + id;
    const { data: paises, loading, error } = useFetch(url);

    console.log(paises);

    return (
    <>
        <p>ID do país: {id}</p>
        {error && <p>Erro ao carregr dados</p>}
        {loading && <p>Carregando...</p>}
        {paises && (
            <div>
                <h1>{paises.pais}</h1>
                <p>{paises.sigla}</p>
                {/* 6 - nested routes */}
                <Link to={`/paises/${paises.id}/info`}>Mais informações</Link>
            </div>
        )}
    </>
    )
}

export default Paises