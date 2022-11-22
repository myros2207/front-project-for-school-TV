import React from 'react';
import {Box, Button, Center, Flex, Text} from "@chakra-ui/react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const StartPageComponent = () => {

    const navigate = useNavigate()

    const LoginUser = async ()  => {
        try {
            const isLogin = await  axios.post("http://localhost:4598/login", {
                "login" : "user",
                "password" : "user"
            })
            if (isLogin.data === true) {
                navigate("/lesson")
            }
        }
        catch {

        }

    }

    return (
        <>
         <Center>
             <Flex flexDirection={"column"} alignItems={"center"} h={"100vh"} justifyContent={"center"}>
             <Box w={["100vw","40rem"]} h={["10rem"]} border={"1px"} display={"flex"} justifyContent={"center"} alignItems={"center"}>


                <Center >
                    <Flex justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
                    <Text>Select Account</Text>
                    <Link to={"/login"}><Button w={"5rem"}>Admin</Button></Link>
                        <Button onClick={LoginUser} w={"5rem"}>User</Button>
                    </Flex>
                </Center>
             </Box>
             </Flex>
         </Center>
        </>
    );
};

export default StartPageComponent;