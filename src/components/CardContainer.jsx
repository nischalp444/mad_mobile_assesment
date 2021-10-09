import React, { useState, useEffect } from 'react';
import Card from './Card';
import "./cardContainer.css"
import CustomCard from './customCard/CustomCard';

export default function CardContainer() {

    const [information, setInformation] = useState([])
    const [filterName, setFilterName] = useState("");
    const [fValue, setFValue] = useState([])
    const [isSorted, setIsSorted] = useState(false)

    const [editInfo, setEditInfo] = useState({
        name: {title: "", first: "", last: ""},
        location: {city: "", country: ""},
        picture: {large: ""},
        email: "",
        phone: ""
    });


    
const handleChange = (e) => {
    setFilterName(e.target.value)
//    let fV =  information.filter((d) => (
//     d["name"].first.includes(e.target.value)
//    ))

//     console.log(fV);

// setInformation(fV)
}

async function fetchData() {
    const response = await fetch ("https://randomuser.me/api/?results=20")
        const data = await response.json();
        const value = data.results;
        setInformation(value)
        setFValue(value)
        console.log(value);
        
}

    useEffect(() => {
        fetchData()
      }, [])
    //   console.log(information)

    //   const filterData = () => {
    //     information.filter((data) => {
    //         console.log(data.include(filterName))
    //     })
    //   }

    useEffect(() => {
        let result = [...information].filter((inf) => (
            inf["name"].first.toLowerCase().includes(filterName.toLocaleLowerCase())
        ))
        
       isSorted && result.sort(function(a, b) {
            return a["name"].first.toLowerCase() > b["name"].first.toLowerCase() ? 1 : -1
        })
        setFValue(result)
    }, [filterName, isSorted])

    // const handleSort

    return (
        <div className="cardContainer">
            <div>
                <div>
                <input className="filter" placeholder="Name" value={filterName} onChange={handleChange}/>
            <button onClick={() => setIsSorted(!isSorted)} >sort</button>
                </div>
                <Card location = {editInfo["location"]} name = {editInfo["name"]} picture = {editInfo["picture"]} email={editInfo.email} phone={editInfo.phone}/>

               
            
            </div>
            {fValue.map((info, index)=> (<Card key={index} location = {info["location"]} name = {info["name"]} picture = {info["picture"]} email={info.email} phone={info.phone} />))}
        </div>
    )
}