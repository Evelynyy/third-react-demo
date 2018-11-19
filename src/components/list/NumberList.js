import React from 'react';
import ListItems from './ListItem';

const NumberList = (props) => {
    const numbers = props.numbers;
    const listItems = numbers.map((number) => 
        <ListItems key={number.toString()}
            value={number} />
    )
    return (
        <ul>
            {listItems}
        </ul>
    );
}

export default NumberList;
