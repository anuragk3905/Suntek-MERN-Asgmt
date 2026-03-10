import { useState } from "react";

function StateDemo(){
    let [counter, setCounter] = useState(0);
    let [marks, setMarks] = useState([1,2]);
    let [user, setUser] = useState({email: "abc@def.com", age: 21})

    const incrementCount = () =>{
        setCounter(prev=>prev+1);
        setCounter(prev=>prev+1);
        setCounter(prev=>prev+1);
    }
    const decrementCount = () =>{
        let newCounter = counter-1;
        setCounter(newCounter);
    }
    const reset = () =>{
        setCounter(0);
    }

    const addMarks = ()=>{
        setMarks([...marks,123])
    }

    const updateUser = ()=>{
        setUser({...user, city: "Hyd"})
    }

    const addInBetween = () => {
        let newMarks = [...marks]
        newMarks.splice(1, 0, 50)
        setMarks(newMarks)
    }

    const deleteLast = () => {
        let newMarks = [...marks]
        newMarks.pop()
        setMarks(newMarks)
    }

    const deleteAtIndex = (index) => {
        let result = marks.filter((_,i)=>i!=index)
        setMarks(result)
    }

    const deleteProperty = ()=>{
        let {age, ...rest} = user;
        setUser(rest);
    }


    return(
        <div>
            <p className="text-4xl mt-10">Counter: {counter}</p>
            <button onClick={incrementCount} className="bg-blue-300 px-5 py-2 mt-5 m-3">+</button>
            <button onClick={decrementCount} className="bg-blue-300 px-5 py-2 mt-5 m-3">-</button>
            <button onClick={reset} className="bg-red-600 px-5 py-2 mt-5 m-3">Reset</button>

            <h1>Marks</h1>
            {
                marks.map((m,index)=><p key={index}> {m} </p>)
            }
            <button onClick={addMarks} className="bg-amber-400 px-5 py-2 mt-5 m-3">Add marks</button>
            <button onClick={addInBetween} className="bg-amber-400 px-5 py-2 mt-5 m-3">Add marks in between</button>
            <button onClick={deleteLast} className="bg-amber-400 px-5 py-2 mt-5 m-3">Delete marks from last</button>
            <button onClick={()=>deleteAtIndex(2)} className="bg-amber-400 px-5 py-2 mt-5 m-3">Delete marks at index</button>

            <h1>User</h1>
            {
                Object.values(user).map((v,index)=><p key={index}>{v}</p>)
            }
            <button onClick={updateUser} className="bg-amber-400 px-5 py-2 mt-5 m-3">Add property</button>
            <button onClick={deleteProperty} className="bg-amber-400 px-5 py-2 mt-5 m-3">Delete property</button>
        </div>
    )
}

export default StateDemo;