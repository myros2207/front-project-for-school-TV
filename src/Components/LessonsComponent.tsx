import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react';

const LessonsComponent = () => {
    return (
        <>
        <Grid templateColumns='repeat(7, 1fr)' gap={2}>
        <GridItem textAlign={"center"} w='100%' h='10' bg='blue.500'>Poniedziałek</GridItem>
        <GridItem textAlign={"center"} w='100%' h='10' bg='blue.500'>Wtorek</GridItem>
        <GridItem textAlign={"center"} w='100%' h='10' bg='blue.500'>Środa</GridItem>
        <GridItem textAlign={"center"} w='100%' h='10' bg='blue.500'>Czwartek</GridItem>
        <GridItem textAlign={"center"} w='100%' h='10' bg='blue.500'>Piątek</GridItem>
        <GridItem textAlign={"center"} w='100%' h='10' bg='blue.500'>Sobota</GridItem>
        <GridItem textAlign={"center"} w='100%' h='10' bg='blue.500'>Niedziela</GridItem>
      </Grid>
        </>
    );
};

export default LessonsComponent;