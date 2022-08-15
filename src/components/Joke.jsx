import React from "react"

export default function Joke(props) {
    const [isShown,setIsShown]=React.useState(false);

    function showPunch(){
        setIsShown((prevShown) =>{
            return !prevShown
        })
    }

    return (
        <div>
            {props.setup && <h3>Setup: {props.setup}</h3>}
            {isShown && <p>Punchline: {props.punchline}</p>}
            <button onClick={showPunch} >{isShown ? "Hide" : "Show"} Punchline</button>
            <hr />
        </div>
    )
}