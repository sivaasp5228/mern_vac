import {useState, useMemo} from "react";

function doubleNumber(num) {
    for(var a = 0; a < 1000000; a++) {}
    return num * 2;
}

var UseMemo = () => {
    var [number, setNumber] = useState(0);
    var [theme, setTheme] = useState(true);
    var doubleUpANumber = useMemo(() => {
        return doubleNumber(number);
    }, [number]);
    var styling = {
        backgroundColor: theme ? "black" : "white",
        color: theme ? "white" : "black"
    }
    return (
        <div>
            <button onClick={() => setTheme(!theme)}>Toggle Theme</button>
            <h1>This is UseMemo</h1>
            <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
            <div style={styling}>
            <h2>Number is : {number}</h2>
            <h2>DoubleUp Number is : {doubleUpANumber}</h2>
            </div>
        </div>
    )
};
export default UseMemo;