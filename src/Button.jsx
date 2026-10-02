const Button = (props) => {

    const {
        text,
        style,
        setTable
    } = props

    function handleClick() {
        setTable([])
    }

    return (
        <button
            className={style} onClick={handleClick}>
        >{text}
        </button>
    )
}

export default Button;