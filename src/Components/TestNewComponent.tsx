import React, {useState} from 'react';
import {mockClasses, mockHoursLesson, mockLesson} from "../mock";
import {Box, Button, Flex, Image} from "@chakra-ui/react";

const TestNewComponent = () => {

    const newarr = ["test1String", undefined, 2]

    const [testArr, setTestArr] = useState<any>([])

    const currentClassHour: any = []
    const currentClasName: any = []
    const [visible, setVisible] = useState(true)
    // const currentHour = time.substring(0, 5);
    for (let i = 0; mockClasses.length > i; i++)
        currentClasName.push(mockLesson.filter(classes => classes.className === mockClasses[i].classesName))

    for (let i = 0; mockHoursLesson.length > i; i++) {
        // currentClassHour.push(mockLesson.filter(classes => classes.lessonTime === mockHoursLesson[i].hours))
        currentClassHour.push(mockLesson.filter((classes: any) => classes.lessonTime === mockHoursLesson[i].hours))

        // console.log(mockLesson.filter(item => item.lessonTime === mockHoursLesson[i].hours ? item.lessonTime === mockHoursLesson[i].hours : " "))
    }

        for (let i = 0; i < currentClassHour.length; i++) {
            for (let j = 0; j < currentClassHour[i].length; j++) {
                // console.log(currentClassHour[i][j]);
                // currentClassHour[i][j]
                // ts-ignore
                if (currentClassHour[i][j].lessonTime.length == 0) {
                    console.log("test lenght")
                }
                console.log(currentClassHour[i][j])
            }
    }



    const FinalArrHour = []
    for (let i=0; i < currentClassHour.length; i++) {
        if (currentClassHour[i].length !== 0 ){
        for (let j=0; j < currentClassHour[i].length; j++) {
            // console.log(currentClassHour[i][j]);
            FinalArrHour.push(currentClassHour[i][j])
        }
            }
        else {
            FinalArrHour.push({
                    lessonName: " test1"
                }
            )
        }
    }

    console.log(currentClassHour)
    // console.log(currentClasName)

    const image1 = require("./pexels-garvin-st-villier-3311574.jpg")
    // console.log(FinalArr)
        return (
        <Box>
            <Box>
            {
                FinalArrHour.map(item => <li>{item.lessonName}</li>)
            }
            </Box>




        </Box>
    );
};

export default TestNewComponent;
