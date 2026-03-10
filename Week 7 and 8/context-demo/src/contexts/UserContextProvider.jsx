import { UserContext } from './UserContext'
import { useState } from 'react'

function UserContextProvider({children}) {
    //state
    const [user, setUser] = useState({name: "ravi", age: 20, email: "ravi@mail.com"})
    // modify state
    const updateUser = ()=>{
        setUser({...user, age: 30})
    }

    return (
        <UserContext.Provider value={{user, updateUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider