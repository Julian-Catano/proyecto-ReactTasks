import { useContext } from "react";
import { TaskContext } from "./context/TaskContext";

function TaskCard({ task }) {

  const {deleteTask} = useContext(TaskContext);

  return (
    <>
      <div className="card">
        <h1>{task.title}</h1>
        <p>° {task.description}</p>
        <button onClick={() => deleteTask(task.id)} >
          eliminar tarea
        </button>
      </div>
    </>
  );
}

export default TaskCard;