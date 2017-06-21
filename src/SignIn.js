import React from 'react'

import './SignIn.css'
import { auth, githubProvider, googleProvider, twitterProvider } from './base'


const SignIn = () => {
  const authenticate = (provider) => {
    auth.signInWithPopup(provider)
  }

  return (

    <div className="SignIn">

      <h1>Welcome to Evern... errm, NoteHerder!</h1>

      <h3><i>Select Your Preferred Account Provider Below</i></h3>
      
      <button
        className="SignInButton"
        id="leftmost"
        onClick={() => authenticate(githubProvider)}
      >
        Sign In With GitHub
        <img src="https://maxcdn.icons8.com/Share/icon/nolan/logos//github1600.png" className ="logo"/>
      </button>
      <button
        className="SignInButton"
        onClick={() => authenticate(googleProvider)}
      >
        Sign In With Google

        
        <img src="https://community.dur.ac.uk/glc.lrt/pics/Logos/g+icon.png" className ="logo"/>
      </button>
      <button
        className="SignInButton"
        onClick={() => authenticate(twitterProvider)}
      >
        Sign In With Twitter

        
        <img src="http://www.tech-wd.com/wd/wp-content/uploads/2013/01/Logo-Twitter.jpg.jpg" className ="logo"/>
      </button>

    </div>
  )
}

export default SignIn
