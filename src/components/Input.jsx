import React, { useState } from "react";
import { Input, Button, useToast, Box } from "@chakra-ui/react";
import { MdAdd } from "react-icons/md";
import { GiDuration } from "react-icons/gi";

const InputTask = ({ addTask }) => {
  const [task, setTask] = useState("");
  const toast = useToast();

  const handleAdd = () => {
    if (task.trim()) {
      addTask(task);
      setTask("");
    } else {
      toast({
        title: "Error",
        description: "Por favor ingresa una tarea",
        status: "Error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      p={{ base: "20px", sm: "30px" }}
      bg="gray.100"
      textAlign="center"
      fontSize={{ base: "15px", sm: "30px" }}
      fontFamily="Arial, sans-serif"
    >
      {/* Título de la lista - se encuentra arriba de todo */}
      <h1
        style={{
          marginBottom: "30px",

          background:
            "linear-gradient(45deg, rgb(91, 17, 203), rgb(220, 37, 252))",
          color: "white",
          fontWeight: "bold",
          textTransform: "uppercase",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          letterSpacing: "2px",
          transition: "all 0.3s ease-in-out",

          textAlign: "center",
        }}
        onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
      >
        Lista de Tareas
      </h1>

      <Box
        display="flex"
        mt={{ base: "50px", sm: "90px" }}
        gap="20px"
        justifyContent="center"
        flexDirection={{ base: "column", sm: "row" }}
      >
        <Input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Agrega una nueva tarea"
          size="lg"
          marginBottom="20px"
          mb="20px"
          aria-label="Campo para agregar tarea"
          fontSize={{ base: "14px", sm: "15px" }}
          borderWidth="2px"
          maxWidth="100%"
          width={{ base: "100%", sm: "80%" }}
        />

        <Button
          icon={<MdAdd />}
          onClick={handleAdd}
          colorScheme="blue"
          size="lg"
          fontSize={{ base: "10px", sm: "14px" }}
          overflow="hidden"
          w={{ base: "100%", sm: "auto" }}
          aria-label="Agregar tarea"
        >
          + Agregar tarea
        </Button>
      </Box>
    </Box>
  );
};

export default InputTask;
