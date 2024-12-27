import React from "react";
import {
  List,
  ListItem,
  IconButton,
  Checkbox,
  Text,
  Box,
  Flex,
} from "@chakra-ui/react";
import { MdDelete } from "react-icons/md"; // Importación correcta
import { div } from "framer-motion/client";

const TodoList = ({ tasks, toggleTask, deleteTask }) => {
  return (
<<<<<<< HEAD
    <Box maxW="800px" mx="auto" bg="blue.800" p={{ base: 4, sm: 6 }}>
=======
    <Box maxW="800px" mx="auto" bg="blue.800" p={{ base: 4, sm: 8 }} >
>>>>>>> f8464db (modifcaciones)
      <List spacing={3}>
        {tasks.map(({ id, text, completed }) => (
          <ListItem
            key={id}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
      
          >

            <Flex
              align="center"
              justifyContent="space-between"
              width="100%"
              direction={{ base: "column", sm: "row" }}
            >
              <Checkbox
                isChecked={completed}
                onChange={() => toggleTask(id)}
                colorScheme="teal"
<<<<<<< HEAD
                color="white"
=======
                gap= "2"
>>>>>>> f8464db (modifcaciones)
                size="lg"
                width="100%"
                fontSize={{ base: "14px", sm: "15px" }}
                color="white"
                
                aria-label={`Marcar tarea ${text} como completada`}
                mb={{ base: 2, sm: 10 }}
              >
                <Text as={completed ? "del" : "span"}>{text}</Text>
              </Checkbox>

              <IconButton
                aria-label={`Eliminar tarea: ${text}`}
                icon={<MdDelete />} // Usar MdDelete para eliminar
                onClick={() => deleteTask(id)}
                colorScheme="red"
                
                size="sm"
                ml={{ base: 3, sm: 0 }}
                mt={{ base: 2, sm: 0 }}
                mb={{ base: 2, sm: 10 }}
                
               
              />
            </Flex>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TodoList;
