import { Box, Button, Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Typed from 'react-typed';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import './Banner.css'
import { Link } from 'react-scroll';

export const Banner = () => {
  return (
    <Box w="100%" mt={{md:"0px",lg:"80px"}} bg="#f1f1f1" backgroundImage="https://img.freepik.com/premium-vector/light-gray-geometric-background-banner-diagonal-structure_149326-1850.jpg?w=2000" py={10} className="banner">
        <Box w="100%" display="flex" >
            <Box w={{base:"none",sm:"none",md:"",lg:"5%"}}  h="100%" mt="170px" data-aos="fade-right">
                <VStack display={{base:"none",sm:"none",md:"block",lg:"block"}} bg="white" p="2">
                    <Box w="60px" h='60px' display="flex" alignItems="center" bg='white' px="8px" borderRadius="8px" _hover={{bg:"#0a66c2", color:"white"}}>
                        <a href="https://www.linkedin.com/in/tarun-tailor-7bb4b5157/" target="blank"><BsLinkedin fontSize="40px"/></a>
                    </Box>
                    <Box w="60px" h='60px' display="flex" alignItems="center" bg='white' px="8px" borderRadius="8px" _hover={{bg:"black", color:"white"}}>
                        <a href="https://github.com/taruntailor7" target="blank"><BsGithub fontSize="40px"/></a>
                    </Box>
                    <Box w="60px" h='60px' display="flex" alignItems="center" bg='white' px="8px" borderRadius="8px" _hover={{bg:"#1d9bf0", color:"white"}}>
                        <a href="https://twitter.com/Taruntailor9" target="blank"><BsTwitter fontSize="40px"/></a>
                    </Box>
                    <Box w="60px" h='60px' display="flex" alignItems="center" bg='white' px="8px" borderRadius="8px" _hover={{bg:"#e8e6d6",color: "#e41f1a"}}>
                        <a href="https://mail.google.com/mail/u/0/#inbox" target="blank"><SiGmail fontSize="40px"/></a>
                    </Box> 
                    <Box w="60px" h='60px' display="flex" alignItems="center" bg='white' px="8px" borderRadius="8px" className="instagram" _hover={{color: "white"}}>
                        <a href="https://www.instagram.com/" target="blank"><BsInstagram fontSize="40px"/></a>
                    </Box>  
                </VStack>
            </Box>
            <Box w="95%" textAlign="center" mt="170px">
                <Heading fontSize={{base:"30px",sm:"30px",md:"50px",lg:"70px"}}>HEY, I'M <Typed strings={['TARUN TAILOR','A FullStack Developer']}  typeSpeed={100} backSpeed={100} loop /></Heading>
                <Text w={{base:"100%",sm:"100%",md:"80%",lg:"50%"}} margin="auto" mt={10} fontSize="20px">
                    A FullStack focused Web Developer building the Frontend and Backend of Websites and Web Applications that leads to the success of the overall product
                </Text>
                <Link to="projects" spy={true} smooth={true} offset={50} duration={500}><Button mt={10} bg="#facf0f" colorScheme="#facf0f" px="80px" py={7} color="black" fontWeight="bold">PROJECTS</Button></Link>
                <Image margin="auto" mt="120px" borderRadius="50%" p={2} w="60px" h="60px" bg="black" src="https://media3.giphy.com/media/k3wQS2dbaRPYU9C5vG/giphy.gif"/>
            </Box>
        </Box>
    </Box>
  )
}
