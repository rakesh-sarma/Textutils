import React, { useState } from 'react';

export default function Textform(props) {
  
    const handleUpClick= ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick= ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const clearText= ()=>{
        let newText = "";
        setText(newText);
    }
    const handleOnChange=(e)=>{
        
        setText(e.target.value);
    }
    const[text, setText]= useState("");
    return (
    <>
    <div>
    <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" onChange={handleOnChange} value={text} placeholder="Enter text..." id="myBox"rows="8"></textarea>
      </div>
     <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert To UpperCase</button>
     <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert To LowerCase</button>
     <button className="btn btn-primary mx-3" onClick={clearText}>Clear</button>
    </div>
   
    <div className="container my-3">
        <h2>Your Summary</h2>
        <p>{text.split(" ").length} Words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} time will take to read</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  );
}
