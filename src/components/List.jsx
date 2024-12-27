import React, { useState } from 'react';
import Item from '../components/Item';
import { loadTasks } from '../Utils/LocalStorage';

const List = () =>{
  const [tasks , setTasks, saveTasks] = useState(loadTasks())

 
    const toggleTask = (taskId) => {
      const updatedTasks = tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      );
      setTasks(updatedTasks);
      saveTasks(updatedTasks);
    };

    const deleteTask = (taskId) => {
      const updatedTasks = tasks.filter((task) => task.id !== taskId);
      setTasks(updatedTasks);
      saveTasks(updatedTasks);
    };
  

<<<<<<< HEAD
=======

     if (tasks.length === 0){
        return <p>No hay tareas para mostrar</p>
    }
    
>>>>>>> f8464db (modifcaciones)
    return (
        <div>
        {tasks.map((task) => (
          <Item 
          key={task.id} 
          task={task} 
          tasks= {tasks} 
          toggleTask={toggleTask} 
          setTasks={setTasks} 
          deleteTask={deleteTask} />
        ))}
      </div>
     
    );
};

export default List;