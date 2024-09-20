import React, { useState, useRef } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/Validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL } from '../utils/constants';

const Login = () => {
    const dispatch = useDispatch();
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);


    const handleButtonClick = ()=> {
        let message;
        // Validate the form data
        if(!isSignInForm){
            message = checkValidData(email.current.value, password.current.value, isSignInForm, name.current.value);
            setErrorMessage(message);
        }
        else{
            message = checkValidData(email.current.value, password.current.value, isSignInForm);
            setErrorMessage(message);
        }

        if(message) return;
        // Sign In, Sign Up Logic
        if(!isSignInForm){
            // Sign Up Logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name.current.value
                  }).then(() => {
                    const { uid, email, displayName } = auth.currentUser;
                    dispatch(addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName
                    }));
                  }).catch((error) => {
                    setErrorMessage(error.message);
                  });
                  
                // console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                
                setErrorMessage(errorCode + "-" + errorMessage);
            });  
        }
        else{
            // Sign In Logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                // eslint-disable-next-line
                const user = userCredential.user;
                // console.log(user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                setErrorMessage(errorCode + "-" + errorMessage);
            });

        }
    }
    const toggleSignInForm = ()=> {
        if(!isSignInForm && name.current.value) name.current.value = "";
        setIsSignInForm(!isSignInForm);
        setErrorMessage("");
        if(email.current.value)email.current.value = "";
        if(password.current.value)password.current.value = "";
    }
  return (
    <div>
      <Header />
      <div className='fixed inset-0'>
        <img className='h-full w-full object-cover' src={BG_URL} alt="logo" />
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </div>
      <form onSubmit={(e) => e.preventDefault()} className='p-12 w-full bg-opacity-80 bg-black absolute md:w-[470px] md:top-[17%] md:left-[35vw] left-0 top-[16%] text-white'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm?"Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input ref={name} type="text" placeholder='Full Name' className='bg-gray-700 bg-opacity-80 p-4 my-3 w-full'/>}
        <input ref={email} type="email" placeholder='Email Address' className='bg-gray-700 bg-opacity-80 p-4 my-3 w-full'/>
        <input ref={password} type="password" placeholder='Password' className='bg-gray-700 p-4 my-3 w-full bg-opacity-80'/>
        <p className='text-red-600 my-2 h-5 text-center font-bold'>{errorMessage ? errorMessage: ""}</p>
        <button className='p-3 my-4 bg-red-600 w-full rounded-sm' onClick={handleButtonClick}>{isSignInForm?"Sign In" : "Sign Up"}</button>
        <p onClick={()=> toggleSignInForm()} className='my-4 cursor-pointer'>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>
      </form>
    </div>
  )
}

export default Login

