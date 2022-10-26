import { Box, Button, FormLabel, Heading, Input, Text, Textarea } from '@chakra-ui/react'
import React from 'react'

export const Contact = () => {
  return (
    <Box w="100%" py="70px" bg="#f0f0f0"  backgroundImage="https://img.freepik.com/premium-vector/light-gray-geometric-background-banner-diagonal-structure_149326-1850.jpg?w=2000" id="contact">
        <Box textAlign="center" id="about">
          <Heading mb={10}>CONTACT</Heading>
          <Box marginTop="10px" margin="auto" bg="#f9ce0f" w="50px" h="4px" borderRadius="10px"></Box>
          <Text w="50%" margin="auto" mt={7} fontSize="20px">Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</Text>
        </Box>
        <Box w={{base:"",sm:"",md:"80%",lg:"50%"}} data-aos="flip-left" p={10} margin="auto" bg="#ffffff" borderRadius="5px" mt="100px">
            <form>
                <FormLabel>Name</FormLabel>
                <Input placeholder='Enter Your Name' bg="#f0f0f0" size='lg' p={4} variant='unstyled' required/>
                <FormLabel mt={10}>Email</FormLabel>
                <Input placeholder='Enter Your Email' bg="#f0f0f0" size='lg' p={4} variant='unstyled' required/>
                <FormLabel mt={10}>Message</FormLabel>
                <Textarea bg="#f0f0f0" rows={10} placeholder='Enter Your Message' p={5} variant='unstyled' />
                <Button ml={{base:"",sm:"",md:"395px",lg:"540px"}} type="submit" fontWeight="bold" mt={8} px={10} py={6} bg="#facf0f" colorScheme="#facf0f" color="black">SUBMIT</Button>
            </form>
        </Box>
    </Box>
  )
}
