import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';

function App() {
  const [mode,setMode]= useState("light")
  const [alert,setAlert]= useState(null)

  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const toggleMode = ()=>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor="#042743"
      showAlert("Dark Mode has enabled","success")
      document.title="TextUtils - Dark Mode"
      // setInterval(() => {
      //   document.title="This is an amazing app"
      // }, 1500);
      // setInterval(() => {
      //   document.title="Install it"
      // }, 2000);
    }else{
      setMode("light");
      document.body.style.backgroundColor="white"
      showAlert("Light Mode has enabled","success")
      document.title="TextUtils - Light Mode"
    }
  }
  return (
   <>
   <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
   <Alert alert={alert}/>
   <div className="container my-3">
    <Textform showAlert={showAlert} heading="Enter Text...." mode={mode}/>
   </div>
   </>
  );
}

export default App;
