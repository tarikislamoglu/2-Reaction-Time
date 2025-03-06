import React, {useState } from 'react'

const App = () => {
  const [gameStarted,setGameStarted] =useState(false)
  const [color,setColor] =useState("red")
  const [reactionTime,setReactionTime] =useState(null)
  const [msg,setMsg]=useState("")
  const[startTime,setStartTime]=useState(null)
  const[waiting,setWaiting]=useState(false)
  
  const startClick=()=>{
    setReactionTime(null)
    setStartTime(null)
    setColor("red")
    setMsg("")
    setWaiting(false)
    const waitingSeconds=Math.floor(Math.random() * 6000) +1000
    setGameStarted(true)
      setTimeout(()=>{
        setColor("green")
        setStartTime(Date.now())
        setWaiting(true)
      },waitingSeconds)    
      
  }

  const handleBoxClick=()=>{ 
    if(!waiting){
      setMsg("You clicked too early")
    }else{
      const reactionDuration=Date.now() -startTime;
      setReactionTime(reactionDuration)
      setWaiting(false)
    }
    setGameStarted(false)
    
   

  }
  
  return (
    <div>
      <h1>Reaction Time Game</h1>
        {!gameStarted ? <button onClick={startClick}>Start Game</button>
        : <div onClick={handleBoxClick} style={{width:"150px",height:"150px",backgroundColor: color}}></div> 
      }    
      <p>{msg}</p>
      { reactionTime !== null && 
        <p>Your reaction time : {reactionTime} ms</p>
      }
    </div>
  )
  
}

export default App