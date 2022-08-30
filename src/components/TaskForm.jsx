import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState(""); //Guardamos el estado de nuestro input
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext); // Usamos el contexto general que contiene los valores y destestructuramos porque solo queremos el createTask del context

  const handleSubmit = (e) => {
    e.preventDefault(); // Cancelamos el evento submit del form

    createTask({
      // Mandamos un objeto al app on title y description
      title,
      description,
    });
    setTitle(""); //Reseteamos el valor del hook a nada cuando tiremos el subtmit
    setDescription("");
  };

  return (
    // Ejecuta el evento handleSubmit
    <div className="max-w-xl mx-auto">
      <form className="bg-cyan-200 p-10 mb-5" onSubmit={handleSubmit}>
        <input
          className="p-3 w-full mb-4"
          placeholder="Escribe tu próxima tarea: "
          onChange={(e) => setTitle(e.target.value)} // Actualizamos el estado de nuestro title
          value={title} // Establacemos el valor del input con el del hook
          autoFocus
        />
        <textarea
          className="p-2 w-full mb-4 "
          placeholder="Escribe la descripción: "
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <button className="bg-indigo-400 w-44 p-2 block rounded-xl mx-auto">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
