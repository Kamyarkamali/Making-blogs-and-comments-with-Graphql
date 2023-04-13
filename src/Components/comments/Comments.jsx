import { Grid, Typography } from "@mui/material";
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

const Comments = ({slug}) => {
    const [name,setName]=useState("")
    const [text,setText]=useState("")
    const [email,setEmail]=useState("")
    return (
            <Grid container sx={{boxShadow:"rbga(0,0,0,0.1) 0px 4px 12px",borderRadius:4,py:1,mt:4}}>
                <Grid item xs={12} m={2}>
                    <Typography component="p" variant='h6' color="primary" fontWeight={700}>ارسال کامنت</Typography>
                </Grid>
                <Grid item xs={12} mt={2}>
    
      <TextField label="نام کاربری" variant="outlined" sx={{width:"100%"}} value={name} onChange={(e)=>setName(e.target.value)}/>
                </Grid>

                <Grid item xs={12} mt={2}>
    
    <TextField label="ایمیل" variant="outlined" sx={{width:"100%"}} value={email} onChange={(e)=>setEmail(e.target.value)}/>
              </Grid>
              <Grid item xs={12} mt={2}>
    
    <TextField label="متن کامنت" variant="outlined" sx={{width:"100%"}} value={text} onChange={(e)=>setText(e.target.value)} multiline minRows={4}/>
              </Grid>
            </Grid>
    );
}

export default Comments;