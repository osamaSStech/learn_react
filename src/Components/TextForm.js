import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Please Enter the Text')
    // text = "new text"; wrong way to change value of const text
    // setText("new text"); correct way to change value of const text // but it's not working

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    return (
        <>
            {/* <div className="container my-3"> */}
            <div className="container my-3">
                <form>
                    <h1>{props.heading}</h1>
                    <div className="form-group">
                        <textarea className="form-control" id="myText" rows="8" value={text} onChange={handleOnChange}></textarea>
                        {/* <textarea className="form-control" id="myText" rows="8" placeholder={text}></textarea> */}
                    </div>
                </form>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            </div>
            {/* </div> */}
        </>
    )
}
