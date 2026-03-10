import { useContext } from "react"
import {CounterContext} from '../contexts/CounterContext.js'
import { UserContext } from "../contexts/UserContext.js"
import { useTest } from "../store/TestStore.js";

function B() {

  const x = useTest(state => state.x);
  let incrementX = useTest(state => state.incrementX)
  let decrementX = useTest(state => state.decrementX)
  

  // let {counter1, changeCounter1} = useContext(CounterContext)
  let {user, updateUser} = useContext(UserContext)

  return (
    <div className='text-center shadow-2xl p-10'>
        <p className='text-3xl'>Component B</p>
        <p className='text-2xl mt-10'>X: {x}</p>
        <p className='text-2xl mt-10'>User: {user.age}</p>
        <button onClick={incrementX} className="bg-blue-400 p-2 mt-10">Increment X</button>
        <button onClick={decrementX} className="bg-blue-400 p-2 mt-10">Decrement X</button>
        <button onClick={updateUser} className="bg-blue-400 p-2 mt-10">Update User</button>
    </div>
  )
}

export default B