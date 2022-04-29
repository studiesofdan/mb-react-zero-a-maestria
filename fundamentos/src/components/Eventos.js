const Eventos = () => {

    const handleMyEvent = (e) => {
        console.log(e);
        console.log("Ativou o evento!")
    };

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
                <br />
                <button onClick={() => console.log("Este é um botão com função no evento")}>Evento</button>
            </div>
        </div>
    )
}

export default Eventos