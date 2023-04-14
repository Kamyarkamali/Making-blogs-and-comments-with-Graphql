import { Button, Grid, Typography } from "@mui/material";
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useMutation } from "@apollo/client";
import SEND_COMMENTS from "../../graphql/mutation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "../shared/Loader";



const Comments = ({slug}) => {
    const [name,setName]=useState("");
    const [text,setText]=useState("");
    const [email,setEmail]=useState("");


    const [senComment,{loading,error,data}]=useMutation(SEND_COMMENTS,
        {variables:{name,text,email,slug},
    })

    const sendHandeler=()=>{
        if(name && email && text ){
            senComment()
        } else{
            toast.warn("لطفا تمام موارد را پر کنید",{position:"top-center"})
        }
    }

    if(error) return <h6>error</h6>
    if(loading) return <Loader/>

    

    if(data){
        toast.success("کامنت شما ارسال شد و بعد از تایید نمایش داده میشود",{position:"top-center"})
    }

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
              <Grid>
                {
                    loading ? <Button variant="contained" disabled>درحال ارسال...</Button> : 
                <Button variant="contained" sx={{marginTop:3}} onClick={sendHandeler}>ارسال</Button>

                }
              </Grid>
              
              <ToastContainer/>
            </Grid>
    );
}

export default Comments;