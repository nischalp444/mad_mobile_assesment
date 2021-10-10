import React, { useEffect, useState } from 'react';
import './card.css';
import icon from './icon.png';

export default function Card({
  name,
  location,
  picture,
  email,
  phone,
  filterData,
}) {
  return (
    <div className="abc">
      <div className="card-container">
        {/* <span class="pro">PRO</span> */}
        <img
          className="editProfile"
          //  src={icon}
          alt=""
        />
        <h3>{`${name.first} ${name.last}`}</h3>
        <img className="round" src={picture.large} alt="user" />

        <p>{email}</p>
        <p>{phone}</p>
        <p>{`${location.city}, ${location.country}`}</p>
      </div>
    </div>
  );
}
