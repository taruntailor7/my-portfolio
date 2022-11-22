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
          <Box data-aos="fade-right" data-aos-duration="1000" w={{base:"",sm:"",md:"100%",lg:"45%"}} p={5} boxShadow='lg' borderRadius="20px">
            <Image src={boatImg} alt=""/>
          </Box>
          <Box w={{base:"",sm:"",md:"100%",lg:"50%"}} mt={{base:"",sm:"",md:"30px",lg:""}} data-aos="fade-left" data-aos-duration="1000">
            <Heading>boAt-lifestyle</Heading>
            <Text w={{base:"100%",sm:"",md:"70%",lg:"70%"}} mt={7} fontSize="18px">
            Clone of India's leading Wide range of electronic gadgets brand. A team project completed within 5 days with simple,well defined navigation.
            </Text>
            <Text mt="5"><b> Tech Stack : React JS, Redux, Chakra UI, and Json-Server.</b></Text>
            <Box w={{base:"90%",sm:"",md:"65%",lg:"60%"}} mt={10} display="flex" justifyContent="space-between">
              <a href="https://clone-boat-lifestyle.netlify.app/" target="blank"><Button bg="#facf0f" colorScheme="#facf0f" color="black">Live Link</Button></a>
              <a href="https://github.com/taruntailor7/boat-lifestyle-clone" target="blank"><Button bg="#238636" colorScheme="#238636" color="white">GitHub Link</Button></a>
            </Box>
          </Box>
        </Box>
        <Box w="90%" display={{base:"",sm:"",md:"block",lg:"flex"}} justifyContent="space-between" margin="auto" mt="100px">
          <Box w={{base:"",sm:"",md:"100%",lg:"45%"}} data-aos="fade-right" data-aos-duration="1000" p={5} boxShadow='lg' borderRadius="20px">
            <Image src={nifty} alt=""/>
          </Box>
          <Box w={{base:"",sm:"",md:"100%",lg:"50%"}} mt={{base:"",sm:"",md:"30px",lg:""}} data-aos="fade-left" data-aos-duration="1000">
            <Heading>Nifty</Heading>
            <Text w={{base:"100%",sm:"",md:"70%",lg:"70%"}} mt={7} fontSize="18px">Clone of Nifty PM which is a workflow collaboration tool that aligns project teams, accelerates project cycles and automates progress reporting. <br />
            </Text>
            <Text mt="5"><b> Tech Stack : HTML, CSS, Vanilla Javascript, ES-6 and JSON- Server. </b></Text>
            <Box w={{base:"90%",sm:"",md:"65%",lg:"60%"}} mt={10} display="flex" justifyContent="space-between">
              <a href="https://nifty-clone.netlify.app/" target="blank"><Button bg="#facf0f" colorScheme="#facf0f" color="black">Live Link</Button></a>
              <a href="https://github.com/taruntailor7/nifty-clone" target="blank"><Button bg="#238636" colorScheme="#238636" color="white">GitHub Link</Button></a>
            </Box>
          </Box>
        </Box>
        <Box w="90%" display={{base:"",sm:"",md:"block",lg:"flex"}} justifyContent="space-between" margin="auto" mt="100px">
          <Box w={{base:"",sm:"",md:"100%",lg:"45%"}} data-aos="fade-right" data-aos-duration="1000" p={5} boxShadow='lg' borderRadius="20px">
            <Image src="https://github.com/taruntailor7/fraazo-clone/raw/main/IMAGE/Screenshot%20(638).png" alt=""/>
          </Box>
          <Box w={{base:"",sm:"",md:"100%",lg:"50%"}} mt={{base:"",sm:"",md:"30px",lg:""}} data-aos="fade-left" data-aos-duration="1000">
            <Heading>FRAAZO</Heading>
            <Text w={{base:"100%",sm:"",md:"70%",lg:"70%"}} mt={7} fontSize="18px">
            Clone of India’s largest quick commerce start-ups on a mission to provide every Indian household farm-fresh fruits and vegetables daily, ordered from the convenience of their homes.
            </Text>
            <Text mt="5"><b> Tech Stack : HTML, CSS and Vanilla Javascript. </b></Text>
            <Box w={{base:"90%",sm:"",md:"65%",lg:"60%"}} mt={10} display="flex" justifyContent="space-between">
              <a href="https://clone-fraazo.netlify.app/" target="blank"><Button bg="#facf0f" colorScheme="#facf0f" color="black">Live Link</Button></a>
              <a href="https://github.com/taruntailor7/fraazo-clone" target="blank"><Button bg="#238636" colorScheme="#238636" color="white">GitHub Link</Button></a>
            </Box>
          </Box>
        </Box>
        <Box textAlign="center" mt="60px" data-aos="zoom-in-up" data-aos-duration="2000">
          <Heading mb={10}>GITHUB</Heading>
          <Box w="80%" display="flex" justifyContent="space-evenly" textAlign="center" margin="auto" boxShadow="2xl" p="5" borderRadius="10px">
            <Image w="50%" src="https://github-readme-stats.vercel.app/api?username=taruntailor7&count_private=true&show_icons=trueline_height=21&theme=merko" />	
            <Image w="50%" src="https://github-readme-streak-stats.herokuapp.com/?user=taruntailor7&theme=merko"/> 
          </Box>
          <Box textAlign="center" w="80%" margin="auto" boxShadow="2xl" p="5" borderRadius="10px" mt="10" >
            <a target="_black" href="https://github.com/taruntailor7"><Image coloe="white" borderRadius="10px" alt="taruntailor7's Activity Graph" src="https://activity-graph.herokuapp.com/graph?username=taruntailor7&custom_title=taruntailor7's%20Contribution%20Graph&theme=merko" /></a>
          </Box>
        </Box>
    </Box>
  )
}
