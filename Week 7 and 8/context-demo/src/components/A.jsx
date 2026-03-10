import { useContext } from "react"
import {CounterContext} from '../contexts/CounterContext.js'
import { UserContext } from "../contexts/UserContext.js"

function A() {

    // let {counter1, changeCounter1} = useContext(CounterContext)
    let {user, updateUser} = useContext(UserContext)

  return (
    <div className='text-center shadow-2xl p-10'>
        <p className='text-3xl'>Component A</p>
        <p className='text-2xl mt-10'>User: {user.age} </p>
        <button onClick={updateUser} className="bg-blue-400 p-2 mt-10">Update User</button>
    </div>
  )
}

export default A