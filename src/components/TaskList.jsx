import { useContext } from "react";
import TaskCard from "../components/TaskCard";
import { TaskContext } from "../context/TaskContext";

function TaskList() {
  // Cogemos el objeto tasks como props para poder usarlo.
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1 className="font-bold text-7xl mt-20 shadow-sm text-center ">No hay tareas aún</h1>;
  }

  return (
    
    <div className="grid grid-cols-3 gap-3 mt-16">
      <TaskCard id={tasks.id} tasks={tasks} />
    </div>
  ); //APP Renderiza
}

export default TaskList;
