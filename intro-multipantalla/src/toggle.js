function Toggle(props){
    return (
        <button className={props.className} onClick={props.onToggleClick}>{props.text}</button>
    )
}

export default Toggle;