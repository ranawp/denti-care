import React from 'react';
import { Button, Form } from 'react-bootstrap';
import booking from '../../../images/booking.jpg'
import './Booking.css'
const Booking = () => {
    return (
        <div className='container  mt-5 mb-5'>
            <div className="row">
                <div className='col-lg-6 col-md-6 col-12'>
                    <img className='img-fluid' src={booking} alt="booking" />
                </div>
                <div className='col-lg-6 col-md-6 col-12'>
                    <h3 className='first-caption'>Book Your Visit At</h3>
                    <h1 className='second-caption'>DentiCare</h1>
                    <p className='captions'>Have an emergency? Do book with us with this simple form below and superior deliverables whereas web-enabled applications. Continually reintermediate integrated processes through technically sound intellectual capital.</p>
                    <hr />
                    <div>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="name" placeholder="Your Name" />
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Email Address" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Massage Us</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <button className='appoinment-button text-decoration-none'>Book Appoinment Now</button>
                        </Form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Booking;