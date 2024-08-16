import TaskCard from "./TaskCard";
import {useContext} from 'react';
import {TaskContext} from './context/TaskContext'


export default function TaskList() {

  const {tasks} = useContext(TaskContext)

  if(tasks.length === 0){
    return <div>
      <h1>No hay tareas Aun</h1>
    </div>
  }
  return (
    <div className="AppContainer">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
