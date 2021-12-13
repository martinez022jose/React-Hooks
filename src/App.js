import React, {useState} from 'react'
import './App.css';
import Task from'./Components/Task';
import TaskList from'./Components/TaskList';
const tasks = [
  {
      id: 1,
      title: "Primera task",
      desc: "Desc1",
      state: true
  },
  {
      id: 2,
      title: "Segunda task",
      desc: "Desc2",
      state: true
  }
];

function App() {
  
  const [tasksList, setTasksList] = useState(tasks);

  const deleteTask = (idTask) => {
    const newTasks = tasksList.filter(task => task.id !== idTask);
    setTasksList(newTasks);
  }
  const getTask= (idTask, listTask)=>{
      listTask.map(task => {
        if (task.id === idTask){
          return task;
        }
      })
  }


  const setState = (idTask) => {  
    const newTask = tasksList.map(task => task.id === idTask? {...task, state:!task.state} : task);

    setTasksList(newTask);
  }

  return (
    <div className="container mt-4">
        <div className="row">
          <div className="col-8">
            <h2>Lista de tareas</h2>
            <TaskList tasks={tasksList} fDelete={deleteTask} fState={setState}/>
          </div>
          <div className="col-4">
            <h2>Formulario</h2>
          </div>

        </div>
    </div>
  );
}

export default App;
