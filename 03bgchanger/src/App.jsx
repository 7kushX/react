import { useState } from 'react'


function App() {
  const [color, setcolor] = useState("olive")
 
 

  return (
    <>
    <div className='w-full h-screen duration-200 ' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg ' style={{backgroundColor:"red"}} onClick={function (){setcolor("red")} }>Red</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg ' style={{backgroundColor:"green"}} onClick={function (){setcolor("green")}} >green</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg ' style={{backgroundColor:"blue"}} onClick={function (){setcolor("blue")}} >blue</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg ' style={{backgroundColor:"yellow"}} onClick={function (){setcolor("yellow")} }>yellow</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg ' style={{backgroundColor:"pink"}} onClick={function (){setcolor("pink")}} >pink</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg ' style={{backgroundColor:"purple"}} onClick={function (){setcolor("purple")}} >purple</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg ' style={{backgroundColor:"orange"}} onClick={function (){setcolor("orange")} }>orange</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg ' style={{backgroundColor:"olive"}} onClick={function (){setcolor("olive")}} >olive</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg ' style={{backgroundColor:"silver"}} onClick={function (){setcolor("silver")}} >silver</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg ' style={{backgroundColor:"black"}} onClick={function (){setcolor("black")}} >black</button>
        </div>

      </div>
    </div>
       
    </>
  )
}

export default App
