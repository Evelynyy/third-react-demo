import React, { Component } from 'react';
import './App.css';
import Clock from './components/clock/Clock';
import Toggle from './components/toggle/Toggle';
import Popper from './components/popper/Popper';
import Greeting from './components/greeting/Greeting';
import LoginControl from './components/greeting/LoginControl';
import Mailbox from './components/mailbox/Mailbox';
import Page from './components/page/Page';
import NumberList from './components/list/NumberList';
import BlogList from './components/list/BlogList';
import NameForm from './components/form/NameForm';
import EssayForm from './components/form/EssayForm';
import FlavorForm from './components/form/FlavorForm';
import Reservation from './components/form/Reservation';
import Calculator from './components/state-promotion/Calculator';
import WelcomeDialog from './components/dialog/WelcomeDialog';
import SplitPane from './components/splitpane/SplitPane';
import Contacts from './components/splitpane/Contacts';
import Chat from './components/splitpane/Chat';
import SignUpDialog from './components/dialog/SignUpDialog';
import FilterableProductTable from './components/product-table/FilterableProductTable';

class App extends Component {
  render() {
    const messages = ['React', 'Re: React', 'Re:Re: React'];

    const numbers = [1, 2, 3, 4, 5];

    const posts = [
      {
        id: 1,
        title: 'Hello React',
        content: 'Welcome to learning React!'
      },
      {
        id: 2,
        title: 'Installation',
        content: 'You can install React from npm.'
      }
    ]

    var PRODUCTS = [
      {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
      {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
      {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
      {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
      {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
      {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
    ];

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

        <Page/>
        <hr/>

        <NumberList numbers={numbers}/>
        <hr/>

        <BlogList posts={posts}/>
        <hr/>

        <NameForm />
        <hr/>
        
        <EssayForm/>
        <hr/>

        <FlavorForm/>
        <hr />

        <Reservation />
        <hr />

        <Calculator />
        <hr />

        <WelcomeDialog/>
        <hr />

        <SplitPane 
          left={
            <Contacts />
          }
          right={
            <Chat />
          } />
        <hr />

        <SignUpDialog />
        <hr />

        <FilterableProductTable products={PRODUCTS} />



        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </div>
    );
  }
}


export default App;
