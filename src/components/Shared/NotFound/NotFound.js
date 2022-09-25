import React from 'react';
import notFoundImg from '../../../asset/images/404.jpg';

const NotFound = () => {
    return (
        <div className='w-50 d-flex m-auto mt-5'>
            <img className='img-fluid ' src={notFoundImg} alt="not-found-img" />
        </div>
    );
};

export default NotFound;