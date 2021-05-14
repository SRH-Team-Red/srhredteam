import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import Feed from './Components/Feed';
import Header from './Components/Header';
import Login from './Components/Login';
import Sidebar from './Components/Sidebar';
// import Widget from './Components/Widget';
import { selectUser } from './features/userSlice';

import { auth } from './firebase';
import { login, logout } from './features/userSlice';

//TODO deploy is left
function App() {
  //from datalayer
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is logged in
        //to shoot tot eh data layer
        //paylaod is the loogin details
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
                      })
        );
      } else {
        // the user is logged out
        dispatch(logout());
}
    });
  }, [dispatch]);
  
    return (
    <div className='App'>
      {user ? (
        <>
          <Header />
      
        <div className='app__body'>
            <Sidebar />
            <Feed />
            {/* <Widget /> */}
          </div>
        </>
            ) : (
        <Login />
      )}
    </div>
  );
}

export default App;







