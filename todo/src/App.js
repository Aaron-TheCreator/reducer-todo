import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>
         Todo List
       </h1>
       <TodoForm />
       <TodoList />

      </header>
    </div>
  );
}

export default App;
