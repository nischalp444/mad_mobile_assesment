import React from 'react'

const CustomCard = () => {
    return (
        <div className="card">
            <div className="cardUpper">
                <img src="" alt="edit icon" />
                <h4>Name</h4>
            </div>

            <div className="cardMiddle">
                <img className="profileImage" />
            </div>

            <div className="cardLower">
                <p>address line 1</p>
                <p>address line 2</p>
                <p>address line 3</p>
            </div>
        </div>
    )
}

export default CustomCard
