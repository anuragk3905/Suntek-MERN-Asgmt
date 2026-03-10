

function TasksList({tasks}) {
  return (
    <div>
        <h3 className="text-4xl text-amber-400 mb-3">List of Tasks</h3>
        {
        tasks.length===0 ? <p className="text-3xl text-red-500">Empty</p> : (
            tasks.map((taskObj,index)=><p key={index} className="text-2xl">{taskObj.taskName}</p>)
        )
        }
        
    </div>
  )
}

export default TasksList