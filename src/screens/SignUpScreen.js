import React, { useRef } from 'react'
import { auth } from '../firebase';
import './SignUpScreen.css'

const SignUpScreen = () => {

    const emailRef = useRef(null);
    const passRef = useRef(null);

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passRef.current.value
            ).then((authUser) => {
                console.log(authUser);
            }).catch((error) => {
                alert(error.message);
            })

    }

    const signIn = (e) => {
        e.preventDefault();
    }

    return (
        <div className="signUpScreen">
            <form action="">
                <h1>Sign In</h1>
                <input ref={emailRef} type="email" placeholder="Email"/>
                <input ref={passRef} type="password" placeholder="Password"/>
                <button type="submit" onClick={signIn}>Sign In</button>
                <h4> <span className="signUpScreen__grey">New to Netflix?</span> <span className="signUpScreen__link" onClick={register}>Sign up now</span></h4>
            </form>
        </div>
    )
}

export default SignUpScreen
