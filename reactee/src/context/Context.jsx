

import { createContext, useState } from "react";

export const Userc = createContext(null)



export default function UserProvider({children}){
const [auth ,setauth] =useState({})
return(

<Userc.Provider value={{auth,setauth}} >

{children}

</Userc.Provider>

)

    
}