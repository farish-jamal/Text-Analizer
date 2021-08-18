import React, {useState} from 'react'

function Textarea(props) {
    const handleupClick = () =>{
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handledownClick = () =>{
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleChange = (event) =>{
       setText(event.target.value)
    }
    const [text, setText] = useState()
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleChange} placeholder="Enter Your Text Here!" rows="8" id="myBox"></textarea>
            </div>
            <div className="btn btn-success" onClick={handleupClick}>To Uppercase</div>
            <div className="btn btn-success mx-3" onClick={handledownClick}>To Lowercase</div>
        </div>
    )
}

export default Textarea
