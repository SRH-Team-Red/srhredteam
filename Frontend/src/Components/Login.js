import { Button } from '@material-ui/core';
import { auth, provider } from '../firebase';
import React from 'react';
import './Login.css';

function Login() {
  const signIn = () => {
    // do clever google login shizz....
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className='login'>
      <div className='login__logo'>
        <img
          src='https://i.pinimg.com/originals/3d/a5/b2/3da5b24f7c6bf9569faa2abef03089ae.png'
          alt=''
        />
      </div>

      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;
