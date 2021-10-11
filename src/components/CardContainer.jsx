import React, { useState, useEffect } from 'react';
import Card from './Card';
import './cardContainer.css';
import CustomCard from './customCard/CustomCard';

export default function CardContainer(props) {
  const [filterName, setFilterName] = useState('');
  const [isSorted, setIsSorted] = useState(false);

  const [editInfo, setEditInfo] = useState({
    name: { title: '', first: '', last: '' },
    location: { city: '', country: '' },
    picture: { large: '' },
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFilterName(e.target.value);
  };

  useEffect(() => {
    let result = [...props.information].filter((inf) =>
      inf['name'].first.toLowerCase().includes(filterName.toLocaleLowerCase())
    );

    isSorted &&
      result.sort(function (a, b) {
        return a['name'].first.toLowerCase() > b['name'].first.toLowerCase()
          ? 1
          : -1;
      });
    props.setFValue(result);
  }, [filterName, isSorted]);

  return (
    <div className="cardContainer">
      <div>
        <div>
          <input
            className="filter"
            placeholder="Name"
            value={filterName}
            onChange={handleChange}
          />
          <button onClick={() => setIsSorted(!isSorted)}>
            Sort Alphabetically by First Name
          </button>
        </div>
      </div>
      {props.fValue.map((info, index) => (
        <Card
          key={index}
          info={info}
          location={info['location']}
          name={info['name']}
          picture={info['picture']}
          email={info.email}
          phone={info.phone}
          setToggleForm={props.setToggleForm}
          setEditObj={props.setEditObj}
        />
      ))}
    </div>
  );
}
