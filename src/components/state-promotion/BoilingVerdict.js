import React from 'react';

const BoilingVerdict = (props) =>  {
    if (props.celsius >= 100) {
        return <p>The water would boiling.</p>
    }
    return <p>The water wouldn't boiling.</p>
}

export default BoilingVerdict;