import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import UserReg from "./components/UserReg";
import Login from "./components/pages/Login";
import SignUp from './components/pages/SignUp';
import DashBoard from './components/pages/DashBoard';

function App() {
  return (
   <Routes>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signUp' element={<SignUp/>}/>
    <Route path='/' element={<DashBoard/>}/>
    <Route path='*' element={<DashBoard/>}/>
   </Routes>
  );
}

export default App;
