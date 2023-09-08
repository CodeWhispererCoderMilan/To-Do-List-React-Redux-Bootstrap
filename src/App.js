import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleCheck, faTrashCan
} from '@fortawesome/free-solid-svg-icons'
import { addTask,deleteTask,completeTask} from './store/tasks/tasks';
import './App.css';

function App() {
 
  const tasks  = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addTask({id: id, title: text, category: category, completed: false}));
    
  };
  function handleDelete(task){
    dispatch(deleteTask(task));
    
  };
  function handleComplete(task){
    dispatch(completeTask(task));
    
  };
  const [text, setText] = useState('');

  const [category, setCategory] = useState('Work');

  const[id, Setid]=useState(0); 
  




  //const completeTask = (id) => {
  // const newTasks = toDoList.map((task) => {
   //   if (task.id === id){
    //    return ({ ...task, completed: !task.completed })
    //  }
   //   return task;
   // });
   // setToDoList(newTasks);
  //}
  const taskForm = (text, setText,category,setCategory) => {
    return (
      <>
      <form onSubmit={handleSubmit}>
      <div class="d-flex justify-content-around">
          <div>
          <input  aria-describedby="emailHelp" placeholder="enter task"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="inputText"
            />

          </div>
          <div className ='buttons'>
            <Dropdown >
              <Dropdown.Toggle variant="success" id="dropdown-basic" className="dropdown-button" size='lg' >
                {category}
              </Dropdown.Toggle>

              <Dropdown.Menu  >
                <Dropdown.Item onClick={() => setCategory('Work')}>Work</Dropdown.Item>
                <Dropdown.Item onClick={() => setCategory('Errand')}>Errand</Dropdown.Item>
                <Dropdown.Item onClick={() => setCategory('Hobby')}>Hobby</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            </div>
            <div>
              <Button type ="Submit" onClick={()=>Setid(id+1)}className="btn btn-custom-class" size='lg'>Add</Button>
            </div>
            </div>
            </form>
      <br/><br/>
      </>
    
    )
  }

  const list = () => {
    if ( tasks.length > 0)
      return tasks.map((task, index) => (

        <React.Fragment key={task.id}>

          <div className="taskContent">

            <div className={task.completed ? 'done' : ''}>
              <span className="taskNumber">{index + 1}</span>
              <span className="taskText">{task.title} {task.id} </span>
              <span className="taskCategory">{task.category}</span>
            </div>
            <div className="fontAwesomeIcons" >
              <span >
                <FontAwesomeIcon onClick={() => handleComplete(task)} icon={faCircleCheck} />
              </span>
            <span >
                <FontAwesomeIcon onClick={() => handleDelete(task)} icon={faTrashCan} />
              </span>
            </div>

          </div>

        </React.Fragment>

      ))
    return "no tasks...";
  }
  return (
    <div className="App Window">
      <br /><br />
      <h2>To-Do List (React, Bootstrap, Redux)</h2>
      <br /><br />
      {taskForm(text, setText,category,setCategory, handleSubmit)}
      {list()}

      
    </div>

  );
}

export default App;
