import { useState, useEffect } from 'react'
import { ChakraBaseProvider, Box, ChakraProvider, Container,  } from '@chakra-ui/react'
import TodoList from './components/TodoList';
import Input from './components/Input';
import SelectFilter from './components/SelectFilter';
import { saveTasks, loadTasks } from '../src/Utils/LocalStorage';
const App =() => {
  const [tasks, setTasks] = useState(loadTasks());
  const [filter, setFilter] = useState('all');

  //cargar tareas en el LocalStorage al iniciar

  useEffect(() =>{
    const saveTasks = JSON.parse(localStorage.getItem('task'))  || [];
    setTasks(saveTasks)
  }, [])

  useEffect(()=>{
    localStorage.setItem('tasks', JSON.stringify(tasks))

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
    const updatetasks= tasks.filter(task => task.id !== id);
    setTasks(updatetasks);

   
  }


  //Filtrar tareas segun el estado 

  const filteredTasks = tasks.filter(task=>{
    
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;

    return true;
  });

  return (
    <ChakraProvider>
      <Container>
        <Box margin="auto" pendding="10px" bg="gray.50" borderRadius="sm"
           ml={2} mr={2} p={1}>
          
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              position="absolute"
              top={0}
              left={0}
              width="100%"
              height="100%"
              zIndex={-1}
              mb={10}
            ></Box> 
            
          <Input addTask={addTask} />
          <SelectFilter setFilter={setFilter} />
          <TodoList 
          tasks={filteredTasks}
          toggleTask={toggleTask}
          deleteTask= {deleteTask}/>
        </Box>
        
      </Container>
    </ChakraProvider>
  )


}

export default App;
