import React, { useState } from 'react'
import pic from './tdopic.jpg'
import apex from './apxespace.jpeg'
import me from './me.jpeg'

export default function About(props) {

    return (
        <div className='about-card' style={{ marginTop: "100px", fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif" }}>
            <h1 className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`} style={{ marginBottom: '30px', fontSize: '5rem' }}>About Us</h1>
            <div className="card mb-3" style={{ ...props.mystyle, maxWidth: "85%", borderRadius: '10px', border: '2px solid black' }}>
                <div className="row g-0">
                    <div className="col-md-4" >
                        <img src={pic} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">TO-DO App:</h5>
                            <p className="card-text">A todo app is simple and practical tool designed to help users organize and manage their tasks efficiently. It provides user-friendly interface where users can create, edit, and delete tasks, set due dates, and mark tasks as completed. Typically found on various platforms, including web and mobile applications, todo apps offer straightforward way to prioritize tasks, improve productivity, and maintain a clear overview of one's responsibilities. With features like task categorization and notifications, users can streamline their daily routines, ensuring that important activities are not overlooked and allowing for more organized and balanced approach to time management.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card mb-3" style={{ maxWidth: "85%", borderRadius: '10px', border: '2px solid black' }}>
                <div className="row g-0">
                    <div className="col-md-4 apex">
                        <img style={{ borderRadius: '20px' }} src={apex} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8" style={props.mystyle}>
                        <div className="card-body">
                            <h5 className="card-title">Apex Space:</h5>
                            <p className="card-text">We at Apex Space take great pride in our team. Having a good experience, we have seen the evolution of the Internet, we decided to provide services related to IT & E-commerce. Our team is constantly finding new, better, and more effective solutions for clients.</p>
                            <h5 className="card-title">Specialities:</h5>
                            <p className="card-text">Specialties
                                Application Development, Mobile Application Development, Desktop Application Development, Web Application Development, Amazon FBA Wholesale, E-Commerce, PHP, Javascript, MERN Stack Development, MEAN Stack Development, and .net Development</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3" style={{ ...props.mystyle, maxWidth: "85%", borderRadius: '10px', border: '2px solid black' }}>
                <div className="row g-0">
                    <div className="col-md-4" >
                        <img style={{ borderRadius: '20px' }} src={me} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">My Self:</h5>
                            <p className="card-text">I am Naeem Ul Hassan.
                                I am studying BS-CS at University of Engineering and Technology Lahore. Currently, I am doing a MERN Stack internship at Apex Space.My aim to establish myself as a remarkable professional in a stimulating and everchanging setting,where I can foster and enhance my abilities to the fullest. My goal is to combine my technical expertise with hands-on experience, enabling me to thrive and excel in my chosen career path.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
