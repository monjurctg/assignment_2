import React, { useState } from 'react';
// import { View, Text, Button } from 'react-native';
// import * as Facebook from 'expo-facebook';

import { getAuth,createUserWithEmailAndPassword,signInWithPopup,FacebookAuthProvider  } from "firebase/auth"
// import { app } from '../config';
import Test from './pages/Test';

// const auth = getAuth(app)


export default function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);


  // const facebooklogin = async()=>{
  //   const provider = new FacebookAuthProvider()
  //   signInWithPopup(auth,provider).then((re)=>{
  //     console.log(re)
  //   }).catch((err)=>{
  //     console.log(err)
  //   })
  // }

  // const postToFacebook = async () => {
  //   if (isLoggedIn) {
  //     try {
  //       await Facebook.setAccessToken(token);
  //       const response = await fetch(
  //         'https://graph.facebook.com/me/feed?message=Hello%20from%20my%20app',
  //         {
  //           method: 'POST',
  //         }
  //       );
  //       if (response.status === 200) {
  //         console.log('Posted to Facebook successfully!');
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // };

  return (
    <div style={{ display: "flex", alignItems: 'center', justifyContent: 'center' }}>
      {/* {isLoggedIn ? (
        <>
          <p>You are logged in with Facebook.</p>
          <button  onClick={postToFacebook} >post</button>
        </>
      ) : (
        <button  onClick={facebooklogin} >Facebook login</button>
      )} */}
      <Test/>
    </div>
  );
}
