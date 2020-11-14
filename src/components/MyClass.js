import React, {Component} from 'react'

function  doThis(a){
    alert(a);
}
class MyClass extends Component {
    render() {
        return (
            <div>
                <h1>Hello, {this.props.fname} </h1>
                <p>I'm from Class Component</p> 
                <button onClick={doThis.bind(this,"I'm Clicked and Passing from Class Component")}>Click Me</button>
            </div>
        )
    }
}

export default MyClass