import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import {NavLink} from 'react-router-dom'
import {Link} from 'react-scroll'

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
        <Box position="fixed" top="0" width="100%" bg="white" zIndex="1000">
            <Box w="90%" margin="auto" display="flex" justifyContent="space-between" p={6}>
                <Box w="10%"    >
                    {/* <Box></Box> */}
                    <Text className="navlink"><NavLink>TARUN TAILOR</NavLink></Text>
                </Box>
                <Box w="33%" display="flex" justifyContent="space-between">
                    {links.map((elem)=>(
                        <Link to={elem.to} key={elem.to} spy={true} smooth={true} offset={50} duration={500}><Text className="navlink"><NavLink>{elem.title}</NavLink></Text></Link>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}
