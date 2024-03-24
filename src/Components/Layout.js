import React, {useState} from "react";
import "./layout.css"
import Output from "./Output.js"


const Layout =(props)=>{
    let [input, setInput]=useState('')
    let [result, setResult]=useState('')
    let [opMath, setOperMath]=useState('')
    

    const handleClick = (event)=>{
        const value = event.target.value
        const doTheMath = {
            "+":function(x,y){return x+y},
            "-":function(x,y){return x-y},
            "*":function(x,y){return x*y},
            "/":function(x,y){return x/y},
        }
        let colect = []
        if(value === "+"||value ==="-"||value ==="/"||value ==="*") setOperMath(value)
        if(value==="="){
            let val,val2
            colect=input.split(opMath)
            val = parseInt(colect[0])
            val2 = parseInt(colect[1])
            setResult(doTheMath[opMath](val,val2))
        }else if(value==="Back"){
            setInput(input.substring(0, input.length-1))
            console.log(input);
        }else if(value==="C"){
            setInput("")
            setResult("")
        }
        else{
            setInput((input+=value))
        }

    }

    return (
        <div className="calculator">
            <Output user={input} answer={result}/>
                <div className="keys">
                    <input type="button" className="button clear" value={"C"} onClick={handleClick}></input>
                    <input type="button" className="button" value={"Back"} onClick={handleClick}></input>
                    <input type="button" className="button " value={"%"} onClick={handleClick}></input>
                    <input type="button" className="button " value={"/"} onClick={handleClick}></input>
                    <input type="button" className="button " value={"7"} onClick={handleClick}></input>
                    <input type="button" className="button " value={"8"} onClick={handleClick}></input>
                    <input type="button" className="button " value={"9"} onClick={handleClick}></input>
                    <input type="button" className="button " value={"*"} onClick={handleClick}></input>
                    <input type="button" className="button " value={"4"} onClick={handleClick}></input>
                    <input type="button" className="button " value={"5"} onClick={handleClick}></input>
                    <input type="button" className="button " value={"6"} onClick={handleClick}></input>
                    <input type="button" className="button " value={"-"} onClick={handleClick}></input>
                    <input type="button" className="button " value={"1"} onClick={handleClick}></input>
                    <input type="button" className="button " value={"2"} onClick={handleClick}></input>
                    <input type="button" className="button " value={"3"} onClick={handleClick}></input>
                    <input type="button" className="button " value={"+"} onClick={handleClick}></input>
                    <input type="button" className="button " value={"."} onClick={handleClick}></input>
                    <input type="button" className="button " value={"0"} onClick={handleClick}></input>
                    <input type="button" className="button " value={"="} onClick={handleClick}></input>
                    <input type="button" className="button " value={"Del"} onClick={handleClick}></input>
                </div>
        </div>
    )
}
export default Layout