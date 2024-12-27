import { useState, useEffect } from 'react'
import { ChakraBaseProvider, Box, ChakraProvider, Container, Image, Stack,  } from '@chakra-ui/react'
import TodoList from './components/TodoList';
import Input from './components/Input';
import SelectFilter from './components/SelectFilter';
import './index.css';
import fondo from '../src/assets/img/fondo.14.jpg'
import Footer from './components/footer'; 


import { saveTasks, loadTasks } from '../src/Utils/LocalStorage';
const App =() => {
  const [tasks, setTasks] = useState(loadTasks());
  const [filter, setFilter] = useState('all');

  

  const [backgroundImage, setBackgroundImage] = useState(fondo);



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
    <div height="100vh"
    style={{ 
      backgroundImage: `url(${fondo})`, 
       backgroundSize: 'cover', 
        
      backgroundAttachment: 'fixed', 
        backgroundRepeat: 'no-repeat',
        boxSizing: "border-box",
       overflow: 'hidden',
      display: 'flex',
       alignItems:'center',
      justifyContent:'center',
     margin:'0',
    padding: '0',
    boxSizing: 'border-box',
     

     
  
      }}>

   
    <ChakraProvider>
    <Stack minHeight="100vh" position="relative" border="2px">
        
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100vh"
          overflow='hidden'
          zIndex={-1}
        >
          <img
            src={backgroundImage}
            autoPlay
            loop
            muted
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100vh",
              overflow:'hidden'
            }}
          />
        </Box>       
      
</Stack>
      <Container>
        <Box margin="auto" 
        pendding="10px" bg="gray.30"
         borderRadius="lg"
         
           maxW="100%" 
           boxSizing= 'border-box'
             
           >

         
          <Input addTask={addTask} />
          <SelectFilter setFilter={setFilter} />
          <TodoList 
          tasks={filteredTasks}
          toggleTask={toggleTask}
          deleteTask= {deleteTask}/>
        </Box>

    
        
      

       
        
      </Container>


    </ChakraProvider>

    <Footer />
  </div>
    
  )


}

export default App;



