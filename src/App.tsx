import { FormEvent, SyntheticEvent, useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  const handleRemoveItem = (itemIdx: number): void => {
    setTasks(tasks.filter((_, idx) =>  idx !== itemIdx));
  }

  const handleAddNewTask = (e: SyntheticEvent): void => {
    e.preventDefault();
    setTasks([...tasks, newTask]);
    setNewTask("");
  }

  const handleChange = (e: FormEvent<HTMLInputElement>): void => {
    setNewTask(e.currentTarget.value);
  }

  return (
    <>
      <div className="app">
        <div>
          <form onSubmit={handleAddNewTask}>
            <input value={newTask} onChange={handleChange} type="text"/>
            <button>Add new task</button>
          </form>

          <ul>
            {tasks?.map((task, idx) : JSX.Element => {
              return <li key={idx}>{task} <button onClick={() => handleRemoveItem(idx)}>Remove Item</button></li>
            })}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
