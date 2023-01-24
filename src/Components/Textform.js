import React, { useState } from 'react';

export default function Textform(props) {
  
    const handleUpClick= ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!!", "success")
    }
    const handleLoClick= ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!!", "success")
    }
    const clearText= ()=>{
        let newText = "";
        setText(newText);
        props.showAlert("Cleared the text!!", "success")
    }
    const handleOnChange=(e)=>{
        
        setText(e.target.value);
    }
    const handleCopy =()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!!", "success")
    }
    const handleExtraSpaces= ()=>{
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces!!", "success")
    }
    const[text, setText]= useState("");
    return (
    <>
    <div className="container" style={{color : props.mode==='light'?'black':'white'}}>
    <h1>{props.heading}</h1>
      <div className="mb-3" >
        <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor : props.mode==='light'?'white':'#0b314f',
        color : props.mode==='light'?'black':'white'}} value={text} placeholder="Enter text..." id="myBox"rows="8"></textarea>
      </div>
     <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert To UpperCase</button>
     <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert To LowerCase</button>
     <button className="btn btn-primary mx-3" onClick={clearText}>Clear</button>
     <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy Text</button>
     <button className="btn btn-primary mx-3" onClick={handleExtraSpaces}>Remove Extra Space</button>
    
     </div>
    <div className="container my-3" style={{color : props.mode==='light'?'black':'white'}}>
        <h2>Your Summary</h2>
        <p>{text.split(" ").length} Words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} time will take to read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Write something to view here"}</p>
    </div>

    </>
  );
}
