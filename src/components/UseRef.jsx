import { useState, useEffect, } from 'react';

const UseRef = () => {
    var[text, setText] = useState("")
    var previousRender = useRef();
    useEffect(() => {
        previousRender.current = text;
    }, [text]);
    return (
        <div>
            <h1>useRef example</h1>
            This is a text box for use Ref :
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <h2>Current render is : {text}</h2>
            <h2>Previous render is : {previousRender.current}</h2>
        </div>
    )
};

export default UseRef