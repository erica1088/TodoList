import React from "react";
import { Box, FormControl, FormLabel, Select } from "@chakra-ui/react";
import { div } from "framer-motion/client";

const SelectFilter = ({ setFilter, currentFilter }) => {
  return (
    <Box p={{ base: "20px", sm: "30px" }} textAlign="center" bg="blue.800" >
      <FormControl>
        <FormLabel
          fontSize={{ base: "11px", sm: "15px" }}
          padding={1}
          htmlFor="task-filter"
        >
          Filtrar tareas por estado
        </FormLabel>
        <Select
          id="task-filter"
          value={currentFilter}
          onChange={(e) => setFilter(e.target.value)}
          borderWidth="2px"
          fontSize={{ base: "13px", sm: "15px" }}
          size="lg"

        
       
        >
          <option value="Todo">Todo</option>
          <option value="completed">Completado</option>
          <option value="pending">Pendiente</option>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectFilter;
