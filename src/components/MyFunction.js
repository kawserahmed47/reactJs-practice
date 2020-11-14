import React from 'react'

function doThis(a){
    alert(a)
}


function MyFunction(props){
    return (
        <div>
            <h1>Hello, {props.lname} </h1>
            <p>I'm from Function Component</p>
            <button type="button" onClick={doThis.bind(this,"I'm Clicked and Passing from Functional Component")}>Click Me</button>
        </div>
    )
}

export default MyFunction