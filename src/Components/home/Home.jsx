import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Blog from '../blo/Blog';
import Author from '../author/Author';

const Home = () => {
    return (
        <Container>
            <Grid container spacing={4}>

                <Grid item xs={13} md={3} mt={4}>
                    <Typography fontWeight={700} component="h3" variant='h5' mb={3}>نویسنده ها</Typography>
                    <Author/>
                </Grid>
                <Grid item  xs={13} md={9} mt={4}>
                <Typography fontWeight={700} component="h3" variant='h5' mb={3}>مقالات</Typography>
                <Blog/>
                </Grid>

            </Grid>
        </Container>
    );
};

export default Home;