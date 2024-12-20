import { useState, useEffect } from 'react'
import { ChakraBaseProvider, Box, Container, ChakraProvider } from '@chakra-ui/react'
import TodoList from './components/TodoList';
import SelectFiltro from './components/SelectFilter';
import Input from './components/Input';

import { loadTasks, saveTasks } from './Utils/LocalStorage';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  //cargar tareas en el LocalStorage al iniciar

  useEffect(() =>{
    setTasks(loadTasks())
  }, [])

  useEffect(()=>{
    saveTasks(tasks);

  }, [tasks]);

  const addTask = (task) =>{
    setTasks([...tasks, {id: Date.now(), text: task, completed:false}]);

  }
  
  const toggleTask = (id) =>{
    setTasks(tasks.map(task =>
      task.id === id ? {...task, completed: !task.completed} : task

    ) )
  }

  const deleteTask = (id ) =>{
    setTasks(tasks.filter(task => task.id !== id));
  }


  //Filtrar tareas segun el estado 

  const filteredTasks = tasks.filter(task=>{
    if (filter === 'all') return true;
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;

    return false;
  });

  return (
    <ChakraProvider>
      <Container>
        <Box>
          <Input addTask={addTask} />
          <SelectFiltro setFilter={setFilter} />
          <TodoList 
          tasks={filteredTasks}
          toggleTask={toggleTask}
          deleteTask= {deleteTask}/>
        </Box>
      </Container>
    </ChakraProvider>
  )


}

export default App
