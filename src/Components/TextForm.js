import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('')
    // text = "new text"; wrong way to change value of const text
    // setText("new text"); correct way to change value of const text // but it's not working

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    let textArr = (text.split(" "))
    let textStart = (textArr[0]);
    // let textEnd = (textArr.pop());
    return (
        <>
            <div className="container my-3">
                <div className="container my-3">
                    <form>
                        <h1>{props.heading}</h1>
                        <div className="form-group">
                            <textarea className="form-control" id="myText" rows="6" value={text} onChange={handleOnChange}></textarea>
                            {/* <textarea className="form-control" id="myText" rows="8" placeholder={text}></textarea> */}
                        </div>
                    </form>
                    <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className="btn btn-primary float-right" onClick={handleLoClick}>Convert to Lowercase</button>
                </div>
                <div className="container my-3">
                    <h2>Your text summary</h2>
                    <p>{((textStart === '') ? text.split(" ").length - 1 : text.split(" ").length)} words and {text.length} characters.</p>
                    <p>{((textStart === '') ? 0 : 0.008 * text.split(" ").length)} minutes read.</p>
                    <h2>Preview</h2>
                    <p>{text}</p>
                </div>
            </div>
        </>
    )
}
