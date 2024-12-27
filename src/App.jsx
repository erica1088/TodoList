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
import { linearGradient } from 'framer-motion/client';
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
    style={{ 
    
       backgroundSize: 'cover', 
       background:
            "linear-gradient(45deg, rgb(107, 46, 199), rgb(201, 91, 221))",
      backgroundAttachment: 'fixed', 
        backgroundRepeat: 'no-repeat',
        boxSizing: "border-box",
       overflow: 'hidden',
      display: 'flex',
       alignItems:'center',
      justifyContent:'center',
     margin:'0',
    padding: '0',


     
  
      }}>

   
    <ChakraProvider>
    <Stack minHeight="100vh" position="relative">
        
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
            alt="Background"
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
      <Container >
        <Box      margin="auto"
            p={{ base: '5', sm: '8', md: '10' }}
            bg="rgba(255, 255, 255, 0.8)"
            borderRadius="lg"
            boxShadow="sm"
          
             
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
