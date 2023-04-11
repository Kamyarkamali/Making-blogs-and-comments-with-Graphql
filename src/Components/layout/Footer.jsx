import { Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <footer>
            <Typography bgcolor="gray" mt={10} component="p" variant='p' color="#ffff" padding={10} textAlign="center">
                وبلاگ ساخته شده با GRAPHQL
            </Typography>
        </footer>
    );
};

export default Footer;