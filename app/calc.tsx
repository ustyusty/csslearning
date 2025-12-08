"use client"
import { useState } from "react"

export default function Home() {
  const [count, setCount] = useState(0)

  const plus = (num:number) => {
    if (num==0){
      setCount(0)
    }
    else{setCount(count+num)}
  }

  return (
    <>
      <div className="flex justify-center min-h-screen items-center">
        <div className="flex flex-col border border-white p-4 gap-4 rounded-lg">
        <div className="flex border border-white justify-end px-1.5 py-0.5 rounded-md">
          <Display n={count}/>
        </div>
          {<Numpad n={count} setCount={(count) => {plus(count)}}/>}
        </div>
      </div>
    </>
  )
}



function Numpad({setCount}:{n: number, setCount:(param: number)=> void}){
  return(
    <div className="grid grid-cols-5 gap-2">
      <Butn text={1} func={() => {setCount(1)}}/>
      <Butn text={2} func={() => {setCount(2)}}/>
      <Butn text={3} func={() => {setCount(3)}}/>
      <Butn text={4} func={() => {setCount(4)}}/>
      <Butn text={5} func={() => {setCount(5)}}/>
      <Butn text={6} func={() => {setCount(6)}}/>
      <Butn text={7} func={() => {setCount(7)}}/>
      <Butn text={8} func={() => {setCount(8)}}/>
      <Butn text={9} func={() => {setCount(9)}}/>
      <Butn text={0} func={() => {setCount(0)}}/>
    </div>
  )
}


function Butn({text, func}:{text: number, func:(param: number) => void}){
  return(  
  <div>
      <button className="border-gray-300 border rounded-xl h-15 w-15"
        onClick={() =>{
          func(+text)}}>
        <div>
          {text}
        </div>
      </button>
  </div>
)
}

function Display({ n }: { n: number }) {
  return <p className="font-mono">{n}</p>
}