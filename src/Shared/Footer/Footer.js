import React from 'react';
import './Footer.css'
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div>
            <footer className='footer-bg'>
                <div className=" container">
                    <div className="row">
                        <div className=' col-lg-4 col-md-4 col-12'>
                            <h4 className='second-caption'>DentCare</h4>
                            <p>A team of dentists working to ensure you receive the best treatment.</p>
                            <p>Phone: 415-205-5550</p>
                            <p>Email:emergencies@denticare.com</p>
                            <div>
                                <small className='text-center'>copyright @{year}</small>

                            </div>

                        </div>
                        <div className=' col-lg-4 col-md-4 col-12'>
                            <h3 className='second-caption mt-3'>About</h3>
                            <p>Our Dental Team</p>
                            <p>Pricing Nad Pricelist</p>
                            <p>Solution</p>
                            <p>Dental Service</p>
                            <p>Clients</p>
                        </div>
                        <div className=' col-lg-4 col-md-4 col-12'>
                            <h3 className='second-caption mt-3'>Socail Networks</h3>
                            <p>Visit DentiCare on these social links and connect with us. Make sure to follow our accounts for regular updates.</p>

                        </div>
                    </div>
                </div>

            </footer>
        </div>
    );
};

export default Footer;