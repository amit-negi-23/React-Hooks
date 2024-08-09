import React, { useState, useMemo } from 'react'

export default function Learning_useMemo() {
    const [countA, setCountA] = useState(0)
    const [countB, setCountB] = useState(0)

    const handleCountA = () => {
        setCountA(countA + 1)
    }

    const handleCountB = () => {
        setCountB(countB + 1)
    }

    const isEven = useMemo(() =>{
        let i = 0
        while(i<1000000000){
            i++
        }
        console.log("Expensive Task running..")
     return   countA % 2 ==0
    }, [countA])
    
  return (
    <div>
        <h2>  {countA} </h2>
        <button onClick={handleCountA}>Count A :</button>
        <span style={{color:"red"}}>{isEven ? ' even' : ' Odd'}</span>

        <h2> {countB} </h2>
        <button onClick={handleCountB}>Count B : </button>
    </div>
  )
}
