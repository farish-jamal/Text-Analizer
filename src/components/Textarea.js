import React, { useState } from 'react'

function Textarea(props) {
    const handleupClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handledownClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText)
    }
    const handleCutClick = () => {
        let copyText = document.getElementById('myBox');
        copyText.select();
        document.execCommand('copy');
    }

    const handleChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState("Dummy Text Here! Erase it and paste your text here to analize!")
    return (
        <>
            <div className="container text-center" style={{color:props.mode === 'light'? '#042743' : 'white'}}> 
                <h1 className="my-3">{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{backgroundColor:props.mode === 'light'? 'white' : '#5a5a5a', color:props.mode === 'light'? '#042743' : 'white' }} onChange={handleChange} rows="8" id="myBox"></textarea>
                </div>
                <div className="btn btn-primary my-2" onClick={handleupClick}>To Uppercase</div>
                <div className="btn btn-primary mx-3 my-2" onClick={handledownClick}>To Lowercase</div>
                <div className="btn btn-primary" onClick={handleClearClick}>Text Clear</div>
                <div className="btn btn-primary mx-3" onClick={handleCutClick}>Copy Text</div>
            </div>
            <div className="container my-4 text-center" style={{color:props.mode === 'light'? '#042743' : 'white'}}>
                <div className="card my-3" style={{backgroundColor:props.mode === 'light'? 'white' : '#5a5a5a'}}>
                <div className="card-body">
                <h1>Your Text Summary</h1>
                <h5>{text.split(" ").length - 1} Words and {text.length} Character</h5>
                <h5>{0.008 * text.split(" ").length} Minutes Read</h5>
                </div>
                </div>
                <div className="card" style={{backgroundColor:props.mode === 'light'? 'white' : '#5a5a5a'}}>
                    <div className="card-body">
                <h1>Text Preview</h1>
                        <p className="card-text">{text}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Textarea
