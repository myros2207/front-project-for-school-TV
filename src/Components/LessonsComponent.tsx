import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react';

const LessonsComponent = () => {
    return (
        <>
        <Grid templateColumns='repeat(7, 1fr)' gap={2}>
        <GridItem w='100%' h='10' bg='blue.500'>Pon</GridItem>
        <GridItem w='100%' h='10' bg='blue.500' />
        <GridItem w='100%' h='10' bg='blue.500' />
        <GridItem w='100%' h='10' bg='blue.500' />
        <GridItem w='100%' h='10' bg='blue.500' />
        <GridItem w='100%' h='10' bg='blue.500' />
        <GridItem w='100%' h='10' bg='blue.500' />
      </Grid>
        </>
    );
};

export default LessonsComponent;