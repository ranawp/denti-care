import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';
const Service = ({ service }) => {
    const { id, name, img, description, price } = service;

    const navigate = useNavigate();

    const navigateToCheckOut = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='g-4 col-sm-12 col-md-6 col-lg-3 '>
            <div className="card">
                <img src={img} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>Price:{price}</p>
                    <p>{description}</p>
                    <button onClick={() => navigateToCheckOut(id)} href="#" className="btn btn-primary">Book now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;