import React, { useEffect } from 'react'

function Trial() {

function delay(){
    for(let i=0;i<10;i++){
        console.log(i)
    }
}

function handleClick(){
    console.log("Hi")
}

useEffect(()=>{
    console.log("useEffect Thing")
})



  return (
    <div>
        <button onClick={handleClick}></button>
    </div>
  )
}

export default Trial

