function handleSubmit(event) {
    console.log("Submitted the Form.");
    event.preventDefault();
}

function Form() {
    return (
        <form onSubmit={handleSubmit}>
<button>Submit</button>
        </form>
    )
}

export default Form;