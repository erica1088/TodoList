import React from 'react';
import { List, ListItem,  IconButton,  Checkbox, Text,Box, Flex, } from '@chakra-ui/react';
import {  MdDelete } from 'react-icons/md'; // Importación correcta
import { div } from 'framer-motion/client';


const TodoList = ({ tasks,  toggleTask,  deleteTask,  }) => {

  
  return (

 

    
    <Box maxW="800px" mx="auto"  bg="gray.300" p={{ base: 4, sm: 6 }}>
     
     

    <List spacing={3}>
      {tasks.map(({id, text, completed}) => (
        <ListItem key={id} 
        display="flex" alignItems="center" 

        justifyContent="space-between"
      
      
         >

          <Flex align="center" justifyContent="space-between" width="100%" direction={{ base: 'column', sm: 'row' }}>
          <Checkbox
            isChecked={completed}
            onChange={() => toggleTask(id)}
            colorScheme="teal"
            size="lg"
         
            aria-label={`Marcar tarea ${text} como completada`}
            mb={{ base: 2, sm: 0 }}
          >
            <Text as={completed ? 'del' : 'span'}>{text}</Text>
          </Checkbox>

          <IconButton
            aria-label={`Eliminar tarea: ${text}`}
            icon={<MdDelete />} // Usar MdDelete para eliminar
            onClick={() => deleteTask(id)}
            colorScheme="red"
            size = "sm"
            ml={{ sm: 3 }}
                mt={{ base: 2, sm: 0 }}  
          />

       </Flex>
        </ListItem>
      ))}
    </List>

    

    </Box>


  

  );
};

export default TodoList;
