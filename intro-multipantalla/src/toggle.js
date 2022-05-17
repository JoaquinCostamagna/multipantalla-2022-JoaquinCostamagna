function Toggle(props){
    return (
        <button onClick={props.onToggleClick}>{props.text}</button>
    )
}

export default Toggle;