import { useContext } from "react"
import {CounterContext} from '../contexts/CounterContext.js'
import { UserContext } from "../contexts/UserContext.js"
import { useTest } from "../store/TestStore.js"

function C() {

  const y = useTest(state => state.y);
  let incrementY = useTest(state => state.incrementY)
  const user = useTest(state => state.user);
  let updateUser = useTest(state => state.updateUser)

  // let {counter1, changeCounter1} = useContext(CounterContext)
  // let {user, updateUser} = useContext(UserContext)

  return (
    <div className='text-center shadow-2xl p-10'>
        <p className='text-3xl'>Component C</p>
        <p className='text-2xl mt-10'>Y: {y}</p>
        <p className='text-2xl mt-10'>Name: {user.name}</p>
        <p className='text-2xl mt-10'>Age: {user.age}</p>
        {/* <p className='text-2xl mt-10'>User: {user.age}</p> */}
        <button onClick={()=>updateUser("ravi")} className="bg-blue-400 p-2 mt-10">Update User</button>
        <button onClick={incrementY} className="bg-blue-400 p-2 mt-10">Increment Y</button>
        {/* <button onClick={updateUser} className="bg-blue-400 p-2 mt-10">Update User</button> */}
    </div>
  )
}

export default C