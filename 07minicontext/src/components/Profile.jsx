import React,{useContext} from 'react'
import Usercontext from '../context/Usercontext'
function Profile() {
    const {User}= useContext(Usercontext) 

    if(!User) return <div>plz login</div>

  return (
    <div>Welcome {User.Username}</div>
  )
  
}

export default Profile