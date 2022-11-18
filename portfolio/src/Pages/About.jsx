import { Box, Button, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-scroll'

export const About = () => {

  const onButtonClick = () => {
      // using Java Script method to get PDF file
      fetch('Tarun_Resume.pdf').then(response => {
          response.blob().then((blob) => {
              // Creating new object of PDF file
              const fileURL = window.URL.createObjectURL(blob);
              // Setting various property values
              let alink = document.createElement('a');
              alink.href = fileURL;
              alink.download = 'Tarun_Resume.pdf';
              alink.click();
          })
      })
  } 

  return (
    <Box w="100%" py="70px" bg="#f9f9f9">
        <Box textAlign="center" id="about">
          <Heading mb={10}>ABOUT ME</Heading>
          <Box marginTop="10px" margin="auto" bg="#f9ce0f" w="50px" h="4px" borderRadius="10px"></Box>
          <Text w={{base:"",sm:"",md:"85%",lg:"50%"}} margin="auto" mt={7} fontSize="20px">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</Text>
        </Box>
        <Box borderRadius="10px" p={{base:"6",sm:"6",md:"10",lg:"10"}} boxShadow='dark-lg' w="85%" data-aos="zoom-in-up" data-aos-duration="2000" display={{base:"",sm:"",md:"block",lg:"flex"}} justifyContent="space-between" margin="auto" mt="100px" >
            <Box w={{base:"",sm:"",md:"100%",lg:"45%"}} textAlign="center">
              <Text fontSize="25px" fontWeight="bold">Get to know me!</Text>
              <Image boxShadow='inner' src="https://avatars.githubusercontent.com/u/66818449?v=4" w="250px" borderRadius="50%" margin="auto" mt={3}/>
              <Text  w="95%" fontSize="20px" textAlign="justify" mt={5}>I'm a <b>TARUN TAILOR</b> Fullstack Web Developer building the Front-end, Backend of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.<br />
              </Text>
              <Box w="95%" display="flex" justifyContent="space-between">
                <Button onClick={onButtonClick} mt={10} bg="#facf0f" colorScheme="#facf0f" px={{base:"30px",sm:"30px",md:"60px",lg:"70px"}} py={7} color="black" fontWeight="bold">Download Resume</Button>
                <Link to="contact" spy={true} smooth={true} offset={50} duration={500}><Button mt={10} bg="#facf0f" colorScheme="#facf0f" px={{base:"30px",sm:"30px",md:"60px",lg:"70px"}} py={7} color="black" fontWeight="bold">CONTACT</Button></Link>
              </Box>
            </Box>
            <Box w={{base:"",sm:"",md:"100%",lg:"45%"}}>
              <Text fontSize="25px" fontWeight="bold" textAlign="center" mt={{base:"",sm:"",md:"50px",lg:"-5px"}} >My Skills</Text>
              <div class="skills" >
                <div class="skills-bar">
                  <div class="bar">
                    <div class="info">
                      <span>HTML</span>
                    </div>
                    <div class="progress-line"><span class="html"></span></div>
                          <div class="bar">
                            <div class="info">
                                <span>CSS</span>
                            </div>
                            <div class="progress-line"><span class="css"></span></div>
                          </div>
                      <div class="bar">
                      <div class="bar">
                          
                          <div class="bar">
                          <div class="info">
                              <span>JAVASCRIPT</span>
                          </div>
                          <div class="progress-line"><span class="javascript"></span></div>
                          <div class="bar">
                              <div class="info">
                                <span>React</span>
                              </div>
                              <div class="progress-line"><span class="r"></span></div>
                          </div>
                          <div class="bar">
                              <div class="info">
                                <span>JAVA PROGRAMMING</span>
                              </div>
                              <div class="progress-line"><span class="c"></span></div>
                          </div>
                          <div class="bar">
                            <div class="info">
                                <span>Node JS</span>
                            </div>
                            <div class="progress-line"><span class="css"></span></div>
                          </div>
                          <div class="info">
                            <span>Express JS</span>
                          </div>
                          <div class="progress-line"><span class="bootstrap"></span></div>
                          <div class="bar">
                              <div class="info">
                                <span>Mongo DB</span>
                              </div>
                              <div class="progress-line"><span class="r"></span></div>
                          </div>
                          </div>
                      </div>
                      </div>
                  </div>
                </div>
              </div>
            </Box>
        </Box>
    </Box>
  )
}
