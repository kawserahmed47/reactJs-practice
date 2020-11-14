import React, {Component} from 'react'


import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class StateClass extends Component{

    constructor(){
        super()

        this.state={
            name: "Kawser Ahmed",
            age: 25,
        }
    }




    render(){
        return(
            <div>
                <h1 className="text-success">Welcome to React JS</h1>
                <p>I'm From StateClass</p>

                <h5>Hello, {this.state.name} ( {this.state.age}) </h5>
                <p>You are from State Object/Array</p>
            </div>
        )
    }
}

export default StateClass