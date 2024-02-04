import React, {useState} from 'react'



export default function TextForm(prop){

    const clearText = () =>{
        setText('');
    }
    const handleUpClick = () =>{
        let changeUpperCase = text.toUpperCase();
        setText(changeUpperCase);
    }

    const handleDownClick = () =>{
        let changeLowerCase = text.toLocaleLowerCase();
        setText(changeLowerCase);
    }

    const handleOnChange = (e) =>{
        setText(e.target.value);
    }

    const copyText = () =>{
        let text = document.getElementById("myBox");
        navigator.clipboard.writeText(text.value);
    }

    const [text, setText] = useState("Enter text here....");
    //  setText("settext");
    return(
        <>
        <div className='container'>
        <h1>{prop.heading}</h1>
        <div className="mb-3">
                <textarea className="form-control" value={text} id="myBox" onChange={handleOnChange} rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to Lowwecase</button>
        <button className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={copyText}>Copy Text</button>
        </div>
        <div className='container my-2'>
            <h2>Your text Summary</h2>
            <p>
                {text.split(" ").length} word {text.length} characters
            </p>
            <p>{0.008 * text.split(" ").length} Minutes to read</p>   
            {/* 125 word = 1 min  => 1 /125 = 0.008*/}
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    );
}