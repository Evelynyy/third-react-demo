import React, { Component } from 'react';
import './App.css';
import Clock from './components/clock/Clock';
import Toggle from './components/toggle/Toggle';
import Popper from './components/popper/Popper';
import Greeting from './components/greeting/Greeting';
import LoginControl from './components/greeting/LoginControl';
import Mailbox from './components/mailbox/Mailbox';

class App extends Component {
  render() {
    const messages = ['React', 'Re: React', 'Re:Re: React'];

    return (
      <div className="App">
        <Clock date={ new Date() }/>
        <hr/>

        <Toggle/>
        <hr/>

        <Popper/>
        <hr/>

        <Greeting isLoggedIn={false}/>
        <hr/>

        <LoginControl/>
        <hr/>

        <Mailbox unreadMessages={messages}/>
        <hr/>

      </div>
    );
  }
}


export default App;
