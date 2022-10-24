import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export const Projects = () => {
  return (
    <Box w="100%" bg="#ffffff" py="70px" id="projects">
        <Box textAlign="center" id="about">
            <Heading mb={10}>PROJECTS</Heading>
            <Box marginTop="10px" margin="auto" bg="#f9ce0f" w="50px" h="4px" borderRadius="10px"></Box>
            <Text w="50%" margin="auto" mt={7} fontSize="20px">Here you will find some of the personal and clients projects that I created with each project containing its own case study</Text>
        </Box>
    </Box>
  )
}
