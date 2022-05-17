import { useEffect, useState } from "react";


function Clock(){
    const [date, setDate] = useState(new Date());
    useEffect(() =>{
        function tick(){
            setDate(new Date());
        }

        const timerId = setInterval(()=>{
            tick();
        }, 1000);
        
        return () => clearInterval(timerId);
    })

    return(
        <h2>{date.toLocaleTimeString()}</h2>
    );
}

export default Clock;