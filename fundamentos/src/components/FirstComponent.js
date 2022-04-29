import HierarquiaComponent from "./HierarquiaComponent"

// Pode ser feito comentários fora da estrutura do JS, pois o componente é um arquivo JS
const FirstComponent = () => {
    return (
        <div>
            {/* Comentário na sintaxe do JSX */}
            <h1>Meu primeiro componenteee</h1>
            <HierarquiaComponent />
        </div>
    )
}

export default FirstComponent