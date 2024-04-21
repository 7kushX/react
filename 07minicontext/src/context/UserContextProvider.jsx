import React, { useState } from "react";
import Usercontext from "./Usercontext";

const UserContextProvider = ({children}) => {
       
    const [User , setuser ] = useState(null)

    return(
        <Usercontext.Provider value={{User, setuser}}>
        {children}
        </Usercontext.Provider>
       )
}

export default UserContextProvider;