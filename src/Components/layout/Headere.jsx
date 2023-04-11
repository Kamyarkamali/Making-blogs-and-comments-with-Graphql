import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Container, Toolbar, Typography } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const Headere = () => {
    return (
        <AppBar position='sticky'>
        <Container maxWidth="lg">

            <Toolbar>
                <Typography component="h1" variant='h5' flex={1}>وبلاگ
                </Typography>
            <MenuBookIcon/>
            </Toolbar>
        </Container>
        </AppBar>
    );
};

export default Headere;