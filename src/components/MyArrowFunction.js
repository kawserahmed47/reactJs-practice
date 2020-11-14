import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

// function MyArrowFunction(){
//     return(
//         <div className="container">
//             <h1 className="text-success">Hello, Kawser Ahmed</h1>
//             <p>I'm From Arrow Function</p>
//         </div>
//     )
// }

const doThis=(a)=>{
    alert(a);
}

const MyArrowFunction =()=>{
    return(
        <div>
            <h1 className="text-success">Hello, Kawser Ahmed.</h1>
            <p>I'm From Arrow Function</p>
            <button onClick={doThis.bind(this,"Clicked Me. Hello, I'm From Arrow Function.")}>Click Me</button>
        </div>
    )
}


export default MyArrowFunction