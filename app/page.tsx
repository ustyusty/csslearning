"use client"
import { useState } from "react"

export default function Home() {
  const [text, setCount] = useState("")

  const plus = (char: string) => {
    {setCount(prev => prev + char)}
  }
  const send =() =>{
    console.log(text)
    setCount('')
  }
  
  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-linear-120 from-slate-900 to-cyan-950">
      <div className="w-full max-w-sm space-y-6 p-5 rounded-xl bg-gray-900">
        <div className="flex items-center flex-row gap-3 h-10">
          <div className="w-full text-end px-1.5 pt-0.5 rounded-md overflow-hidden bg-gray-800 text-gray-200">
            <Display text={text} setCount={(text) => setCount(text)}/>
          </div>
          <div className="gap-2 py-5">
            <SendBtn func={() => {send()}}/>
          </div>
        </div>
        <div className="container justify-center gap-4 rounded-lg w-auto animate-fadeIn">
          {<Numpad n={text} add={(text) => {plus(text)}}/>}
        </div>
      </div>
    </div>
    </div>
  )
}

function SendBtn({func}:{func:(param: void) => void}){
  return(
    <div>
      <button className="
        rounded-lg
        text-gray-200
        bg-gray-800
        hover:bg-blue-200/15
        active:bg-gray-100/15
        active:scale-90
        transition-colors
        duration-100"
      onClick={() => {func()}}
      ><div className="flex min-w-15 flex-col items-center px-1.5 py-0.5 rounded-md ">{"->"}</div>
      </button>
    </div>
  )
}


function Numpad({add}:{n: string, add:(param: string)=> void}){
  return(
    <div className="grid grid-cols-5 gap-3">
      <Butn text={1} func={() => {add("1")}}/>
      <Butn text={2} func={() => {add("2")}}/>
      <Butn text={3} func={() => {add("3")}}/>
      <Butn text={4} func={() => {add("4")}}/>
      <Butn text={5} func={() => {add("5")}}/>
      <Butn text={6} func={() => {add("6")}}/>
      <Butn text={7} func={() => {add("7")}}/>
      <Butn text={8} func={() => {add("8")}}/>
      <Butn text={9} func={() => {add("9")}}/>
      <Butn text={0} func={() => {add("0")}}/>
    </div>
  )
}


function Butn({text, func}:{text: number, func:(param: number) => void}){
  return(  
  <div>
      <button className=" h-15 w-15 
                rounded-lg
        bg-gray-800
        text-gray-200
        hover:bg-blue-200/15
        hover:border-white
        active:bg-gray-100/15
        active:scale-90
        transition-colors
        duration-100"
        onClick={() =>{
          func(text)}}>
        <div>
          {text}
        </div>
      </button>
  </div>
)
}

function Display({ text , setCount}: { text: string , setCount:((param: string)=>void)}) {
  return <input type="text" className="w-full text-end focus:outline-none font-mono" value={text} onChange={(e) =>{setCount(e.target.value.replace(/[^0-9]/g, ''))}}></input>
}