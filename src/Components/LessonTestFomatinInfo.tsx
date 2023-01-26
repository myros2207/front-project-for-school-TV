import React, {useState, useEffect} from 'react';
import {mockLesson, mockHoursLesson, mockClasses} from '../mock';
import {Box, Flex} from "@chakra-ui/react";
import {IClasses, IHours, ILesson} from "./interfaceTest";

const LessonTest = () => {


    const currentClass: any = []
    const currentEnd:any = []
    // const currentHour = time.substring(0, 5);
    for (let i = 0; mockHoursLesson.length > i; i++)
        currentClass.push(mockLesson.find(classObj => classObj.lessonTime === mockHoursLesson[i].hours))

    // for(let i = 0; mockClasses.length > i; i++) {
    //     // currentEnd.push(currentClass.find((item:any) => item === undefined? "none" : " "))
    // }




    console.log(currentClass)
    return (
        <Flex w={"100%"}>
            <Box m={"20px"}>Current Time: {mockHoursLesson.map(test => <li>{test.hours}</li>)}</Box>
            <Box>
                <Flex>
                    {
                        mockClasses.map(item => <Box ml={"80px"}>{item.classesName}</Box>)
                    }
                </Flex>


                <Box  border={"1px solid"} w={"100%"} m={"20px"}>

                    {
                        currentClass.map((item: any) =>
                            <Box bg={"red.100"}>
                                <Box>{item === undefined ? <Box display={"none"}>" "</Box> : <h1>{item.className}</h1>}</Box>
                                <Box bg={"purple.50"}>
                                { item === undefined ? <li>" "</li> : <li>{item.lessonName} {item.hallNumber} {item.className}</li>}
                                </Box>
                            </Box>
                        )
                    }

                </Box>
            </Box>
        </Flex>
    );
};

export default LessonTest;