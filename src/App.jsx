import React, { useState } from 'react'

function App() {
  
  const [task, settask] = useState("")
  const [date, setdate] = useState("")
  const [time, settime] = useState("")
  const [mainTask, setmainTask] = useState([])

  const addHandler = (e)=>{
    e.preventDefault()
    setmainTask([...mainTask, {task,date,time}])
    settask("")
    setdate("")
    settime("")

  }


  return (
    <div className='container mt-5'>
      <form>
     <div class="mb-3">
    <label for="text" class="form-label">Enter Your Task</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={task} onChange={(e)=>{
       settask(e.target.value)
    }} />
    </div>
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Enter Your Task</label>
    <input type="date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={date} onChange={(e)=>{
       setdate(e.target.value)
    }} />
    </div>
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Enter Your Task</label>
    <input type="time" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={time} onChange={(e)=>{
      settime(e.target.value)
    }} />
    </div>
    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
  
  {/* <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" />
  </div> */}
  {/* <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div> */}
  <button onClick={addHandler} type="submit" class="btn btn-primary">Add Task</button>
</form>
<hr />
<div className='container'>
  <div className='d-flex justify-content-around'>
    <h3>Task</h3>
    <h3>Date</h3>
    <h3>Time</h3>
  </div>
 {mainTask.map((t,i)=>{
  return <div className='d-flex justify-content-around'>
    <h5>{t.task}</h5>
    <h5>{t.date}</h5>
    <h5>{t.time}</h5>

  </div>
 })

 } 
 
</div>
</div>
  )
}


export default App