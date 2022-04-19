import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const CheckOut = () => {
    const { serviceId } = useParams();
    return (
        <div className='mb-5'>
            <h3 className='text-center'>Please Checkout Your product. <br />Your product id is:{serviceId} </h3>
            <Form className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="Your Name" />
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="number" placeholder="Phone Number" />
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Email Address" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Home Address:</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>

                <button className='appoinment-button'>CheckOut</button>
            </Form>
        </div>
    );
};

export default CheckOut;