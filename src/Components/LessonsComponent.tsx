import { Flex, Grid, GridItem, Box, Text, Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import {bakgroundGlobal, bakgroundLessonList, bakgroundMenu, bakgroundList} from './UI/Color';
import Clock from 'react-live-clock';
import axios from 'axios';

const LessonsComponent = () => { 


    const name = ["test", "test1", "test2", "test3", "tes4", "test5", "tes6", "tes7", "test8", "test9", "test10", "test11", "tes12", "tes13", "tes14", "test15"]

    const [lesson, setLesson] = useState()

    const classesName = ["Programin", "e-sport", "Grafik"]

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const d = new Date();
    let day = weekday[d.getDay()]; 

    
    let week = d.getDay()

    // useEffect(()  => {

    //     const TestNumerDay = async () => {
    //     if (week === 0) 
    //     {
    //         week = week + 7
    //     }
    //    await GetLessonByDay
    // }

    //     TestNumerDay()
    // }, [])

    useEffect(() => {
      GetLessonByDay()
    }, [])
    

    const GetLessonByDay = async () => {
        if (week === 0) 
            {
                week = week + 7
            }
        const listLesson = await axios.get("http://localhost:4598/lesson/"+week)
        setLesson(listLesson.data)
    }

    const ChekrError = () => {
        try {

        }
        catch {
            console.log("te")
        }
    }

    
    return (

        <div>
            <Box>
            <Flex bg={bakgroundGlobal} >
                <Box w={"9vw"} mr="1vw" bg={bakgroundMenu}>
                    {/* @ts-ignore */}
                    <Text h="5vh" fontSize={"2rem"} display={"flex"} flexDirection ="column" alignItems={"center"} justifyContent={'center'}> 
                     <Clock onChange={ChekrError} format={'HH:mm:ss'} ticking={true} timezone={'Europe/Warsaw'} />
                    {/*Time*/}
                     </Text>
                  <Box display={"flex"} flexDirection="column">
                    <Box h ="95vh" bg="blur">
                            {
                                name.map((test) => <Box display={"flex"} flexDirection="column" alignItems={"center"} justifyContent={"center"} mt="1" h="5vh"bg={bakgroundList} >{test}</Box>)
                            }
                        
                    </Box>
                    </Box>         
                </Box>
                
                    <Box textAlign={"center"} w='90vw' h='5vh' bg={bakgroundMenu}>
                        <Text h="5vh" fontSize={"2rem"} display={"flex"} flexDirection ="column" alignItems={"center"} justifyContent={'center'}>{day}</Text>

                            <Flex>
                                {
                                    classesName.map((name) => <Box>{name}</Box>)
                                }
                            </Flex>
                            <Box display={"flex"}>
                                <Box bg={bakgroundLessonList} mt="1" w="5" h="94vh" display={"flex"} flexDirection={"column"} >

                                </Box>
                                <Box bg={bakgroundLessonList} ml="2" mt="1" w="5" h="94vh" display={"flex"} flexDirection={"column"} >
                                    
                                </Box>
                                <Box bg={bakgroundLessonList} ml="2" mt="1" w="5" h="94vh" display={"flex"} flexDirection={"column"} >
                                    
                                </Box>
                                <Box bg={bakgroundLessonList} ml="2" mt="1" w="5" h="94vh" display={"flex"} flexDirection={"column"} >
                                    
                                </Box>
                                <Box bg={bakgroundLessonList} ml="2" mt="1" w="5" h="94vh" display={"flex"} flexDirection={"column"} >
                                    
                                </Box>
                                <Box bg={bakgroundLessonList} ml="2" mt="1" w="5" h="94vh" display={"flex"} flexDirection={"column"} >
                                    
                                </Box>
                                
                                <Button onClick={GetLessonByDay}>Chek</Button>
                            </Box>
                    </Box>
                

            </Flex>

            </Box>
        </div>
    );
};

export default LessonsComponent;