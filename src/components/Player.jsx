import { useState } from "react"

export default function Player({name, symbol, buttonValue, isActive}){
    const[isEditing, setIsEditing] = useState(false);
    const[n,setName] = useState(name)

    function handleSave(){
        setIsEditing(false);
    }
    function handleChange(event){
        setName(event.target.value)
    }
    
    return(
        <li className={isActive? 'active': undefined}>
        <span className="player">
        { isEditing ? <input type="text" required value={n} onChange={handleChange}/>:
        <span className="player-name" onClick={() => setIsEditing(true)}>
        {n}</span>
        }
        <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleSave}>{isEditing? "Save" :buttonValue}</button>
        </li>
    )
}