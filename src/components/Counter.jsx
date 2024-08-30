import React, { useEffect, useState } from 'react'

export default function Counter() {
    const [counter, setCounter]=useState(0);
    const [counter2, setCounter2]=useState(0);
    useEffect(()=>{
        console.log(counter)
        console.log(counter2)
    },[counter])
    const increasCounter =()=>{
        setCounter(counter+1);
    }
    const decreasCounter =()=>{
        if(counter !== 0){
            setCounter(counter-1);

        }
        else{
            return
        }
        
    }
    const increasCounter2 =()=>{
        setCounter2(counter2+1);
    }
    const decreasCounter2 =()=>{
        if(counter2 !== 0){
            setCounter2(counter2-1);

        }
        else{
            return
        }
        
    }
    return (
    <div>
        <button onClick={increasCounter}>+</button>
        <button onClick={decreasCounter}>-</button>
        <h1>{counter}</h1>
        <br/>
        <button onClick={increasCounter2}>+</button>
        <button onClick={decreasCounter2}>-</button>
        <h1>{counter2}</h1>
    </div>
  )
}
