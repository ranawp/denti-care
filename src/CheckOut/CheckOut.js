import React from 'react';
import { useParams } from 'react-router-dom';

const CheckOut = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h3 className='text-center'>Please Checkout Your product. <br />Your product id is:{serviceId} </h3>
        </div>
    );
};

export default CheckOut;