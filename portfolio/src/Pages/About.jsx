import { Box, Button, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export const About = () => {
  return (
    <Box w="100%" py="70px" bg="#f9f9f9">
        <Box textAlign="center" id="about">
          <Heading mb={10}>ABOUT ME</Heading>
          <Box marginTop="10px" margin="auto" bg="#f9ce0f" w="50px" h="4px" borderRadius="10px"></Box>
          <Text w="50%" margin="auto" mt={7} fontSize="20px">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</Text>
        </Box>
        <Box w="80%" display="flex" margin="auto" mt="100px" >
            <Box w="50%">
              <Text fontSize="25px" fontWeight="bold">Get to know me!</Text>
              <Text w="85%" fontSize="20px" textAlign="justify" mt={5}>I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section. <br />
                I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming
                I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
              </Text>
              <Button mt={10} bg="#facf0f" colorScheme="#facf0f" px="70px" py={7} color="black" fontWeight="bold">CONTACT</Button>
            </Box>
            <Box w="50%">
              <Text fontSize="25px" fontWeight="bold">My Skills</Text>
              <div class="skills" style={{marginTop:"-80px"}}>
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
                      <div class="bar">
                          <div class="info">
                          <span>Chakra UI</span>
                          </div>
                          <div class="progress-line"><span class="bootstrap"></span></div>
                          <div class="bar">
                          <div class="info">
                              <span>JAVASCRIPT</span>
                          </div>
                          <div class="progress-line">
                              <span class="javascript"></span>
                          </div>
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
