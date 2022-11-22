import React, {useState} from 'react';
import {Box, Button, Center, Flex, Input, Text} from "@chakra-ui/react";

const LoginComponent = () => {

    const [isLogin, setIsLogin] = useState(true)



    const RegisterLink = () => {
        setIsLogin(false)
    }

    const Register = () => {

    }
     return (
        <>
            <Center display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} h={"100vh"}>
            <Box w={"50vw"}>
                <Flex flexDirection={"column"}>
                    <Text textAlign={"center"}>Login</Text>
            <Input placeholder={"login"}/>
                 <Button>Login</Button>
                </Flex>
            </Box>

            </Center>
        </>
    );
};

export default LoginComponent;