import React from 'react';

const AreaTwo = ({ currentData, mobileMoon }) => {

    //inline style by props
    var styleSpaceBox = {
        backgroundImage: 'url(' + currentData.bgImage + ')',
        backgroundSize: 'cover',
    };

    var styleRocketBox = {
        backgroundImage: 'url(' + currentData.imageRocket + ')',
    };
    var styleMoonBox = {
        backgroundImage: 'url(' + mobileMoon + ')',
    };

    //url image trip icon
    const urlTrip = currentData.iconTrip

    return (
        <React.Fragment>
            <div id="moon--mobile" style={styleMoonBox} alt="imagen de luna"></div>
            <div id={currentData.moon ? 'moon--desktop' : 'moon--none'} style={styleMoonBox} alt="imagen de luna"></div>

            <div className="box" id="space" style={styleSpaceBox} alt="ilustración del espacio con un astronauta">
                <div id="trip" >
                    <div id="box--iconTrop">
                        <img src={urlTrip} alt="icono de un cohete" />
                    </div>

                    <div id="box--subtitle">
                        <h5>{currentData.subtitle}</h5>
                    </div>

                    <div id="line"></div>

                    <div id="box--hash">
                        <h4>{currentData.hash}</h4>
                    </div>
                </div>

                <div className="box" id="rocket">
                    <div id={!currentData.moon ? 'box--cohete' : 'box--cohete-none'} style={styleRocketBox} alt="cohete despegando"></div>
                </div>

                <div className="box--progress--bar--desktop box--progress--bar--mobile">
                    <div id={currentData.moon ? `progress--bar--left` : `progress--bar--right`} >
                        <div className="bar"></div>
                    </div>
                </div>
            </div>

        </React.Fragment>

    )

}

export default AreaTwo;