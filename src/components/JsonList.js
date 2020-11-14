import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
class JsonList extends Component {
    render() {
        const cityList = [
            {
                city:"Mirpur",
                zip:1207
            },
            {
                city:"Uttara",
                zip:1230
            },
            {
                city:"Dhanmondi",
                zip:1213
            },
        ]

      const  cityItem = cityList.map((data)=>{
          return <tr> <td>{data.city}</td> <td>{data.zip}</td></tr>
      })

    //   const  zipItem = cityList.map((data)=>{
    //     return <option> {data.zip} </option>
    // })

        return (
            <div>
                <h1>JSON Javascript Object Notation List Mapping</h1>

                {/* <label>City</label>
                <select>
                    {cityItem}
                </select>
                <br></br>

                <label>Zip</label>
                <select>
                    {zipItem}
                </select> */}

                <table className="table">
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>Zip</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cityItem}
                    </tbody>
                </table>

            </div>
        );
    }
}

export default JsonList;