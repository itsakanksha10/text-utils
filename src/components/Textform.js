import React, {useState} from 'react'
import '../Styles/Textform.css'


export default function Textform(props) {
    const handleUpclick = () =>{
        let newText = content.toUpperCase();
        setContent(newText)
    }
    const handleloclick = () =>{
        let newText = content.toLowerCase();
        setContent(newText)
    }
    const handleonchange = (event) =>{
        const val = event.target.value
        setContent(val);
    }
    const handleclearclick = () => {
        let newText = ""
        setContent(newText);
    }
    const [content, setContent] = useState('');
    var NumberOfWords = content.split(" ").length;
    if(content.trim() ===""){
        NumberOfWords = 0;
    }
    return (
        <>
            <div className='container'>
            <h2>{props.heading}</h2> 
                <div className="mb-6">
                    <textarea className="form-control" value={content} onChange={handleonchange} id="myBox" rows="8"></textarea>
                </div>
                <div className="btns">
                    <button type="button" className="btn btn-primary mx-1"onClick={handleUpclick}>Convert To Uppercase</button>
                    <button type="button" className="btn btn-primary mx-1"onClick={handleloclick}>Convert To Lowercase</button>
                    <button type="button" className="btn btn-primary mx-1"onClick={handleclearclick}>Clear</button>


                </div>
            </div>
            <div className="container my-2">
                <h2>Your Text Summary</h2>
                <p> {NumberOfWords} words and {content.length} charachters</p>
                <p>{0.008 * NumberOfWords} Minutes of reading</p>
                <h3>Preview</h3>
                <p>{content}</p>
            </div>
        </>
    )
}
