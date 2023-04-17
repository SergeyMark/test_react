import { useState, useEffect } from "react"

export const Counter = () => {
    const [counterPlus, setCounterPlus] = useState(0);
    const [counterMinus, setCounterMinus] = useState(0); 

    
    function handleCounterIncrementP(){
        function incrementPlus(prevState) {
            return prevState + 1;
        }

        return setCounterPlus(incrementPlus)
    }

    function handleCounterIncrementM(){
        function incrementMinus(prevState) {
            return prevState + 1;
        }

        return setCounterMinus(incrementMinus)
    }
    
    useEffect(()=>{
        const total = counterPlus + counterMinus;
        document.title = `клики ${total}`
    }, [counterMinus, counterPlus])

    return(
        <div>
            <button type="button" onClick={handleCounterIncrementP}>plus {counterPlus}</button>
            <button type="button" onClick={handleCounterIncrementM}>minus {counterMinus}</button>
        </div>
    )
}













  
    // функция handleCounterIncrement короткая версия

    // const handleCounterIncrement = () => {
    //     setCounterPlus(prevState => prevState + 1)
    // }

    // функция handleCounterIncrement длинная версия

    // function handleCounterIncrementM(){
    //     function incrementMinus(prevState) {
    //         return prevState - 1;
    //     }

    //     return setCounterMinus(incrementMinus)
    // }    