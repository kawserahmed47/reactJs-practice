import React, { Component } from 'react';
import axios from 'axios';
class AxiosGet extends Component {

    constructor(){
        super()
        this.state={
            myData:[]
        }
    }





    componentDidMount(){
        axios.get('https://restcountries.eu/rest/v2/all')
        .then((response)=>{
            this.setState({myData:response.data});
            console.log(response.data);

        })
        .catch((error)=>{
            console.log(error);

        })
    }
    render() {

        const countryList = this.state.myData;
        
        const countryItem = countryList.map((countryList)=>{
                return <option>{countryList.name}</option>
            });


        return (
            <div>
                <h1>Country List From Rest API using Axios Get Method </h1><br></br>
                <select>
                  {countryItem}
                </select>
            </div>
        );
    }
}

export default AxiosGet;