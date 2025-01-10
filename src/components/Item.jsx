import { useRef, useState } from "react";
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
import { useState, useRef } from 'react';

import { saveTasks } from "../Utils/LocalStorage";
import { SiNba } from "react-icons/si";

const Item = ({ task, setTasks, tasks, toggleTask, deleteTask }) => {
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
        color={task.completed ? "gray.100" : "black"}
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

        <AlertDialog
          motionPreset="slideInBottom"
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          isOpen={isOpen}
          isCentered
        >
          <AlertDialogOverlay />
          <AlertDialogContent>
            <AlertDialogHeader>
              ¿Está seguro que desea eliminar esta tarea?
            </AlertDialogHeader>

            <AlertDialogCloseButton />

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}  backgroundColor={"green.500"}  color={"black"}>
                Cancelar
              </Button>
              <Button ml={3} onClick={confirmDelete}>
                Eliminar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </Box>
    </Box>
  

);
};

export default Item;
