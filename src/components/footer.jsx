import React from "react";

import{ Box, Text, Center} from '@chakra-ui/react';

const footer = () =>{
    return(
        <Box
        bg='gray.700'
        color='white'
        p={4}
        textAlign='center'
        position='fixed'
        bottom='0'
        width='100%'
        >

            <Text  textAlign="center" mt={4} fontSize="sm">
               @ 2024 Erica Acosta. Todos los derechos reservados.


            </Text>

        </Box>
    )
}

