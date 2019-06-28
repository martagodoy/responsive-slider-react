import React from 'react';
import AreaOne from '../AreaOne';
import AreaTwo from '../AreaTwo';

const Areas = ({ currentData, mobileMoon }) => {

    return (
        <React.Fragment>
            <AreaOne currentData={currentData} />
            <AreaTwo currentData={currentData} mobileMoon={mobileMoon} />
        </React.Fragment>

    )
}

export default Areas;