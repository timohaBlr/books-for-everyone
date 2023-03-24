import React from 'react';

type BookImagePropsType = {
    bookImage: string
}

const BookImage: React.FC<BookImagePropsType> = ({bookImage}) => {

    return (
            <img src={bookImage} alt={'book'} style={{
                height: '100%',
                boxShadow: 'rgba(0, 0, 0, 0.2) 8px 10px 5px -2px, rgba(0, 0, 0, 0.14) 0px 7px 10px 1px, rgba(0, 0, 0, 0.12) 0px 2px 16px 1px'
            }}/>
    );
};

export default BookImage;
