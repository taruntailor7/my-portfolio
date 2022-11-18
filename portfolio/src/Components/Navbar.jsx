import React from 'react'
import { Box, Image, Text } from '@chakra-ui/react'
import {NavLink} from 'react-router-dom'
import {Link} from 'react-scroll'
import { useMediaQuery } from '@chakra-ui/react'
import { DraweronTab } from '../Pages/Drawer'


export const Navbar = () => {
    const [isLargerThan769] = useMediaQuery('(min-width: 769px)')
    const links = [
        {
            to:"banner",
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
        <>
        { isLargerThan769 ? <Box position="fixed" top="0" width="100%" bg="white" zIndex="1000" id="navbar">
                    <Box w="90%" margin="auto" display="flex" justifyContent="space-between" p={6}>
                        <Box w="30%" display="flex">
                            {/* <Box></Box> */}
                            <Image boxShadow='inner' w="50px" h="50px" mt="-15px" mr="10px" borderRadius="50%" src="https://avatars.githubusercontent.com/u/66818449?v=4" />
                            <Link to="banner" spy={true} smooth={true} offset={50} duration={500}><Text className="navlink" _hover={{color:"#facf0f"}}><NavLink>TARUN TAILOR</NavLink></Text></Link>
                        </Box>
                        <Box w="33%" display="flex" justifyContent="space-between">
                            {links.map((elem)=>(
                                <Link className="hover-underline-animation" to={elem.to} key={elem.to} spy={true} smooth={true} offset={50} duration={500}><Text className="navlink" _hover={{color:"#facf0f"}}><NavLink>{elem.title}</NavLink></Text></Link>
                            ))}
                        </Box>
                    </Box>
                </Box> : <Box w="100%" fontSize="25px" display="flex" p="5" justifyContent="space-between" alignItems="center" margin="auto">
                        <Link to="banner" spy={true} smooth={true} offset={50} duration={500}><Text className="navlink" _hover={{color:"#facf0f"}}><NavLink>TARUN TAILOR</NavLink></Text></Link>
                        <Box>
                            {/* <RiMenu3Fill /> */}
                            <DraweronTab     />
                        </Box>
                </Box> }    
        </>
    )
}
