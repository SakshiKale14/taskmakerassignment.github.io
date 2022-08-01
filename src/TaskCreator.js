import React,{useState} from 'react';
import momemt from 'moment';
import TimePicker from 'react-time-picker';

function TaskCreator(props) {
    const [task, settask] = useState({name:"",date:"",time:""});
    
     const handleSubmit= () =>{
        if(Object.keys(task).every(key=>task[key]!=="")){
            props.addTask(task)
        }else{
            alert("Add mandatory fields")
        }
    }
    return (
        <div className='task-creator-container'>
            <div>
                <h2>Task creator</h2>
                <label>Task Name</label>
                <input type="text" name="name" placeholder="Task Name" onChange={(e)=>settask(prev=>({...prev,[e.target.name]:e.target.value}))}></input>
                <label>Task description (optional)</label>
                <input type="text" name="desc" placeholder="Task description" onChange={(e)=>settask(prev=>({...prev,[e.target.name]:e.target.value}))}></input>
                <div style={{display:'grid',gap:'1rem', gridTemplateColumns:'auto auto'}} className="task-timestamps">
                    <label>
                        <p>Select Date</p>
                        <input type="date" name="date" min={new Date().toISOString().split('T')[0]}  onChange={(e)=>settask(prev=>({...prev,[e.target.name]:e.target.value}))}></input>
                    </label>
                    <label>
                    <p>Select Time</p>
                    
                    <input type="time" name="time" min={momemt().format('HH:MM')} max="24:00" onChange={(e)=>settask(prev=>({...prev,[e.target.name]:e.target.value}))}></input>
                    </label>
                    
                </div>
                
                <button onClick={handleSubmit}> Create Task </button>
            </div>
            
        </div>
    )
}

export default TaskCreator