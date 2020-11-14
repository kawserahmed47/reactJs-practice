import React, {Component} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
class Refresh extends Component{

    constructor (){
        super();
        this.refreshNow = this.refreshNow.bind(this);

    }

    refreshNow(){
        // alert("Clicked Me");
        this.forceUpdate();
    }

    render() {
        return(
            <div>
                    <h1 className="text-center">Hello, I'm From Refresh Class Component <br></br> for <br></br> ForceUpdate</h1>
                    <p>Random Value: {Math.random()}</p>
                    <button onClick={this.refreshNow} >Click Me</button>
            </div>
        )
    };
}

export default Refresh

