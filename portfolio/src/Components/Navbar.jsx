import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import {NavLink} from 'react-router-dom'

export const Navbar = () => {
    const links = [
        {
            to:"/",
            title:"HOME"
        },
        {
            to:"/",
            title:"ABOUT"
        },
        {
            to:"/",
            title:"PROJECTS"
        },
        {
            to:"/",
            title:"CONTACT"
        }
    ]
    return (
        <Box w="90%" margin="auto" display="flex" justifyContent="space-between" p={4} border="1px solid black">
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
    )
}
