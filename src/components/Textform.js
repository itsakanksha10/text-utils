import React, {useState} from 'react'
import '../Styles/Textform.css'


export default function Textform(props) {
    const handleUpclick = () =>{
        let newText = content.toUpperCase();
        setContent(newText)
        props.AlertMessage("converted to uppercase","success");

    }
    const handleloclick = () =>{
        let newText = content.toLowerCase();
        setContent(newText)
        props.AlertMessage("converted to lowercase","success");

    }
    const handleonchange = (event) =>{
        const val = event.target.value
        setContent(val);
    }
    const handleclearclick = () => {
        let newText = ""
        setContent(newText);
        props.AlertMessage("Textbox cleared","success");

    }
    const handlespace = () => {
        let newText = content.replace(/\s+/g,' ').trim();
        setContent(newText);
        props.AlertMessage("Spaces Removed","success");

    }
    const handlecopy = () => {
        let copyContent = document.getElementById("myBox").select();
        props.AlertMessage("Text copied","success");
        navigator.clipboard.writeText(copyContent.value);
    }
    const [content, setContent] = useState('');

    let trimedvar = content.trim();
    var NumberOfWords = content.length>0 ? trimedvar.split(" ").length : 0;
    if(trimedvar.trim() ===""){
        NumberOfWords = 0;
    }

    var vowels = content.length>0 ? (content.match(/[aeiou]/gi) ? content.match(/[aeiou]/gi).length : 0) : 0
    return (
        <>
            <div className='container' style={{color:props.modes === 'dark'?'white':'#042743'}}>
            <h2>{props.heading}</h2> 
                <div className="mb-6">
                    <textarea className="form-control" value={content} onChange={handleonchange} style={{backgroundColor: props.modes === 'dark'?'grey':'white',color:props.modes === 'dark'?'white':'#042743'}} id="myBox" rows="8" placeholder='Enter Text'></textarea>
                </div>
                <div className="btns">
                    <button type="button" className="btn btn-primary mx-1" onClick={handleUpclick}>Convert To Uppercase</button>
                    <button type="button" className="btn btn-primary mx-1"onClick={handleloclick}>Convert To Lowercase</button>
                    <button type="button" className="btn btn-primary mx-1"onClick={handleclearclick}>Clear</button>
                    <button type="button" className="btn btn-primary mx-1"onClick={handlecopy}>Copy Text</button>
                    <button type="button" className="btn btn-primary mx-1"onClick={handlespace}>Remove Extra Space</button>

                </div>
            </div>
            <div className="container my-2" style={{color: props.modes === 'dark'?'white':'#042743'}}>
                <h2>Your Text Summary</h2>
                <p> {NumberOfWords} words and {content.length} charachters</p>
                <p>Number of Vowels: {vowels}</p>
                <p>{0.008 * NumberOfWords} Minutes of reading</p>
                <h3>Preview</h3>
                <p>{content.length>0?content:"Enter Text above to preview here"}</p>
                {/* <button onClick={vowels}>Vowels</button> */}
            </div>
        </>
    )
}
