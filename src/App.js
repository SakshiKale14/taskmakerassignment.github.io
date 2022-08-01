import React,{useState} from 'react';
import './App.css'
import TaskCreator from './TaskCreator';
import TaskViewer from './TaskViewer'

function App() {
  const [allTasks, setalltasks] = useState([]);
  const addTask = (task) => {
    setalltasks(prev=>[...prev,task])
  }
  return (
    <div className="main-container">
      <TaskCreator addTask={addTask}></TaskCreator>
      <TaskViewer tasks={allTasks}></TaskViewer>
    </div>
  );
}

export default App;
