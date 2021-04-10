import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import './Nav.css';

const Nav = () => {
    const [show,handleShow] = useState(false);
    const history = useHistory();

    const transitionNavbar = () => {
        if(window.scrollY > 100) {
            handleShow(true);
        }else{
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll" , transitionNavbar);
        return () => window.removeEventListener("scroll",transitionNavbar);
    },[])
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav__contents">
                <img 
                className="nav__logo"
                onClick={() => history.push('/')}
                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                alt="netflix icon" />
                <img 
                className="nav__avatar"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png" 
                onClick={() => history.push('/profile')}
                alt="avatar icon" />
            </div>
            
        </div>
    )
}

export default Nav;
