import React, { Component } from 'react';

class MapList extends Component {

    mapControl=(data)=>{
        return <option>{data}</option>
    }


    render() {
        const country = ["Bangladesh", "India", "Nepal", "Pakistan", "Bhutan", "Sri-Lanka"];
        // const countryItem= country.map((data)=>{
        //     return <li>{data}</li>
        // })

        const countryItem = country.map(this.mapControl)

        return (
            <div>
                <h1>Mapping a List On React</h1>
                {/* <ul>
                    {countryItem}
                </ul> */}

                <select>
                    {countryItem}
                </select>
            </div>
        );
    }
}

export default MapList;