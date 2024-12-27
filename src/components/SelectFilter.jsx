import React from "react";
import { Box, FormControl, FormLabel, Select } from "@chakra-ui/react";
import { div } from "framer-motion/client";
import { color } from "framer-motion";

const SelectFilter = ({ setFilter, currentFilter }) => {
  return (
    <Box p={{ base: "20px", sm: "30px" }} textAlign="center" bg="blue.800" >
      <FormControl>
        <FormLabel
          fontSize={{ base: "11px", sm: "15px" }}
          padding={1}
          htmlFor="task-filter"
        >
          <p color="white"> Filtrar por estado</p>
        </FormLabel>
        <Select
          id="task-filter"
          value={currentFilter}
          onChange={(e) => setFilter(e.target.value)}
          borderWidth="2px"
          fontSize={{ base: "14px", sm: "15px" }}
          size="lg"
<<<<<<< HEAD

        
       
=======
          w="full"
          marginBottom="20px"
          mb="20px"
          aria-label="Campo para agregar tarea" 
          maxWidth="100%"
          width={{ base: "100%", sm: "100%" }}
        
>>>>>>> f8464db (modifcaciones)
        >
          <option value="Todo" >Todo</option>
          <option value="completed">Completado</option>
          <option value="pending">Pendiente </option>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectFilter;
