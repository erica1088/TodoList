import React from "react";
import { IconButton, Text } from "@chakra-ui/react";
import {checkIcon, DeleteIcon} from '@chakra-ui/react';

const Item = ({ task, toggleTask, deleteIcon}) =>{
    return (
        <div style={{display: 'flex', justifyContent: 'space-between', margin: ' 10px 0'}}>
         <Text

         style={{
            textDecoration: task.completed ? 'line-through': 'none',
            flex: 1,
         }}
         
         
         >

            {task.text}
 
         </Text>
        </div>
    )
}

