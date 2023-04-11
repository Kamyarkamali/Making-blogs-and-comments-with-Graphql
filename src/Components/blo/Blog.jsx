import React from 'react';
import { useQuery } from '@apollo/client';
import GET_BLOGS_INFO from '../../graphql/queryse';

const Blog = () => {
    const {loading,data,error}=useQuery(GET_BLOGS_INFO)
    console.log(data)
    return (
        <div>
            مقالات
        </div>
    );
};

export default Blog;