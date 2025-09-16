import { useState } from "react"
export default function Counter(){
    const[count,setCount]=useState(0)
    const handleAdd =()=>{
        const updatedCount=count +1
        setCount(updatedCount)
    }
    const handleSubtract=()=>{
        if(count===0){
            alert("!!! Negative value !!!")
            return;
        }
        const updatedCount=count -1
        setCount(updatedCount)
    }
    const handleReset =()=>{
        const updatedCount=0
        setCount(updatedCount)
    }
    return(
        <div>
            <h3>Count:{count}</h3>
            <button onClick={handleAdd}>Add ➕ </button>
            <button onClick={handleSubtract}>Subtract ➖ </button>
            <button onClick={handleReset}>Reset 🔄 </button>
        </div>
    )
}