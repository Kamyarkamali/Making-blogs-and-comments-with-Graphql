import React from 'react';
import { GET_AUTHORS } from '../../graphql/queryse';
import { useQuery } from '@apollo/client';

const Author = () => {
    const {loading,error,data}=useQuery(GET_AUTHORS)

    if(loading) console.log("loading");
    if(error) console.log("errorr");
    if(data) console.log(data);

    return (
        <div>
            نویسنده ها
        </div>
    );
};

export default Author;