import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'

export const Footer = () => {
  return (
    <Box w="100%" bg="#000000" p={10}>
        <Box w={{base:"",sm:"",md:"90%",lg:"80%"}} display="flex" margin="auto" color="white" border="1px solid white">
           <Box w={{base:"",sm:"",md:"70%",lg:"80%"}} mb="80px">
                <Text fontWeight="bold" fontSize="20px">TARUN TAILOR</Text>
                <Text w="65%" mt={6}>A FullStack focused Web Developer building the Frontend and Backend of Websites and Web Applications that leads to the success of the overall product</Text>
           </Box>
           <Box w={{base:"",sm:"",md:"20%",lg:"20%"}} mb="80px">
            <Text fontWeight="bold" fontSize="20px">SOCIAL</Text>
            <Box display="flex" gap={2} mt={6} fontSize="25px">
                {/* <Box p={2} borderRadius="5px" _hover={{color: 'black', bg:"#0a66c2"}}><BsLinkedin/></Box>
                <Box p={2} borderRadius="5px" _hover={{color: 'black', bg:"white"}}><BsGithub /></Box>
                <Box p={2} borderRadius="5px" _hover={{color: 'black', bg:"#1d9bf0"}}><BsTwitter/></Box>
                <Box p={2} borderRadius="5px" _hover={{color: 'black', bg:"white"}}><BsInstagram /></Box> */}
                <Box data-aos="flip-up"   w="40px" h='40px' display="flex" alignItems="center" bg='white' color="black" p="5px" borderRadius="8px" _hover={{bg:"#0a66c2", color:"white"}}>
                    <NavLink ><BsLinkedin fontSize="30px"/></NavLink>
                </Box>
                <Box data-aos="flip-left"  w="40px" h='40px' display="flex" alignItems="center" bg='white' color="black" p="4px" borderRadius="8px" _hover={{bg:"black", color:"white"}}>
                    <NavLink ><BsGithub fontSize="30px"/></NavLink>
                </Box>
                <Box  data-aos="flip-right" w="40px" h='40px' display="flex" alignItems="center" bg='white' color="black" p="4px" borderRadius="8px" _hover={{bg:"#1d9bf0", color:"white"}}>
                    <NavLink ><BsTwitter fontSize="30px"/></NavLink>
                </Box>
                <Box data-aos="flip-down" w="40px" h='40px' display="flex" alignItems="center" bg='white' color="black" p="4px" borderRadius="8px" className="instagram" _hover={{color: "white"}}>
                    <NavLink ><BsInstagram fontSize="30px"/></NavLink>
                </Box>
            </Box>
           </Box>
        </Box>
        <hr/>
        <Text mt={10} textAlign="center" color="white" fontSize="12px">© Copyright 2022. Made by Tarun Tailor</Text>
    </Box>
  )
}
