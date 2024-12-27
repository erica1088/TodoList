import React from 'react';
import Item from '../components/Item';

const List = ({ tasks, toggleTask, deleteTask}) =>{

    if (tasks.length === 0){
        return <p>No hay tareas para mostrar</p>
    }
    return (
        <div>
        {tasks.map((task) => (
          <Item key={task.id} task={task} toggleTask={toggleTask} deleteTask={deleteTask} />
        ))}
      </div>
     
    );
};

export default List;