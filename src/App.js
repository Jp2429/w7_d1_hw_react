import logo from './logo.svg';
import './App.css';
import {useState} from 'react'



function App() {
  const [todoList,setTodoList]=useState([
    {id:1,task_name:"Clean Room",priority:"High"},
    {id:2,task_name:"Buy Shopping",priority:"Low"},
    {id:3,task_name:"Car's MOT",priority:"High"}
  ])
  const [taskPriority,setTaskPriority]=useState("")
  const [taskName,setTaskName]=useState("")

  const handlePriority=(event)=>{
    setTaskPriority(event.target.value)
  }

  const handleUserInput=(event)=>{
    setTaskName(event.target.value)
  }

  function addToList(event){
    if(taskName!==""&&taskPriority!==""){
      event.preventDefault();
      const newTaskObj = { id: Date.now(), task_name:taskName,priority:taskPriority  };
      const copyOfList=[...todoList,newTaskObj]
      setTodoList(copyOfList)
      setTaskName("")
      setTaskPriority("")
      resetForm()
    }else{
      event.preventDefault();
    }
  }

  const resetForm=()=>{
    const taskInput=document.querySelector('#tasks')
    taskInput.value=""
    const taskHighPriority=document.querySelector('#high-priority')
    taskHighPriority.checked=false
    const taskLowPriority=document.querySelector('#low-priority')
    taskLowPriority.checked=false
  }

  const completeTodo=(id)=>{
    const nextTodos=todoList.filter(todo=>todo.id!==id)
    setTodoList(nextTodos)
  }

  const listItems = todoList.map((task) => {
    return (
      <li key={task.id}>
        <span>{task.task_name}</span><br></br>
        {task.priority==="High" ? <span id="high-prior-span">{task.priority} Priority!!!</span>:<span id="low-prior-span">{task.priority} Priority</span>}<br></br>
        <button className="complete-button" onClick={()=>completeTodo(task.id)}>Complete</button>
        
      </li>
    )
  })

  
  return (
    <div className="App">
      
      <>
	      <h1>Things to do:</h1>
        <form onSubmit={addToList}>
          <label htmlFor="tasks">Task name</label><br></br>
          <input type="text" id="tasks" onChange={handleUserInput}/><br></br>
          <label htmlFor="High">High priority</label>
          <input type="radio" id="high-priority" value="High" name="priority" onChange={handlePriority}/><br></br>
          {/* checked={priority==="High"} */}
          <label htmlFor="Low">Low priority</label>
          <input type="radio" id="low-priority" value="Low" name="priority" onChange={handlePriority}/><br></br>
          <input type="submit" value="Save" id="submit"/>
        </form>
        

	      <ul>
          {/* {todoList.map((todo,index) => <Item key={index} list={todo} />)} */}
          {listItems}
        </ul>
    </>
    </div>
  );
}

export default App;