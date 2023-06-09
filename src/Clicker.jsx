function handleClick() {
    console.log("Clicked the button");
}

function Clicker() {
    return (
        <button onClick={handleClick}>Click Me</button>
    )
}

export default Clicker;