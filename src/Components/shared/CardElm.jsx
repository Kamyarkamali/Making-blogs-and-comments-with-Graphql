import { Card, CardHeader,Avatar, CardContent, CardActions, Typography, CardMedia, Divider, Button } from '@mui/material';
import React from 'react';
// import Link from "react-router-dom";

const CardElm = ({title,slug,coverPhto,author}) => {
    return (
        <div>
            <Card sx={{boxShadow:"rgba(0,0,0,0.1) 0px 4px 12px",borderRadius:4}}>
            <div>
                <CardHeader title={<Typography color="text.primary" component="p" variant='p'>{author.name}</Typography>} avatar={<Avatar sx={{marginLeft:4}} src={author.avatar.url}/>}/>
               
                </div>
               
                <CardMedia component="img" height="194" image={coverPhto.url}  alt={slug}/>
                
                <CardContent>
                    <Typography color="gray" component="h3" variant='g6' fontWeight={600}>{title}</Typography>
                <Divider variant='middle' sx={{margin:"10px"}}/>
                </CardContent>
                <CardActions>
                    {/* <Link to={`/blog/${slug}`}> */}
                    <Button sx={{width:"100%",borderRadius:3}} variant='outlined' size="medium">خواندن مقاله</Button>
                    {/* </Link> */}
                </CardActions>
            </Card>
            
        </div>
    );
};

export default CardElm;