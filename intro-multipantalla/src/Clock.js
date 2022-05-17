import { useEffect, useState } from "react";


function Clock(props){
    // Creo estado de date
    const [date, setDate] = useState(new Date());
    // 
    useEffect(() =>{
        // Función que setea la fecha y hora en el estado del componente
        function tick(){
            setDate(new Date());
        }
        // Timer llama a la función tick() cada un segundo siempre y cuando este activada la bandera de tick
        const timerId = setInterval(()=>{
            if(props.tick) tick();
        }, 1000);
        
        return () => clearInterval(timerId);
    },[props.tick])

    return(
        <h2>{date.toLocaleTimeString()}</h2>
    );
}

export default Clock;