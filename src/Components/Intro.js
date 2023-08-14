import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './My_Style.css';

function Intro() {
    const [displayComponent, setDisplayComponent] = useState(sessionStorage.getItem('displayComponent') !== 'false');
    const [Check, setCheck] = useState(false);

    const navigate = useNavigate();
    
    const handleButtonClick = () => {
        setCheck(true);
        setTimeout(() => {
            setDisplayComponent(false);
            navigate('/home');
        }, 500);

        sessionStorage.setItem('displayComponent', 'false');
    };

    return (
        displayComponent && (
            <div style={{ height: '600px' }}>
                <div className='intro-body-layout  z-1'>
                    <div className={`card intro ${Check ? 'box-close' : ''}`} style={{ width: "80%" }}>
                        <div className="card-body">
                            <h5 className="card-title">MY TO-DO APP</h5>
                            <p className="card-text">My Todo Application, built using the dynamic ReactJS framework in conjunction with the powerful Redux Toolkit library, offers a streamlined and efficient approach to managing tasks. Leveraging React's component-based structure, the application provides an intuitive user interface that enables seamless task entry, modification, and deletion.</p>
                            <button className="btn btn-primary" onClick={handleButtonClick}>OKAY</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
}

export default Intro;
