import React, { useState } from 'react';

function App() {
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [updateBtn, setUpdateBtn] = useState(false);
  const [mainTask, setMainTask] = useState([]);
  const [updateIndex, setUpdateIndex] = useState(null);

  const addHandler = (e) => {
    e.preventDefault();
    if (updateBtn) {
      // If update mode is active, update the task at the specified index
      const updatedTasks = [...mainTask];
      updatedTasks[updateIndex] = { task, date, time };
      setMainTask(updatedTasks);
      setTask('');
      setDate('');
      setTime('');
      setUpdateBtn(false);
      setUpdateIndex(null);
    } else {
      // Otherwise, add a new task

      setMainTask([...mainTask, { task, date, time }]);
      setTask('');
      setDate('');
      setTime('');
    }
  };

  const del = (i) => {
    const data = mainTask.filter((item, index) => i !== index);
    setMainTask([...data]);
  };

  const update = (i) => {
    const data = mainTask.filter((item, index) => i === index);
    data.map((item) => {
      setTask(item.task);
      setDate(item.date);
      setTime(item.time);
    });
    setUpdateBtn(true);
    setUpdateIndex(i);
  };

  return (
    <div className='container mt-5'>
      <form>
        <div className='mb-3'>
          <label htmlFor='task' className='form-label'>
            Enter Your Task
          </label>
          <input
            type='text'
            className='form-control'
            id='task'
            aria-describedby='emailHelp'
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='date' className='form-label'>
            Enter Date
          </label>
          <input
            type='date'
            className='form-control'
            id='date'
            aria-describedby='emailHelp'
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='time' className='form-label'>
            Enter Time
          </label>
          <input
            type='time'
            className='form-control'
            id='time'
            aria-describedby='emailHelp'
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />
        </div>

        {updateBtn ? (
          <button
            onClick={addHandler}
            style={{
              borderRadius: '6px',
              backgroundColor: 'green',
              color: 'white',
              border: 'none',
            }}
          >
            Update
          </button>
        ) : (
          <button
            onClick={addHandler}
            type='submit'
            className='btn btn-primary'
          >
            Add Task
          </button>
        )}
      </form>
      <hr />
      <div className='container'>
       
        <table class="table">
                  <thead>
                    <tr>
                    <th scope="col">Task no</th>
                      <th scope="col">Task</th>
                      <th scope="col">Date</th>
                      <th scope="col">Time</th>
                      <th scope="col">Action</th>
                    </tr>
                </thead>
        {mainTask.map((t, i) => {
          return (
          
          <tbody className='mb-4' key={i}>
            <tr>
              <th scope="row">1</th>
              <td>{t.task}</td>
              <td>{t.date}</td>
              <td>{t.time}</td>
              <td>
              <button
                 className='btn btn-outline-danger me-4 btnmb'
                  onClick={() => del(i)}
                  style={{
                    borderRadius: '6px',
                    backgroundColor: 'red',
                    color: 'white',
                    border: 'none',
                  }}
                >
                  Delete
              </button>
              <button
                  className='btn btn-outline-success'
                  onClick={() => update(i)}
                  style={{
                    borderRadius: '6px',
                    backgroundColor: 'green',
                    color: 'white',
                    border: 'none',
                  }}
                >
                  Update
                </button>
                
              </td>
            </tr>
    
          
          </tbody>
         
          
          );
        })}
      </table> 
    </div>
    </div>
  );
}

export default App;