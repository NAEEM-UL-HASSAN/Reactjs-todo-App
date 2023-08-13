import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faX, faXmark, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import Signup from './SignUp';
import Signin from './SignIn';
import Alert from './Alert';
import './My_Style.css'


export default function Navbar(props) {
    const [showSignup, setShowSignup] = useState(false);
    const [showSignin, setShowSignin] = useState(false);
    const [alert, setAlert] = useState(null);
    const [Check, setCheck] = useState(false);



    const handleOnClick = () => {
        props.togglemode();
        props.aboutmode();
      }

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 2000);
    }

    const openSignUp = () => {
        setShowSignup(true);
    };

    const closeSignUp = () => {
        setCheck(true);
        setTimeout(() => {
            setShowSignup(false);
            setCheck(false);
        }, 500);
    };

    const openSignIn = () => {
        setShowSignin(true);
    };

    const closeSignIn = () => {
        setCheck(true);
        setTimeout(() => {
            setShowSignin(false);
            setCheck(false);
        }, 500);
    };

    const HandleInClick = () => {
        openSignIn();
        setShowSignup(false);
    }

    const HandleUpClick = () => {
        openSignUp();
        setShowSignin(false);
    }
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} py-3 fixed-top`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{props.name}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item pe-5">
                                <Link className="nav-link" aria-current="page" to="/home">{props.home}</Link>
                            </li>
                            <li className="nav-item pe-5">
                                <Link className="nav-link" to="/about">{props.about}</Link>
                            </li>
                            <li className="nav-item pe-5">
                                <Link className="nav-link" to="/contactus">{props.contactus}</Link>
                            </li>
                            <li className="nav-item">
                                <div className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                                    <label className="form-check-label nav-link">

                                        <FontAwesomeIcon className='me-2'
                                            icon={props.mode === 'light' ? faMoon : faSun}
                                            onClick={handleOnClick}
                                            style={{ cursor: 'pointer', fontSize: '25px' }}
                                        />
                                        Enable {props.text} mode
                                    </label>
                                </div>
                            </li>

                        </ul>
                        <button onClick={HandleInClick} className={`btn btn-${props.mode === 'light' ? 'dark' : 'secondary'} me-3`}>SignIn</button>
                        <button onClick={HandleUpClick} className={`btn btn-${props.mode === 'light' ? 'dark' : 'secondary'} me-3`} >SignUp</button>
                    </div>
                </div>
            </nav>



            {showSignup && (
                <>
                    <Alert alert={alert} />
                    <div className="dialog-overlay z-1">
                        <div className={`dialog-box ${Check ? 'box-close' : ''}`}>
                            <Signup alert={showAlert} closeup={closeSignUp} />
                        </div>
                    </div>
                </>
            )}

            {showSignin && (
                <>
                    <Alert alert={alert} />
                    <div className="dialog-overlay z-1">
                        <div className={`dialog-box ${Check ? 'box-close' : ''}`}>
                            <Signin alert={showAlert} closein={closeSignIn} />
                        </div>
                    </div>
                </>
            )}

        </>
    );
}

