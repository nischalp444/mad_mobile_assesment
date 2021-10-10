import React, { useState } from 'react';
import './cardContainer.css';
import './card.css';

export default function EditingValues(props) {
  // const [editInfo, setEditInfo] = useState({
  //   name: { title: '', first: '', last: '' },
  //   location: { city: '', country: '' },
  //   picture: { large: '' },
  //   email: '',
  //   phone: '',
  // });
  const [editInfo, setEditInfo] = useState('');
  const [editFirstName, setEditFirstName] = useState(props.editObj.name.first);
  const [editLastName, setEditLastName] = useState(props.editObj.name.last);
  const [editEmail, setEditEmail] = useState(props.editObj.email);
  const [editPhone, setEditPhone] = useState(props.editObj.phone);
  const [editCityLocation, setEditCityLocation] = useState(
    props.editObj.location.city
  );
  const [editCountryLocation, setEditCountryLocation ] = useState(
    props.editObj.location.country
    
  );

  return (
    <div className="editForm">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const updatedInfo = {
            uuid: props.editObj.login.uuid,

            name: { first: editFirstName, last: editLastName },
            picture: props.editObj.picture,
            email: editEmail,
            phone: editPhone,
            location: { city: editCityLocation, country: editCountryLocation },
          };
          props.editCard(updatedInfo);
          props.setToggleForm(false);
        }}
      >
        <lable>First Name</lable>
        <input
          value={editFirstName}
          onChange={(e) => {
            setEditFirstName(e.target.value);
          }}
          type="text"
        />
        <lable>Last Name</lable>
        <input
          value={editLastName}
          onChange={(e) => {
            setEditLastName(e.target.value);
          }}
          type="text"
        />
        <lable>Email</lable>
        <input
          value={editEmail}
          onChange={(e) => {
            setEditEmail(e.target.value);
          }}
          type="text"
        />
        <lable>Phone Number</lable>
        <input
          value={editPhone}
          onChange={(e) => {
            setEditPhone(e.target.value);
          }}
          type="text"
        />
        <lable>City</lable>
        <input
          value={editCityLocation}
          onChange={(e) => {
            setEditCityLocation(e.target.value);
          }}
          type="text"
        />
        <lable>Country</lable>
        <input
          value={editCountryLocation}
          onChange={(e) => {
            setEditCountryLocation(e.target.value);
          }}
          type="text"
        />
        <input type="submit" />
      </form>
      <button
        onClick={() => {
          props.setToggleForm(false);
        }}
      >
        {' '}
        Close Form
      </button>
    </div>
  );
}
