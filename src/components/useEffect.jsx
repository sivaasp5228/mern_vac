import React, { useState, useEffect } from 'react';

const UseEffect = () => {
    var [text, setText] = useState("");
    useEffect(() => {
        console.log("Text changed:", text);
    }, [text]);
    return (
        <div>
        <h1>this is sample use effect</h1>
        Type your name: <input type="text" value={text} onChange = {(e) => setText(e.target.value)} />
        <h4>{text}</h4>
        </div>
    )
};
export default UseEffect