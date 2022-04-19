import React from 'react';
import photo from '../../images/ranasaha.jpg'


const About = () => {
    return (
        <div className='container mt-5 mb-5'>
            <div className="row">
                <div className='col-md-6 col-12'>
                    <img className='img-fluid' src={photo} alt="" />
                </div>
                <div className=' col-md-6 col-12'>
                    <h3 className='second-caption'>We Would Love To
                        See You Smile</h3>
                    <p>Distinctively re-engineer revolutionary meta-services and premium architectures. Intrinsically incubate intuitive opportunities and real-time potentialities. Globally revolutionize global sources through interoperable services.

                        Appropriately communicate one-to-one technology after plug-and-play networks and worldwide potentialities.</p>
                </div>
            </div>

        </div>
    );
};

export default About;