import React from 'react';
import UserGreeting from './UserGreeting';
import GuestGreting from './GuestGreting';

const Greeting  = (props) => {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting/>;
    }
    return <GuestGreting/>;
}

export default Greeting;
