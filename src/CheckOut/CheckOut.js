import React from 'react';
import { Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const CheckOut = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h3 className='text-center'>Please Checkout Your product. <br />Your product id is:{serviceId} </h3>
            <button className='appoinment-button'>CheckOut</button>

        </div>
    );
};

export default CheckOut;