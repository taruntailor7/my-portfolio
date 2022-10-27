import { Box, Button, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import boatImg from "../assets/boatImg.png"
import nifty from "../assets/nifty.png"

export const Projects = () => {
  return (
    <Box w="100%" bg="#ffffff" py="70px" id="projects">
        <Box textAlign="center" id="about">
            <Heading mb={10}>PROJECTS</Heading>
            <Box marginTop="10px" margin="auto" bg="#f9ce0f" w="50px" h="4px" borderRadius="10px"></Box>
            <Text w={{base:"",sm:"",md:"85%",lg:"50%"}}  margin="auto" mt={7} fontSize="20px">Here you will find some of the personal and clients projects that I created with each project containing its own case study</Text>
        </Box>
        <Box w="90%" display={{base:"",sm:"",md:"block",lg:"flex"}} justifyContent="space-between" margin="auto" mt="100px">
          <Box data-aos="fade-right" w={{base:"",sm:"",md:"100%",lg:"45%"}} p={5} boxShadow='lg' borderRadius="20px">
            <Image src={boatImg} alt=""/>
          </Box>
          <Box w={{base:"",sm:"",md:"100%",lg:"50%"}} mt={{base:"",sm:"",md:"30px",lg:""}} data-aos="fade-left">
            <Heading>boAt-lifestyle</Heading>
            <Text w={{base:"100%",sm:"",md:"70%",lg:"70%"}} mt={7} fontSize="18px">Regarding boAt</Text>
            <Box w={{base:"60%",sm:"",md:"35%",lg:"35%"}} mt={10} display="flex" justifyContent="space-between">
              <a href="https://clone-boat-lifestyle.netlify.app/" target="blank"><Button bg="#facf0f" colorScheme="#facf0f" color="black">Live Link</Button></a>
              <a href="https://github.com/taruntailor7/boat-lifestyle-clone" target="blank"><Button bg="#facf0f" colorScheme="#facf0f" color="black">GitHub Link</Button></a>
            </Box>
          </Box>
        </Box>
        <Box w="90%" display={{base:"",sm:"",md:"block",lg:"flex"}} justifyContent="space-between" margin="auto" mt="100px">
          <Box w={{base:"",sm:"",md:"100%",lg:"45%"}} data-aos="fade-right" p={5} boxShadow='lg' borderRadius="20px">
            <Image src={nifty} alt=""/>
          </Box>
          <Box w={{base:"",sm:"",md:"100%",lg:"50%"}} mt={{base:"",sm:"",md:"30px",lg:""}} data-aos="fade-left">
            <Heading>Nifty</Heading>
            <Text w={{base:"100%",sm:"",md:"70%",lg:"70%"}} mt={7} fontSize="18px">Regarding Nifty</Text>
            <Box w={{base:"60%",sm:"",md:"35%",lg:"35%"}} mt={10} display="flex" justifyContent="space-between">
              <a href="https://nifty-clone.netlify.app/" target="blank"><Button bg="#facf0f" colorScheme="#facf0f" color="black">Live Link</Button></a>
              <a href="https://github.com/taruntailor7/nifty-clone" target="blank"><Button bg="#facf0f" colorScheme="#facf0f" color="black">GitHub Link</Button></a>
            </Box>
          </Box>
        </Box>
        <Box w="90%" display={{base:"",sm:"",md:"block",lg:"flex"}} justifyContent="space-between" margin="auto" mt="100px">
          <Box w={{base:"",sm:"",md:"100%",lg:"45%"}} data-aos="fade-right" p={5} boxShadow='lg' borderRadius="20px">
            <Image src="https://github.com/taruntailor7/fraazo-clone/raw/main/IMAGE/Screenshot%20(638).png" alt=""/>
          </Box>
          <Box w={{base:"",sm:"",md:"100%",lg:"50%"}} mt={{base:"",sm:"",md:"30px",lg:""}} data-aos="fade-left">
            <Heading>FRAAZO</Heading>
            <Text w={{base:"100%",sm:"",md:"70%",lg:"70%"}} mt={7} fontSize="18px">Regarding Fraazo</Text>
            <Box w={{base:"60%",sm:"",md:"35%",lg:"35%"}} mt={10} display="flex" justifyContent="space-between">
              <a href="https://clone-fraazo.netlify.app/" target="blank"><Button bg="#facf0f" colorScheme="#facf0f" color="black">Live Link</Button></a>
              <a href="https://github.com/taruntailor7/fraazo-clone" target="blank"><Button bg="#facf0f" colorScheme="#facf0f" color="black">GitHub Link</Button></a>
            </Box>
          </Box>
        </Box>
    </Box>
  )
}
