import {useEffect}  from 'react';
import {Box, Button, Center, Flex, Text} from "@chakra-ui/react";
import {Link, useNavigate} from "react-router-dom";
import * as dayjs from 'dayjs';
import axios from "axios";
import Clock from 'react-live-clock';


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
    

    
    const data = new Date();
    let week = data.getDay()

    // useEffect(() => {

    //     if (week === 0) 
    //     {
    //         week = week + 7
    //     }

    // }, [])
    
    // const week = week.getDay()
    // const day = getDay()

    
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
                        <Button onClick={() => { console.log(week)}}>test</Button>
                        
                    </Flex>
                </Center>
             </Box>
             </Flex>
         </Center>
        </>
    );
};

export default StartPageComponent;

function getDay() {
    throw new Error('Function not implemented.');
}
