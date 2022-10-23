import { Box, Button, Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom';
import Typed from 'react-typed';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import './Banner.css'

export const Banner = () => {
  return (
    <Box w="100%" border="1px solid black" marginTop="75px" h="700px" bg="#f1f1f1" className="banner">
        <Box w="100%" display="flex" border="1px solid black" mt="170px">
            <Box w="5%"  h="100%" border="1px solid black">
                <VStack bg="white" p={2}>
                    <Box w="60px" h='60px' display="flex" alignItems="center" bg='white' px="8px" borderRadius="8px" _hover={{bg:"#0a66c2", color:"white"}}>
                        <NavLink ><BsLinkedin fontSize="40px"/></NavLink>
                    </Box>
                    <Box w="60px" h='60px' display="flex" alignItems="center" bg='white' px="8px" borderRadius="8px" _hover={{bg:"black", color:"white"}}>
                        <NavLink ><BsGithub fontSize="40px"/></NavLink>
                    </Box>
                    <Box w="60px" h='60px' display="flex" alignItems="center" bg='white' px="8px" borderRadius="8px" _hover={{bg:"#1d9bf0", color:"white"}}>
                        <NavLink ><BsTwitter fontSize="40px"/></NavLink>
                    </Box>
                    <Box w="60px" h='60px' display="flex" alignItems="center" bg='white' px="8px" borderRadius="8px" className="instagram" _hover={{color: "white"}}>
                        <NavLink ><BsInstagram fontSize="40px"/></NavLink>
                    </Box>  
                </VStack>
            </Box>
            <Box w="95%" textAlign="center" >
                <Heading fontSize="70px">HEY, I'M <Typed strings={['TARUN TAILOR','A FullStack Developer']}  typeSpeed={100} backSpeed={100} loop /></Heading>
                <Text w="50%" margin="auto" mt={10} fontSize="20px">
                    A FullStack focused Web Developer building the Frontend and Backend of Websites and Web Applications that leads to the success of the overall product
                </Text>
                <Button mt={10} bg="#facf0f" colorScheme="#facf0f" px="80px" py={7} color="black" fontWeight="bold">PROJECTS</Button>
                <Image margin="auto" mt="100px" borderRadius="50%" p={2} w="60px" h="60px" bg="black" src="https://media3.giphy.com/media/k3wQS2dbaRPYU9C5vG/giphy.gif"/>
            </Box>
        </Box>
    </Box>
  )
}