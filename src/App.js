import './App.css';
import AddTask from './components/AddTask';
import Navigation from './components/Navigation';
import TodoList from './components/TodoList';
function App() {
  return (
    <div className="App">
      <Navigation />
      <AddTask />
      <TodoList />
    </div>
  );
}

export default App;
