import React from 'react';
import { GET_AUTHORS_INFO } from '../../graphql/queryse';
import { useQuery } from '@apollo/client';
import { Avatar, Grid, Typography } from '@mui/material';
import {Link} from "react-router-dom"

const Author = () => {
    const {loading,data,error}=useQuery(GET_AUTHORS_INFO)
    if(error)return <h2>error...</h2>
    if(loading)return <h2>Loading...</h2>
    const {authors}=data
    
    return (
        <Grid container>
                {authors.map((author,index)=>(
            <Grid item key={index}>
                <Link to={`/authors/${author.slug}`}>
                    <Avatar src={author.avatar.url}/>
                <Typography component="p" variant='p' sx={{marginTop:3}}>کامیار کمالی کازانی</Typography>
                </Link>
            </Grid>
                ))}
        </Grid>
    );
};

export default Author;