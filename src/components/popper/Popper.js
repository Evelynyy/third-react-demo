import React from 'react';

class Popper extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'Welcome to React!'
        };
    }

    preventPop(name, e) {
        e.preventDefault();
        alert(name);
    }

    render() {
        return (
            <div>
                <p>hello</p>
                <a href="https://reactjs.org" onClick={this.preventPop.bind(this, this.state.name)}>Click Me</a>
            </div>
        );
    }
}

export default Popper;
