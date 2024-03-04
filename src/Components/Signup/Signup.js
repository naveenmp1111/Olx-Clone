import React, { useContext, useState } from 'react';

import Logo from '../../olx-logo.png';
import './Signup.css';
import { FirebaseContext } from '../../store/FirebaseContext';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getDocs, doc, setDoc, addDoc, updateDoc, deleteDoc,collection } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [phone,setPhone]=useState('')
  const [password,setPassword]=useState('')
  const {Firebase,Firestore}=useContext(FirebaseContext)
  const navigate=useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault()
    

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
   
      .then((result) => {
//         const auth = getAuth();
// updateProfile(auth, {displayName: name})
        // console.log(userCredential)
        const docData = collection(Firestore, 'Users')
        const data = {
          id:result.user.uid,
          name:name,
          phone:phone
        };
        addDoc(docData, data, { merge: true }).then(response => {
          navigate('/login')
        }).catch(err => {
          console.log(err.message)
        })
        
      }) 
      .then((result) => {
        const auth = getAuth();
  updateProfile(auth.currentUser, {displayName: name})
      })
      .catch((error) => {
        console.log(error.message)
      })


  }

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            value={name}
            className="input"
            type="text"
            id="fname"
            name="name"
            defaultValue="John"
            onChange={(e)=>setName(e.target.value)}
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
          value={email}
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
            onChange={(e)=>setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
          value={phone}
            className="input"
            type="number"
            id="lname"
            name="phone"
            defaultValue="Doe"
            onChange={(e)=>setPhone(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
          value={password}
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
            onChange={(e)=>setPassword(e.target.value)}
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
