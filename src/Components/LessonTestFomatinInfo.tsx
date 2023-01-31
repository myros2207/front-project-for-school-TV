import React, {useState, useEffect} from 'react';
import {mockLesson, mockHoursLesson, mockClasses} from '../mock';
import {Box, Flex} from "@chakra-ui/react";
import {IClasses, IHours, ILesson} from "./interfaceTest";
import TestNewComponent from "./TestNewComponent";

const LessonTest = () => {


    const currentClass: any = []
    const currentClasName: any = []
    const [visible, setVisible] = useState(true)
    // const currentHour = time.substring(0, 5);
    for (let i = 0; mockClasses.length > i; i++)
        currentClasName.push(mockLesson.filter(classes => classes.className === mockClasses[i].classesName))

    for (let i = 0; mockHoursLesson.length > i; i++) {
        currentClass.push(mockLesson.find((classObj: any) => classObj === undefined ? " " : classObj.lessonTime === mockHoursLesson[i].hours))
        // currentClass.push(currentClasName[0].find((classObj :any) => classObj.lessonTime === mockHoursLesson[i].hours))
    }
    // for(let i = 0; mockClasses.length > i; i++) {
    //     // currentEnd.push(currentClass.find((item:any) => item === undefined? "none" : " "))
    // }

    // console.log(currentClass.map((item :any) => item))

    // console.log(currentClasName)
    // console.log(currentClass)
    return (
        <Flex w={"100%"}>
            <Box m={"20px"}> {mockHoursLesson.map(test => <li>{test.hours}</li>)}</Box>
            <Box>
                {/*<Box display={visible ? "block" : "none"}>*/}
                {/*    <Flex>*/}
                {/*        {*/}
                {/*            mockClasses.map(item => <Box ml={"80px"}>{item.classesName}*/}

                {/*            </Box>)*/}
                {/*        }*/}
                {/*    </Flex>*/}

                {/*    <Box>*/}
                {/*        {*/}
                {/*            currentClasName.map((classes: any) => classes === undefined ? " " :*/}
                {/*                <li>{classes.className}</li>)*/}
                {/*        }*/}
                {/*    </Box>*/}
                {/*</Box>*/}

                <Flex>
                    <Box border={"1px solid"} w={"100%"} m={"20px"}>

                        {
                            currentClass.map((item: any) =>
                                <Box bg={"red.100"}>
                                    {/*<Box>{item === undefined ? <Box display={"none"}>" "</Box> : <h1>{item.className}</h1>}</Box>*/}
                                    <Box bg={"purple.50"}>
                                        {item === undefined ? <li>" "</li> :
                                            <li>{item.lessonName} {item.hallNumber} {item.className}</li>}
                                    </Box>
                                </Box>
                            )
                        }

                    </Box>
                    <TestNewComponent/>
                </Flex>
            </Box>

        </Flex>
    );
};

export default LessonTest;