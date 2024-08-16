import { useState, useContext } from "react";
import { TaskContext } from "./context/TaskContext";
import "./index.css";


export default function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <input className="form-control"
          type="text"
          placeholder="escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
        />

        <div>
          <textarea
            placeholder="escribe la descripcion de tu tarea"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
        </div>

        <button>Guardar</button>
      </form>
    </div>
  );
}
