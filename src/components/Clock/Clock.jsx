import { useState, useEffect, useRef } from "react";

export default function Clock(){
    const [ time, setTime ] = useState(() => new Date());

    const intervalId = useRef(null);

    useEffect(() => {
        intervalId.current = setInterval(() => {
            setTime(new Date());
        }, 1000);
    }, []);

    const stop = () => {
        clearInterval(intervalId.current)
    };

    return(
        <div>
            <h1>Hello Clock</h1>
            <p>date now:{time.toLocaleTimeString()}</p>
            <button type="button" onClick={stop}>stop</button>
        </div>
    );
}