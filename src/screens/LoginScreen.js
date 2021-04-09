import React from 'react'
import './LoginScreen.css'

const LoginScreen = () => {
    return (
        <div className="loginScreen">
            <div className="loginScreen__background">
                <img 
                className="loginScreen__logo"
                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                alt="login screen logo"
                />
                <button className="loginScreen__button" onClick>Sign In</button>
            </div>
            <div className="lockScreen__gradient" />
        </div>
    )
}

export default LoginScreen
