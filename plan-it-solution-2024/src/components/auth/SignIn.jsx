import './Signin.css';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
<<<<<<< HEAD
import MyLogo from "./logo.png";
=======
import MyLogo from './logo.png';
>>>>>>> 7377a071298803957ebb87afa42ba9a22fbe4617

//import { auth } from '../../firebase';


const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        const auth = getAuth();
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((useCredenial) => {
            console.log(useCredenial)
        }).catch((error) => {
            console.log(error)
        })
    }
    
    return (
        
        <div className='signin-container'>
<<<<<<< HEAD
            <div class="logo">
            <img src={MyLogo}></img>
      
=======
            <div>
                <div className = 'logoimg'>
            <img  src={MyLogo}></img>
            </div>
>>>>>>> 7377a071298803957ebb87afa42ba9a22fbe4617
            <form onSubmit={signIn}>
                <h1>Log In</h1>
                <input
                 type="email"
                 placeholder='Enter your email'
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                ></input>
                <input
                 type="password"
                 placeholder='Enter your password'
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                ></input>
                <button type="submit">Log In</button>
            </form>
        </div>
        </div>
        
    )
}

export default SignIn