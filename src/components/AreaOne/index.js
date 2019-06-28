import React from 'react';

const AreaOne = ({ currentData }) => {
    
    // Background rock box
    var divStyle = {
        backgroundImage: 'url(' + currentData.rock + ')',
        backgroundSize: 'cover',
    };

    // URL image
    const url = (currentData.logo)

    return (
        <div className="box" id="rock" alt="rock image" style={divStyle} >
            <div className="box--logo">
                <img src={url} alt="logo con austronauta" />
            </div>
        </div>
    )

}

export default AreaOne;