import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks"; //Cambiamos con as porque hay conflicto en useEffect

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]); // Inicializamos en arreglo vacio

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title, //Conectamos con el taskform y cogerá el title guardado en el input y también el task description
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  useEffect(() => {
    setTasks(data); // Establecemos el arreglo de tareas, le asigna la propiedad task al useTate e inicializamos
  }, []);

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId)); //Establecemos la porcion que se elimianraá
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
