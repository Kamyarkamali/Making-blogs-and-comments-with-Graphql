import React from 'react'
import {useNavigate, useParams} from "react-router-dom";
import { useQuery } from '@apollo/client';
import { GET_POST } from '../../graphql/queryse';
import Loader from '../shared/Loader';
import {Avatar, Box, Container, Grid, Typography} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import sanitizeHtml from "sanitize-html";
import CardElm from "../shared/CardElm";
import Comments from '../comments/Comments';

function BlogPages() {
  const navigate=useNavigate();
  const {slug}=useParams();
  const {loading,error,data} =useQuery(GET_POST,{
    variables:{slug}
  });

  if(loading) return <Loader/>
  if(error) return <h3>خطایی رخ داد , دوباره تلاش کتید</h3>

  console.log(data)
  return (
    <Container maxWidth="lg">

    <Grid container>

    <Grid item xs={12} mt={9} display="flex" justifyContent="space-between">
    <Typography color="primary" component="h2" variant='h4' fontWeight={600}>
      {data.post.title}
    </Typography>
    <ArrowBackIcon color='primary' style={{cursor:"pointer"}} onClick={()=>navigate(-1)}/>
    </Grid>

    <Grid item xs={12} mt={6}>
    <img src={data.post.coverPhto.url} alt='image' width="100%" height="80%" style={{borderRadius:14}}/>
    </Grid>

    <Grid item display="flex" alignItems="center">
    <Avatar src={data.post.author.avatar.url} sx={{width:80,height:80,marginLeft:2}}/>
    <Box component="div">
    <Typography component="p" variant='h4' color="primary" fontWeight={600}>{data.post.author.name}</Typography>
    <Typography component="p" variant='p' color="gray" fontWeight={600}>{data.post.author.field}</Typography> 
    </Box>
    </Grid>

    <Grid item xs={12} mt={3}>
    <div dangerouslySetInnerHTML={{__html:sanitizeHtml(data.post.content.html)}}></div>
    </Grid>

    <Grid item>
    <Comments slug={slug}/>
    </Grid>

    </Grid>

    </Container>
  )
}

export default BlogPages