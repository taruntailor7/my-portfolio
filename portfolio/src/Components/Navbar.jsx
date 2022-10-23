import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import {NavLink} from 'react-router-dom'

export const Navbar = () => {
    const links = [
        {
            to:"",
            title:"HOME"
        },
        {
            to:"about",
            title:"ABOUT"
        },
        {
            to:"projects",
            title:"PROJECTS"
        },
        {
            to:"contact",
            title:"CONTACT"
        }
    ]
    return (
        <Box position="fixed" top="0" width="100%" bg="white">
            <Box w="90%" margin="auto" display="flex" justifyContent="space-between" p={6} border="1px solid black">
                <Box w="10%" border="1px solid black">
                    <Box></Box>
                    <Text className="navlink">TARUN TAILOR</Text>
                </Box>
                <Box w="33%" display="flex" justifyContent="space-between" border="1px solid black">
                    {links.map((elem)=>(
                        <NavLink key={elem.to}><Text className="navlink" >{elem.title}</Text></NavLink>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}
