import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';

function App() {
  const [mode,setMode]= useState("light")

  const toggleMode = ()=>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor="#042743"
    }else{
      setMode("light");
      document.body.style.backgroundColor="white"
    }
  }
  return (
   <>
   <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
   <div className="container my-3">
    <Textform heading="Enter Text...." mode={mode}/>
   </div>
   </>
  );
}

export default App;
