import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
class ReactForm extends Component {

    constructor(){

        super()

        this.state={
            name:"",
            email:"",
            mobile:"",
            address:"",
        }
    }


    inputHandler =(event)=>{
        var inputName = event.target.name;
        var inputValue = event.target.value;
       this.setState({[inputName]:inputValue});

   }

   submitHandler=()=>{
       alert(this.state.name);
   }

    render() {
        return (
            <div> 
                <div className="container">
                    <div className="row">
                        <div className="col">
                        <form onSubmit={this.submitHandler}>
                            <h1>React Simple Input Field</h1>


                            <label>{this.state.name}</label>
                            <input onChange={this.inputHandler} className="form-control" type="text" placeholder="Enter your name" name="name"  id="" ></input>
                            <br></br>


                            <label>{this.state.email}</label>
                            <input onChange={this.inputHandler} className="form-control" type="email" placeholder="Enter your email" name="email"  id="" ></input>
                            <br></br>

                            <label>{this.state.mobile}</label>
                            <input onChange={this.inputHandler} className="form-control" type="text" placeholder="Enter your mobile" name="mobile"  id="" ></input>
                            <br></br>

                            <label>{this.state.address}</label>
                            <input onChange={this.inputHandler} className="form-control" type="text" placeholder="Enter your address" name="address"  id="" ></input>
                            <br></br>


                                <button className="btn btn-success" type="submit" >Submit</button>
                        </form>
                        </div>

                    </div>

                </div>
               
            </div>
        );
    }
}

export default ReactForm;  