import logo from './logo.svg';
import './App.css';
import {useState} from 'react'



function App() {
  const [todoList,setTodoList]=useState([
    {id:1,task_name:"Clean Room",priority:"High"},
    {id:2,task_name:"Buy Shopping",priority:"Low"},
    {id:3,task_name:"Car's MOT",priority:"High"}
  ])
  // const [taskToAdd,setTask]=useState("")
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
      // copyOfList.push(taskToAdd)
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
    const taskHigh=document.querySelector('#high-priority')
    taskHigh.value=""
    const taskLow=document.querySelector('#low-priority')
    taskLow.value=""
  }

  function Item(todo){
    return <li>{todo.list}</li>
  }
  const listItems = todoList.map((task) => {
    return (
      <li key={task.id}>
        <span>{task.task_name}</span><br></br>
        <span id="prior-span">{task.priority} Priority</span>
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