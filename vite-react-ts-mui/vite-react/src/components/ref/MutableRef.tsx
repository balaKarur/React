import {useState, useRef, useEffect} from "react";

export const MutableRef = () => {
    const [timer, setTimer] = useState(0);
    const interValRef = useRef<number>(null!);
    function stopTimer(){
        window.clearInterval(interValRef.current);
    }
    useEffect(() => {
        interValRef.current = window.setInterval(() => {
            setTimer((timer) => timer+1)
        },1000)
        //when component unmount the timer will be cleared
        return () => {
            stopTimer();
        }
    },[timer]/**optional initial value */)
    return (
        <div>
              HookTimer -{timer} - 
              <button onClick={() => stopTimer()}>Stop timer</button>
        </div>
    )
}