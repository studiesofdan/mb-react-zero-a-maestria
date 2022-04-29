const Eventos = () => {

    const handleMyEvent = (e) => {
        console.log(e);
        console.log("Ativou o evento!")
    };

    const renderizeAlgo = (xanis) => {
        if (xanis) {
            return <h1>"G-G-G de gatiiiiiiiiiiiiiiiiiiiiin"</h1>;
        } else {
            return <h1>Tuts tuts, quero ver</h1>
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
                <br />
                <button onClick={() => console.log("Este é um botão com função no evento")}>Evento</button>
            </div>
            {renderizeAlgo(true)}
            {renderizeAlgo(false)}
        </div>
    )
}

export default Eventos