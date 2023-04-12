import React from 'react'
import {useParams} from "react-router-dom";
import {useQuery} from"@apollo/client";
import { GET_AUTHOR } from '../../graphql/queryse';
import {Avatar, Container, Grid, Typography} from "@mui/material"

function AuthorPage() {
    const {slug}=useParams()
    const {loading,error,data}=useQuery(GET_AUTHOR,{
        variables:{slug}
    })
    console.log(data)
  return (
   <>
        <Container maxWidth="lg">

            <Grid container mt={10}>

            <Grid xs={12} item display="flex" flexDirection="column" alignItems="center">
            <Avatar src={data.author.avatar.url} sx={{width:250,height:250}}/>
            <Typography mt={4} color="#777" fontWeight={700} component="h3" variant='h5'>{data.author.name}</Typography>
            <Typography mt={2} color="gray" component="p" variant='h5'>{data.author.field}</Typography>
            </Grid>

            <Grid xs={12} item>
                {data.author.description.html}
            </Grid>

            </Grid>

        </Container>
   </>
  )
}

export default AuthorPage