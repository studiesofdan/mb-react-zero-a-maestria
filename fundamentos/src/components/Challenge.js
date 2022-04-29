const Challenge = () => {
    const sol = 1;
    const lua = 3;

    return (
        <div>
            <div>{sol}</div>
            <br />
            <button onClick={() => console.log(sol + lua)}>Some sol e lua</button>
        </div>
    )
}

export default Challenge