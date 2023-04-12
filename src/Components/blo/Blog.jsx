import React from 'react';
import { useQuery } from '@apollo/client';
import GET_BLOGS_INFO from '../../graphql/queryse';
import { Grid } from '@mui/material';
import CardElm from "../shared/CardElm"
// import { Link } from 'react-router-dom';

const Blog = () => {
    const {loading,data,error}=useQuery(GET_BLOGS_INFO)
    if(loading) return <h2>Loading...</h2>
    return (
        <Grid spacing={2} container>
               {data.posts.map((post,index)=>(
                
                <Grid key={index} item xs={12} sm={6} md={4}>
                    <CardElm {...post} key={index}/>
            </Grid>
                
               ))}
        </Grid>
    );
};

export default Blog;