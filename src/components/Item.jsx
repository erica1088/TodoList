import React, { useRef } from "react";
import {
  AlertDialog,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  IconButton,
  Text,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import { CheckIcon, DeleteIcon } from "@chakra-ui/icons";

import { saveTasks } from "./utils/LocalStorage";
import { SiNba } from "react-icons/si";

const Item = ({ task, toggleTask, deleteTask }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  const confirmDelete = () => {
    deleteTask(task.id);
    onClose();
  };

  return (
    <Box
      p={{ base: "10px", sm: "15px" }}
      borderWidth="1px"
      borderRadius="md"
      mb="4"
   
      display="flex"
      flexDirection={{ base: "column", sm: "row" }}
      alignItems="center"
      justifyContent="space-between"
    >
      <Text
        as={task.completed ? "del" : "span"}
        flex={1}
        textDecoration={task.completed ? "line-through" : "none"}
        fontSize={{ base: "md", sm: "lg" }}
        color={task.completed ? "blue.800" : "black"}
      >
        {task.text}
      </Text>

      {/* Boton para marcar como completado */}
      <Box display="flex" gap="10px" mt={{ base: "10px", sm: "0" }}>
        <IconButton
          icon={<CheckIcon />}
          onClick={() => toggleTask(task.id)}
          colorScheme="teal"
          aria-label="Marcar como completado"
          marginRight="10px"
          size="sm"
        />

        {/* Boton para elminar tarea */}

        <IconButton
          icon={<DeleteIcon />}
          onClick={onOpen}
          colorScheme="red"
          size="sm"
          aria-label={`Eliminar tarea: ${task.text}`}
        />
         </Box>



        <AlertDialog
          motionPreset="slideInBottom"
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          isOpen={isOpen}
          isCentered
        >
          <AlertDialogOverlay />
          <AlertDialogContent>
            <AlertDialogHeader>¿Está seguro que desea eliminar esta tarea?</AlertDialogHeader>

            <AlertDialogCloseButton />
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancelar
              </Button>
              <Button ml={3} colorScheme="red"  onClick={confirmDelete}>
                Eliminar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </Box>
   
  );
};

export default Item;
