import React from 'react';
import Item from './Items';

const List = ({ tasks, toggleTask, deleteTask}) =>{
    return (
        <div>
            {tasks.map((task) =>{
                <item
                key={task.id}
                task={task}
                toggleTask={toggleTask}
                deleteTask={deleteTask}

                />
            })}
        </div>
    );
};

export default List;