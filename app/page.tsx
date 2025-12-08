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
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-950">
      <div className="w-full max-w-sm space-y-6 border border-white p-5 rounded-xl">
        <div className="flex items-center flex-row gap-2">
          <div className="w-full border border-white text-end px-1.5 pt-0.5 rounded-md overflow-hidden">
            <Display text={text} setCount={(text) => setCount(text)}/>
          </div>
          <div className="gap-2 py-5">
            <SendBtn func={() => {send()}}/>
          </div>
        </div>
        <div className="container justify-center  gap-4 rounded-lg w-auto animate-fadeIn">
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
      group
        border rounded-xl
        hover:bg-black
        hover:border-gray-300 
        active:bg-gray-100/15
        active:scale-90
        transition-colors
        duration-200"
      onClick={() => {func()}}
      ><div className="flex border min-w-15 flex-col items-center px-1.5 py-0.5 rounded-md ">{"->"}</div>
      </button>
    </div>
  )
}


function Numpad({add}:{n: string, add:(param: string)=> void}){
  return(
    <div className="grid grid-cols-5 gap-2">
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
        border rounded-xl
        hover:bg-black
        hover:border-gray-300 
        active:bg-gray-100/15
        active:scale-90
        transition-colors
        duration-200"
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