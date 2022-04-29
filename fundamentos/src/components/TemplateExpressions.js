const TemplateExpressions = () => {
    const name = "Dan"
    const data = {
        age: 31,
        job: "Java Developer",
    }

    return (
        <div>
             <h2>Olá {name}, tudo bem?</h2>
             <p>Idade: {data.age}</p>
             <p>Você atua como: {data.job}</p>
        </div>
    )
}

export default TemplateExpressions