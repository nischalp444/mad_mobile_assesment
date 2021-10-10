import './App.css';
import CardContainer from './components/CardContainer';
import React, { useState, useEffect } from 'react';
import EditingValues from './components/EditingValues';

function App() {
  const [toggleEditForm, setToggleForm] = useState(false);
  const [information, setInformation] = useState([]);
  const [fValue, setFValue] = useState([]);
  const [editObj, setEditObj] = useState({});

  async function fetchData() {
    const response = await fetch('https://randomuser.me/api/?results=10');
    const data = await response.json();
    const value = data.results;
    setInformation(value);
    setFValue(value);
    console.log(value);
  }
  const editCard = (selectedCard) => {
    const updatedCards = fValue.map((card) =>
      card.login.uuid === selectedCard.uuid
        ? {
            ...selectedCard,
            name: selectedCard.name,
            email: selectedCard.email,
            phone: selectedCard.phone,
            location: selectedCard.location,
          }
        : card
    );
    console.log(selectedCard);
    setFValue(updatedCards);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      <CardContainer
        setToggleForm={setToggleForm}
        information={information}
        fValue={fValue}
        setFValue={setFValue}
        setEditObj={setEditObj}
      />
      {toggleEditForm ? (
        <EditingValues
          editCard={editCard}
          setToggleForm={setToggleForm}
          editObj={editObj}
          setEditObj={setEditObj}
        />
      ) : null}
    </div>
  );
}

export default App;
