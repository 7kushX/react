import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Card name="Kushagra" position="Director"/>
      <Card name="sai ram" position="CEO"/>
    </>
  )
}

export default App
