import React from 'react';
import { useParams } from 'react-router-dom';

const CheckOut = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h3>Welcome to Detail:{serviceId} </h3>
        </div>
    );
};

export default CheckOut;