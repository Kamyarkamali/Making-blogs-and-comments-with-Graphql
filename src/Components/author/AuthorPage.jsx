import React from 'react'
import {useParams} from "react-router-dom";
import {useQuery} from"@apollo/client";
import { GET_AUTHOR } from '../../graphql/queryse';

function AuthorPage() {
    const {slug}=useParams()
    const {loading,error,data}=useQuery(GET_AUTHOR,{
        variables:{slug}
    })
    console.log(data)
  return (
    <div>AuthorPage</div>
  )
}

export default AuthorPage