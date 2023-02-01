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
        props.showAlert("Converted to Uppercase", "success")
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success")
    }
    const handleClear = () => {
        setText('');
        props.showAlert("Text Cleared", "success")
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard", "success")
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert("Removed Extra Spaces", "success")
    }
    return (
        <>
            <div className="main-wrapper-div" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <div className="container my-3">
                    <div className="container my-3">
                        <form>
                            <h1 className='my-2'>{props.heading}</h1>
                            <div className="form-group">
                                <textarea className="form-control" id="myText" rows="5" value={text} onChange={handleOnChange} style={{ color: props.mode === 'light' ? 'black' : 'white', backgroundColor: props.mode === 'light' ? 'white' : 'black' }} placeholder={'Enter your Text to Use'}></textarea>
                            </div>
                        </form>
                        <div className="my-3">
                            <button className="btn btn-primary ms-3 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                            <button className="btn btn-primary ms-3 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                            <button className="btn btn-primary ms-3 my-1" onClick={handleCopy}>Copy Text</button>
                            <button className="btn btn-primary ms-3 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                            <button className="btn btn-primary ms-3 my-1" onClick={handleClear}>Clear Text</button>
                        </div>
                    </div>
                    <div className="container my-3">
                        <h2>Your text summary</h2>
                        <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters.</p>
                        <p>{0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} minutes read.</p>
                        <h2>Preview</h2>
                        <div className="col-md-12">
                            <p>{(text.length === 0) ? 'No Preview available !' : text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
