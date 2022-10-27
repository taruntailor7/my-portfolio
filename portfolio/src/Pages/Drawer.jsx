import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { RiMenu3Fill } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll'

export const DraweronTab = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
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
            <Button ref={btnRef} colorScheme='white' bg='white' color="black" fontSize="25px" onClick={onOpen}>
            <RiMenu3Fill />
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader></DrawerHeader>

                <DrawerBody>
                    <Box w="100%">
                        {links.map((elem)=>(
                            <Box textAlign="center" borderBottom="1px solid black" p="4">
                                <Link className="hover-underline-animation" to={elem.to} key={elem.to} spy={true} smooth={true} offset={50} duration={500}><Text className="navlink" _hover={{color:"#facf0f"}}><NavLink>{elem.title}</NavLink></Text></Link>
                            </Box>
                            // <h1>ok</h1>
                        ))}
                    </Box>
                </DrawerBody>

                <DrawerFooter>
                    
                </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}
