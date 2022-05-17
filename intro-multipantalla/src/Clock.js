import { useEffect, useState } from "react";


function Clock(props){
    const [date, setDate] = useState(new Date());
    useEffect(() =>{
        function tick(){
            setDate(new Date());
        }

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