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
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleChange} rows="8" id="myBox"></textarea>
                </div>
                <div className="btn btn-success my-2" onClick={handleupClick}>To Uppercase</div>
                <div className="btn btn-success mx-3 my-2" onClick={handledownClick}>To Lowercase</div>
                <div className="btn btn-success" onClick={handleClearClick}>Text Clear</div>
                <div className="btn btn-success mx-3" onClick={handleCutClick}>Copy Text</div>
            </div>
            <div className="container my-4 text-center">
                <h1>Your Text Summary</h1>
                <h5>{text.split(" ").length - 1} Words and {text.length} Character</h5>
                <h5>{0.008 * text.split(" ").length} Minutes Read</h5>
                <h1>Text Preview</h1>
                <div className="card">
                    <div className="card-body">
                        <p className="card-text">{text}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Textarea
