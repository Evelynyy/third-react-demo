import React from 'react';

const FormattedDate = (props) => {
    return <h2>现在是 { props.date.toLocaleTimeString() }</h2>
}

export default FormattedDate;
