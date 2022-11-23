import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react';

const LessonsComponent = () => {


    const name = ["test", "test1", "test2", "test3", "tes4", "test5", "tes6", "tes4", "test5", "test" ]
    return (
        <>z
        <Grid flexDirection={"column"} textAlign={"center"} justifyContent={"center"} templateColumns='repeat(7, 1fr)' gap={2}>
            {/*<GridItem display={"flex"} alignItems={"center"} justifyContent={"center"} w='80%' h='10' bg='blue.500'>Godziny</GridItem>*/}
            <GridItem display={"flex"} alignItems={"center"} justifyContent={"center"} w='100%' h='10' bg='blue.500'>Poniedziałek</GridItem>

            <GridItem display={"flex"} alignItems={"center"} justifyContent={"center"} w='100%' h='10' bg='blue.500'>Wtorek</GridItem>
            <GridItem display={"flex"} alignItems={"center"} justifyContent={"center"} w='100%' h='10' bg='blue.500'>Środa</GridItem>
            <GridItem display={"flex"} alignItems={"center"} justifyContent={"center"} w='100%' h='10' bg='blue.500'>Czwartek</GridItem>
            <GridItem display={"flex"} alignItems={"center"} justifyContent={"center"} w='100%' h='10' bg='blue.500'>Piątek</GridItem>
            <GridItem display={"flex"} alignItems={"center"} justifyContent={"center"} w='100%' h='10' bg='blue.500'>Sobota</GridItem>
            <GridItem display={"flex"} alignItems={"center"} justifyContent={"center"} w='100%' h='10' bg='blue.500'>Niedziela</GridItem>
      </Grid>

            <Grid mt={1} textAlign={"center"} templateColumns='repeat(7, 1fr)' gap={2}>
                {/*<GridItem display={"flex"} alignItems={"center"} justifyContent={"center"} w='80%' h='10' bg='blue.500'>Godzin</GridItem>*/}
                {/*<GridItem display={"flex"} alignItems={"center"} justifyContent={"center"} w='100%' h='10' bg='blue.500'>*/}
                {/*    */}
                {/*    */}
                {/*</GridItem>*/}

                {/*<GridItem display={"flex"} alignItems={"center"} justifyContent={"center"} w='100%' h='10' bg='blue.500'>Wtorek</GridItem>*/}
                {/*<GridItem display={"flex"} alignItems={"center"} justifyContent={"center"} w='100%' h='10' bg='blue.500'>Środa</GridItem>*/}
                {/*<GridItem display={"flex"} alignItems={"center"} justifyContent={"center"} w='100%' h='10' bg='blue.500'>Czwartek</GridItem>*/}
                {/*<GridItem display={"flex"} alignItems={"center"} justifyContent={"center"} w='100%' h='10' bg='blue.500'>Piątek</GridItem>*/}
                {/*<GridItem display={"flex"} alignItems={"center"} justifyContent={"center"} w='100%' h='10' bg='blue.500'>Sobota</GridItem>*/}
                {/*<GridItem display={"flex"} alignItems={"center"} justifyContent={"center"} w='100%' h='10' bg='blue.500'>Niedziela</GridItem>*/}

                {
                    name.map((less) => <GridItem  w='100%' h='10' bg='blue.500'>{less}</GridItem>)
                }
            </Grid>
        </>
    );
};

export default LessonsComponent;