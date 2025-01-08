import { useState, useEffect } from "react";
import {
  ChakraBaseProvider,
  Box,
  ChakraProvider,
  Container,
  Image,
  Stack,
} from "@chakra-ui/react";
import TodoList from "./components/TodoList";
import Input from "./components/Input";
import SelectFilter from "./components/SelectFilter";
import "./index.css";
import fondo from "../src/assets/img/fondo.14.jpg";
import Footer from "./components/footer";
import { saveTasks, loadTasks,  } from "./Utils/LocalStorage";
import Item from "../src/components/Item"
import List from "./components/List";


<<<<<<< HEAD


const App = () => {
=======
import { saveTasks, loadTasks } from '../src/Utils/LocalStorage';
const App =() => {
>>>>>>> f8464db (modifcaciones)
  const [tasks, setTasks] = useState(loadTasks());
  const [filter, setFilter] = useState("all");

  const [backgroundImage, setBackgroundImage] = useState(fondo);
 const saveTasks = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  //cargar tareas en el LocalStorage al iniciar

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  // useEffect(() => {
  //   const loadedTasks = loadTasks();
  //   setTasks(loadedTasks);
  // }, []);

  // useEffect(() => {
  //   saveTasks(tasks);
  // }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Filtrar tareas segun el estado

  const filteredTasks = tasks.filter(task => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;

    return true;
  });

  return (
<<<<<<< HEAD
    <div
<<<<<<< HEAD
      height="100vh"
      style={{
        backgroundImage: `url(${fondo})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        boxSizing: "border-box",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0",
        padding: "0",
      }}
    >
      <ChakraProvider>
        <Stack minHeight="100vh" position="relative" border="2px">
          <Box
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100vh"
            overflow="hidden"
            zIndex={-1}
          >
            <img
              src={fondo}
              autoPlay
              loop
              muted
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100vh",
                overflow: "hidden",
              }}
            />
          </Box>
        </Stack>
        <Container>
          <Box
            margin="auto"
            padding="10px"
            bg="gray.30"
            borderRadius="lg"
            maxW="100%"
            boxSizing="border-box"
          >
            <Input addTask={addTask} />
            <SelectFilter setFilter={setFilter} />
           
            <TodoList
              tasks={filteredTasks}
              toggleTask={toggleTask}
              deleteTask={deleteTask}
              setTasks={setTasks}
            />
            
          </Box>
        </Container>
      </ChakraProvider>

      <Footer />
    </div>
  );
};
=======
=======
    <div height="100vh"
>>>>>>> e84a6a9 (modificaciones)
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
<<<<<<< HEAD
      <Container >
        <Box      margin="auto"
            p={{ base: '5', sm: '8', md: '10' }}
            bg="rgba(255, 255, 255, 0.8)"
            borderRadius="lg"
            boxShadow="sm"
          
=======
      <Container>
        <Box margin="auto" 
        pendding="10px" bg="gray.30"
         borderRadius="lg"
         
           maxW="100%" 
           boxSizing= 'border-box'
>>>>>>> e84a6a9 (modificaciones)
             
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
>>>>>>> f8464db (modifcaciones)

export default App;
