import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h1>Our Services:{services.length} </h1>
            <h1>Committed To Excellence </h1>
            <div className='service-container'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;