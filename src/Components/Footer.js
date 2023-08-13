import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Footer(props) {
    return (
        <footer className={`bg-${props.mode === 'light' ? 'light' : 'dark'} text-${props.mode === 'light' ? 'dark' : 'light'} py-1`}>
            <p className="text-center">
                <p className="text-center" style={{ marginTop: '10px' }}>www.My To-Do App.com</p>

                {/* Facebook */}
                <a className='click' href="https://www.facebook.com/naeemhashmi870"
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{ textDecoration: 'none', color: 'inherit' }}>

                    <FontAwesomeIcon className='me-2 click' icon={faFacebook} style={{ cursor: 'pointer', fontSize: '30px', padding: '0px 5px' }}
                    />
                </a>

                {/* Whatsapp */}
                <a className='click'
                    href='https://wa.me/+923254280903'
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{ textDecoration: 'none', color: 'inherit' }}>

                    <FontAwesomeIcon className='me-2 click' icon={faWhatsapp} style={{ cursor: 'pointer', fontSize: '30px', padding: '0px 5px' }}
                    />
                </a>

                {/* LinkedIn */}

                <a className='click'
                    href='https://www.linkedin.com/in/naeem-hashmi'
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{ textDecoration: 'none', color: 'inherit' }}>

                    <FontAwesomeIcon className='me-2 click' icon={faLinkedin} style={{ cursor: 'pointer', fontSize: '30px', padding: '0px 5px' }}
                    />
                </a>

                {/* GitHub */}

                <a className='click'
                    href='https://github.com/NAEEM-UL-HASSAN'
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{ textDecoration: 'none', color: 'inherit' }}>

                    <FontAwesomeIcon className='me-2 click' icon={faGithub} style={{ cursor: 'pointer', fontSize: '30px', padding: '0px 5px' }}
                    />
                </a>
            </p>
        </footer >
    )
}
