import React,{useEffect,useState} from 'react';
import moment from 'moment';
import OneTask from './OneTask'

function TaskViewer(props) {
    const [taskList, setTaskList] = useState(props.tasks.map(task=>task));
    const [tab, setTab] = useState('ut')
    useEffect(()=>{
        // sort tasks according to time
        if(props.tasks.length>0){
        let unsortedTasks = props.tasks;
        let sortedTasks =  unsortedTasks.sort(function(taskA, taskB){
           console.log(moment(`${taskB.date} ${taskB.time}`).toISOString()-moment(`${taskA.date} ${taskA.time}`).toISOString())
            return (moment(`${taskA.date} ${taskA.time}`).toISOString() < moment(`${taskB.date} ${taskB.time}`).toISOString()) ? -1 : ((moment(`${taskA.date} ${taskA.time}`).toISOString() > moment(`${taskB.date} ${taskB.time}`).toISOString()) ? 1 : 0);
          });
        console.log(sortedTasks)
        setTaskList(sortedTasks)
        }

    },[props.tasks])
    
  return (
    <div className='task-viewer-container'>
        <h2>Task viewer</h2>
        <div className='all-tasks-viewer'>
            <div className='toggle-button-wrappper'>
                <button className={tab==='ut' && 'active'} onClick={()=>setTab('ut')}>Upcoming </button>
                <button className={tab==='at' && 'active'} onClick={()=>setTab('at')}>All</button>
            </div>
            <div className='upcoming-tasks'></div>
            <div className='all-tasks'>
                    {taskList.length===0 && "No tasks!"}
                    {tab==='at' ? taskList.map((task,i)=>(<OneTask task={task}></OneTask>)) :
                    [...taskList].slice(0,3).map((task,i)=>(<OneTask task={task}></OneTask>))
                    }
            </div>
        </div>
    </div>
  )
}

export default TaskViewer