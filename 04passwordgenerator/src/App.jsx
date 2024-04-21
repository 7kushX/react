import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  const [Length, setLength] = useState(8)
  const [Number, setNumber] = useState(false)
  const [Character, setCharacter] = useState(false)
  const [Password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(function () {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTabcdefghijklmnopqrstuvwxyz"
    if (Number) str += "1234567890"
    if (Character) str += "!@#$%^&*()><~`"
    for (let i = 1; i <= Length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      

    }
    setPassword(pass)
  }, [Length, Number, Character, setPassword])

  const copyPwClip = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,5);
    window.navigator.clipboard.writeText(Password)
  }, [Password])

  useEffect(()=>{
    passwordGenerator()
},[Length,Number, Character,passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-7 py-3 my-8 text-orange-500  bg-slate-300 '>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 '>
          <input type="text"
            value={Password}
            className='outline-none w-full py-1 px-3 '
            placeholder='password'
            readOnly
            ref={passwordRef}
            />
          <button className='outline-none bg-blue-500 text-slate-50 px-3 py-1 shrink-0'
          onClick={copyPwClip}
          >copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={6}
              max={100}
              value={Length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length:{Length}</label>
          </div>
          <div className='flex text-sm gap-x-2'>
            <input
              type="checkbox"
              defaultChecked={Number}
              id='numberInput'
              onChange={() => {
                setNumber((p) => !p);
              }}
            />
            <label htmlFor="">Number</label>
          </div>
          <div className='flex text-sm gap-x-2' >
            <input
              type="checkbox"
              defaultChecked={Character}
              id='characterInput'
              onChange={() => {
                setCharacter((p) => !p);
              }}
            />
            <label >Character</label>
          </div>


        </div>

      </div>
    </>
  )
}

export default App
