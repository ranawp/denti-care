import React from 'react';
import './Service.css';
const Service = ({ service }) => {
    const { name, img, description, price } = service
    return (
        <div className='g-4 col-sm-12 col-md-6 col-lg-3 '>
            <div className="card">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>Price:{price}</p>
                    <p>{description}</p>
                    <a href="#" className="btn btn-primary">Book:{name}</a>
                </div>
            </div>
        </div>
    );
};

export default Service;