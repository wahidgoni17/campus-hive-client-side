import React from 'react';

const TitleCard = ({title}) => {
    return (
        <div className='text-center mx-auto mt-14 mb-5'>
            <h1 className='text-3xl pb-5 font-bold uppercase'>{title}</h1>
        </div>
    );
};

export default TitleCard;