import React,{useState}  from 'react'

export default function TextForms(props){
    const handleUpClick= ()=>{
        let newText= text.toUpperCase();
        setText(newText)
    }

    const handleOnChange= (event)=>{
        setText(event.target.value)
    }
    const [text, setText]=useState("Enter text here");

    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea  id="myBox" value={text} onChange={handleOnChange}  className="formcontrol"></textarea><br/>
                <button className="btn btn-primary" onClick={handleUpClick} >Convert to UpperCase</button>
            </div>
        </div>
    )
}