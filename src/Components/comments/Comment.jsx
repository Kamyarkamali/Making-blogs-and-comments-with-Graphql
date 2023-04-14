import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_COMMENT } from '../../graphql/queryse';
import { Avatar, Box, Grid, Typography } from '@mui/material';
import Loader from '../shared/Loader';

const Comment = ({slug}) => {
    const {loading,error,data}=useQuery(GET_COMMENT,{variables:{slug}})
    if(loading) return <Loader/>
    return (
        <Grid container sx={{boxShadow:"rbga(0,0,0,0.1) 0px 4px 12px",py:1,mt:3}}>
            <Grid item xs={12}>
            <Typography component="p" variant='h6' color="primary" fontWeight={700}>کامنت ها</Typography>
            </Grid>
            {data&&data.comments.map((comment)=>(
                <Grid item xs={12} key={comment.id} m={2} border="1px solid silver" borderRadius={2} py={2}> 
                    <Box component="div" display="flex" alignItems="center">
                      <Avatar sx={{marginRight:2}}>{comment.name[0]}</Avatar>  
                      <Typography mr={2}>{comment.name}</Typography>
                    </Box>
                    <Typography component="p" variant='p' mr={2} mt={2}>{comment.text}</Typography>
                </Grid>
                    
            ))}
        </Grid>
    );
};

export default Comment;