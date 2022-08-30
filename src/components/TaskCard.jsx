import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ tasks }) {
  //Importamos las props de tasks para usar

  const { deleteTask } = useContext(TaskContext);

  return tasks.map((tasks) => (
    <div
      className="bg-gray-800 text-white p-4 rounded-md text-center"
      key={tasks.id}
    >
      <h1 className="text-xl text-lime-500 font-bold capitalize">
        {tasks.title}
      </h1>
      <p className="text-green-200 text-base">{tasks.description}</p>
      <button
        className="bg-teal-500 rounded-xl p-1 mt-3 text-sm hover:bg-orange-500 text-black font-semibold"
        onClick={() => deleteTask(tasks.id)}
      >
        Eliminar Tarea
      </button>
    </div>
  ));
}

export default TaskCard;
