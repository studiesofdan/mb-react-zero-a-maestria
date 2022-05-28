import { useSearchParams, Link } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"

const Search = () => {
    const [searchParams] = useSearchParams()
    const url = "http://locallhost:3000/paises?" + searchParams;
    const {data: paises, loading, error} = useFetch(url)

  return (
    <div>
        <h1>Resultados disponíveis</h1>
        <ul className="country">
            {paises && paises.map(country => (
            <li key={country.id}>
                <h2>{country.pais}</h2>
                <p>{country.sigla}</p>
                <Link to={`/paises/${country.id}`}>Detalhes</Link>
            </li>
            ))}
        </ul>
    </div>
  )
}

export default Search