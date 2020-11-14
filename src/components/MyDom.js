import React, { Component } from 'react';
import ReactDom from 'react-dom'
class MyDom extends Component {

    reactDom(){

        var container = document.getElementById("myID");
        var element = "Hello, Kawser. I'm From Rendering";
        var callBack= function(){
            alert("i'm from call back function after rendering");
        };
        
        ReactDom.render(element, container,callBack);
    }

    changeIMG(){
        var component = document.getElementById("myIMG");
        ReactDom.findDOMNode(component).src="https://torange.biz/photofxnew/19/HD/image-profile-picture-book-table-19441.jpg"
    }


    render() {
        return (
            <div>
                <h1 id="myID">Hello, React Dom</h1>
                <button onClick={this.reactDom}>Click Me</button>

                <hr></hr>
                <img id="myIMG"src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/1084670/original/00e2d989fe95aa77e61e35131cad315772aee7ce/write-a-nice-profile-introduction-for-you.jpg"></img>
                <br></br>
                <button onClick={this.changeIMG}>Change Photo</button>
            </div>
        );
    }
}

export default MyDom;