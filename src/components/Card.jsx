import React, { useEffect, useState } from 'react'
import './card.css'
import icon from "./icon.png"

export default function Card({name, location, picture, email, phone, filterData}) {
    // console.log(location)
	// console.log(email);
	// const [nameData, setNameData] = useState(name)
	// const [locationData, setLocationData] = useState(location)
	// const [emailData, setEmailData] = useState(email)
	// const [phoneData, setPhoneData] = useState(phone)

	// const handleEdit = () => {

	// }
    
    return (
    <div className="abc">
        <div className="card-container">
	{/* <span class="pro">PRO</span> */}
    <img className="editProfile" src={icon} alt="" />
    <h3>{`${name.first} ${name.last}`}</h3>
	<img className="round" src={picture.large} alt="user" />

	<p>{email}</p>
	<p>{phone}</p>
    <p>{`${location.city}, ${location.country}`}</p>
	
</div>
    </div>

    )
}
