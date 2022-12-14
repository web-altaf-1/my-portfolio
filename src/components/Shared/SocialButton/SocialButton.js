import React from 'react';
import { NavLink } from 'react-router-dom';
import './SocialButton.css';

const SocialButton = () => {
    const handleLinkedIn = () => {
        window.open(
            'https://www.linkedin.com/in/webaltaf1/',
            '_blank'
        );
    }
    const handleGitHub = () => {
        window.open(
            'https://github.com/web-altaf-1/',
            '_blank'
        );
    }
    const handleEmail = () => {
        window.open(
            'mailto:web.altaf.1@gmail.com',
            '_blank'
        );
    }
    return (
        <div className='d-flex mt-5 social-button-container'>
            {/* linkedin */}
            <NavLink data-aos="fade-up"
                data-aos-duration="3000" onClick={() => handleLinkedIn()} className='me-2 linked-in-icon'  to="">
                <div style={{ backgroundColor: '#fff', borderRadius: '50%' }}>
                    <i style={{ padding: '12px 7px' }} className="fa-brands fa-linkedin-in fa-2x "></i>
                </div>
            </NavLink>
            {/* github */}
            <NavLink data-aos="fade-up"
                data-aos-duration="3000" onClick={() => handleGitHub()} className='ms-2 github-button'  to="">
                <div style={{ backgroundColor: '#fff', borderRadius: '50%' }}>
                    <i style={{ padding: '12px 7px' }} className="fa-brands fa-github fa-2x "></i>

                </div>
            </NavLink>
            {/* Email  */}
            <NavLink data-aos="fade-up"
                data-aos-duration="3000" onClick={() => handleEmail()} className='ms-3 email-button'  to="">
                <div style={{ backgroundColor: '#fff', borderRadius: '50%' }}>
                    <i style={{ padding: '12px 7px',  }} className="fa-regular fa-envelope fa-2x "></i>
                </div>
            </NavLink>
        </div>
    );
};

export default SocialButton;