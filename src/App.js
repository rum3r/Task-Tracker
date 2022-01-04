import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

import { useState } from "react";

import "./index.css";
const App = () => {
  const [showAddTask, setShowAddTask] = useState(true);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Food shopping",
      day: "day 3 3:43pm",
      reminder: false,
    },
    {
      id: 2,
      text: "df dd ddd",
      day: "day 3 3:43pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Skating",
      day: "day 3 3:43pm",
      reminder: false,
    },
    {
      id: 4,
      text: "Dont' know",
      day: "day 3 3:43pm",
      reminder: true,
    },
  ]);

  //add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
  //delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  //toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} title="Task Tracker" />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks to show"
      )}
    </div>
  );
};

export default App;
