import { useState } from 'react'

import './App.css'
import Addtodo from './component/Addtodo'
import Todo from './component/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Addtodo/>
      <Todo/>
      
    </>
  )
}

export default App
