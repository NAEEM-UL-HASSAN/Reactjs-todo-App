import React from 'react';
import './My_Style.css'

const ContactForm = (props) => {
    return (
        <form>
            <div id="contact" className="contact-container contact-form" style={{ fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif" }}>
                <div className="get-in-touch"
                    style={{
                        backgroundColor: props.mode === 'dark' ? 'rgb(37, 45, 60)' : '#D1D1C4',
                        border: props.mode === 'dark' ? '3px solid white' : '3px solid black'
                    }}>
                    <div style={{ color: props.mode === 'dark' ? 'white' : 'black' }} className="form-heading">
                        <h1  style={{fontWeight:'bold'}}>Get In Touch</h1>
                    </div>
                    <input type="text" placeholder="Enter Your Name" className="input-field" required />
                    <input type="email" placeholder="Enter Your Email" className="input-field" required />
                    <input type="text" placeholder="Subject" className="input-field" required />
                    <textarea placeholder="Enter your Message here" className="textarea-field"></textarea>
                    <input type="submit" value="Send" className="submit-button" required
                        style={{
                            backgroundColor: props.mode === 'dark' ? 'white' : 'black',
                            color: props.mode === 'dark' ? 'black' : 'white'
                        }}
                    />
                </div>
            </div>
        </form>
    );
};

export default ContactForm;
