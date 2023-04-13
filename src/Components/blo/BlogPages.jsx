import React from 'react'
import {useParams} from "react-router-dom";
import { useQuery } from '@apollo/client';
import { GET_POST } from '../../graphql/queryse';
import Loader from '../shared/Loader';

function BlogPages() {
  const {slug}=useParams();
  const {loading,error,data} =useQuery(GET_POST,{
    variables:{slug}
  });

  if(loading) return <Loader/>
  if(error) return <h3>خطایی رخ داد , دوباره تلاش کتید</h3>

  console.log(data)
  return (
    <div>BlogPages</div>
  )
}

export default BlogPages