import React from 'react';

const Title = ({ currentData, mobileTitle }) => {

    return (
        <React.Fragment>
            <div className="box--title" id="first__title">
                <h1>{currentData.title}</h1>
            </div>
            <div className="box--title" id="second__title--mobile">
                <h1>{mobileTitle}</h1>
            </div>

        </React.Fragment>
    )
}

export default Title;