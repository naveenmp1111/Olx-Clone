import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SignupPage from './Pages/Signup';
import LoginPage from './Pages/Login';
import CreatePage from './Pages/Create';
import { useContext,useEffect } from 'react';
import { AuthContext, FirebaseContext } from './store/FirebaseContext';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function App() {
  const {user,setUser}=useContext(AuthContext)
  const {Firebase}=useContext(FirebaseContext)
  useEffect(()=>{
    const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    setUser(user)
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
    console.log('not signed in')
  }
});
    console.log(user)
   
  })
  return (
    <div>
      <BrowserRouter>
          <Routes>
             <Route exact path='/' element={<Home/>}/>
             <Route path='/signup' element={<SignupPage/>}/>
             <Route path='/login' element={<LoginPage/>}/>
             <Route path='/create' element={<CreatePage/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
