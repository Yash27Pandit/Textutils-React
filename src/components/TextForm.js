import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase", "success");  
    }
    const handleLoClick = ()=>{
        console.log("Lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase", "success");   
    }
    const handleCapitalizeClick = () => {
        console.log("Capitalize words clicked");
        let newText = text
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
        setText(newText);
        props.showAlert("Sentence Capatilize", "success"); 
    };
    const handleClearClick =()=> {
        let newText = ``;
        setText(newText)
        props.showAlert("Cleared", "success"); 
    }
    const handleCopy =()=> {
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied", "success"); 
    }
    const handleExtraSpaces =()=> {
        let newText = text.split(/[]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed", "success"); 
    }



    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
        
    }

    
    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleCapitalizeClick} disabled={text.length === 0}>Capitalize Words</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3 " style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your Text summary</h2>
            <p>{text.split(" ").length} words and {text.length} charactors</p>
            <p>{0.008 * text.split(" ").length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something to preview"}</p>
        </div>
        </>
    )
}   
