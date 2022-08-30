import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  return (
    <main className="bg-emerald-200 h-screen">
      <div className="container mx-auto p-8 ">
      <h1 className="text-center mb-10 text-4xl font-semibold">Creador de Tareas</h1>
      <TaskForm />
      <TaskList />
      </div>
    </main> 
  );
};

export default App;
