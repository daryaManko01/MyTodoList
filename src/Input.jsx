const Input = (props) => {
    const {
        type,
        placeholder,
        setTable,
    } = props;


    function handleInputTable() {
        setTable((value) => [...value, {name: "Никита", price: 55}])
    }

    return (
        <input
            type={type}
            placeholder={placeholder}
            onChange={handleInputTable}
        >
        </input>
    )
}

export default Input;

