import React from 'react'
import {useParams} from "react-router-dom";
import {useQuery} from"@apollo/client";
import { GET_AUTHOR } from '../../graphql/queryse';
import {Avatar, Container, Grid, Typography} from "@mui/material";
import sanitizeHtml from "sanitize-html"
import CardElm from "../shared/CardElm";

function AuthorPage() {
    const {slug}=useParams()
    const {loading,error,data}=useQuery(GET_AUTHOR,{
        variables:{slug}
    })
    console.log(data || null)
    if(!data) return <h1>Plase waite</h1>
  return (
   <>
        <Container maxWidth="lg">

            <Grid container mt={10} spacing={2}>

            <Grid xs={12} item display="flex" flexDirection="column" alignItems="center">
            <Avatar src={data.author.avatar.url} sx={{width:250,height:250}}/>
            <Typography mt={4} color="#777" fontWeight={700} component="h3" variant='h5'>{data.author.name}</Typography>
            <Typography mt={2} color="gray" component="p" variant='h5'>{data.author.field}</Typography>
            </Grid>

            <Grid xs={12} mt={5} item>
            <div dangerouslySetInnerHTML={{__html:sanitizeHtml(data.author.description.html)}}></div>
            </Grid>

            <Grid xs={12} mt={5}>
                <Typography fontWeight={700} component="h4" variant='h5'>مقالات {data.author.name}</Typography>
            </Grid>

            <Grid container spacing={3}>
                {data.author.posts.map((post)=>(
                    <Grid item xs={12} sm={6} md={4} key={post.id}> 
                        <CardElm key={post.id} coverPhto={post.coverPhto} slug={post.slug} title={post.title}/>
                    </Grid> 
                ))}
            </Grid>

            </Grid>

        </Container>
   </>
  )
}

export default AuthorPage