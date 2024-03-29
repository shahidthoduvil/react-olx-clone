import React, { useState,useContext } from 'react';
import Logo from '../../olx-logo.png';
import './Login.css';
import { FirebaseContext } from '../../store/Context';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

// login of the page
function Login() {
  const history=useHistory()
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const {firebase}=useContext(FirebaseContext)


  const handleLogin=((e)=>{
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
     history.push('/')
    }).catch((error)=>{
      alert(error.message)
    })
  })
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            value={password}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
