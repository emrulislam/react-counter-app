import { useState } from "react"
import "./Counter.css";
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
 
  return (
    <div className="counter-container">
      <h1>Counter App</h1>
      <h2 className="count">{count}</h2>
      <div className="button-group">
        <button className="btn add" onClick={handleAdd}>➕ Add</button>
        <button className="btn subtract" onClick={handleSubtract}>➖ Subtract</button>
        <button className="btn reset" onClick={handleReset}>🔄 Reset</button>
      </div>
    </div>
  );
}
}