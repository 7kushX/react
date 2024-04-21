import React, { useContext, useState } from 'react'
import Usercontext from '../context/Usercontext'
function Login() {
    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('')

    const {setuser}= useContext(Usercontext) 

    const handlesubmit = (e)=>{
           e.preventDefault()
           setuser({Username, Password})
    }

  return (
    <div>

        <h2>Login</h2>
        <input type='text'
        value={Username}
        onChange={(e)=> setUsername(e.target.value)}
        placeholder='user'
        /> 
         <input type='text'
        value={Password}
        onChange={(e)=> setPassword(e.target.value)}
        placeholder='password'
        />
        <button onClick={handlesubmit}>Submit</button> 

    </div>
  )
}

export default Login