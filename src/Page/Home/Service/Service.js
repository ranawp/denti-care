import React from 'react';
import './Service.css';
const Service = ({ service }) => {
    const { name, img, description, price } = service
    return (
        <div className='service'>
            <img className='service-image' src={img}></img>
            <div className='service-info'>
                <h3> {name}</h3>
                <p>Price:{price}</p>
                <p>{description}</p>
                <button>Book:{name}</button>
            </div>

        </div>
    );
};

export default Service;