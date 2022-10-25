import { Box, Button, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import boatImg from "../assets/boatImg.png"

export const Projects = () => {
  return (
    <Box w="100%" bg="#ffffff" py="70px" id="projects">
        <Box textAlign="center" id="about">
            <Heading mb={10}>PROJECTS</Heading>
            <Box marginTop="10px" margin="auto" bg="#f9ce0f" w="50px" h="4px" borderRadius="10px"></Box>
            <Text w="50%" margin="auto" mt={7} fontSize="20px">Here you will find some of the personal and clients projects that I created with each project containing its own case study</Text>
        </Box>
        <Box w="90%" display="flex" justifyContent="space-between" margin="auto" mt="100px">
          <Box w="45%" p={5} boxShadow='lg' borderRadius="20px">
            <Image src={boatImg} alt=""/>
          </Box>
          <Box w="50%">
            <Heading>boAt-lifestyle</Heading>
            <Text w="70%" mt={7} fontSize="18px">Yubter is a platform that I created where people can join the community of their favorite youtube channels and can be part of the conversation.</Text>
            <Box w="35%" mt={10} display="flex" justifyContent="space-between">
              <Button bg="#facf0f" colorScheme="#facf0f" color="black">Live Link</Button>
              <Button bg="#facf0f" colorScheme="#facf0f" color="black">GitHub Link</Button>
            </Box>
          </Box>
        </Box>
        <Box w="90%" display="flex" justifyContent="space-between" margin="auto" mt="100px">
          <Box w="45%" p={5} boxShadow='lg' borderRadius="20px">
            <Image src={boatImg} alt=""/>
          </Box>
          <Box w="50%">
            <Heading>boAt-lifestyle</Heading>
            <Text w="70%" mt={7} fontSize="18px">Yubter is a platform that I created where people can join the community of their favorite youtube channels and can be part of the conversation.</Text>
            <Box w="35%" mt={10} display="flex" justifyContent="space-between">
              <Button bg="#facf0f" colorScheme="#facf0f" color="black">Live Link</Button>
              <Button bg="#facf0f" colorScheme="#facf0f" color="black">GitHub Link</Button>
            </Box>
          </Box>
        </Box>
        <Box w="90%" display="flex" justifyContent="space-between" margin="auto" mt="100px">
          <Box w="45%" p={5} boxShadow='lg' borderRadius="20px">
            <Image src={boatImg} alt=""/>
          </Box>
          <Box w="50%">
            <Heading>boAt-lifestyle</Heading>
            <Text w="70%" mt={7} fontSize="18px">Yubter is a platform that I created where people can join the community of their favorite youtube channels and can be part of the conversation.</Text>
            <Box w="35%" mt={10} display="flex" justifyContent="space-between">
              <Button bg="#facf0f" colorScheme="#facf0f" color="black">Live Link</Button>
              <Button bg="#facf0f" colorScheme="#facf0f" color="black">GitHub Link</Button>
            </Box>
          </Box>
        </Box>
    </Box>
  )
}
