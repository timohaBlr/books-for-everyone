import React from 'react';
import {Box} from "@mui/material";

type BookImagePropsType = {
    bookImage: string
}

const BookImage: React.FC<BookImagePropsType> = ({bookImage}) => {

    return (
        <Box sx={{ height: '180px', textAlign: 'center'}}>
            <img src={bookImage} alt={'book'} style={{
                height: '100%',
                boxShadow: 'rgba(0, 0, 0, 0.2) 8px 10px 5px -2px, rgba(0, 0, 0, 0.14) 0px 7px 10px 1px, rgba(0, 0, 0, 0.12) 0px 2px 16px 1px'
            }}/>
        </Box>
    );
};

export default BookImage;
