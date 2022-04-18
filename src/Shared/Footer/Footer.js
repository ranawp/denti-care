import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div>
            <footer>
                <small>copyright @{year}</small>
            </footer>
        </div>
    );
};

export default Footer;