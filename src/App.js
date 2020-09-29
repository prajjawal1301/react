import React, { Component } from 'react';
import Counter from './Components/Counter'
import EventBind from './Components/EventBind'
import Greet from './Components/Greet'
import Message from './Components/Message'
import Newcomp from './Components/Newcomp'

export default class App extends Component {

  render() {
    return (
      <div>
        <Greet name="Bruce" heroName="Batman" place="Gotham">
          <p>This is children props. It is a reserved Keyword. </p>
        </Greet>
        <Greet name="Clark" heroName="Superman" place="Krypton"> <p>Press Here</p></Greet>
        <Greet name="Diana" heroName="Wonder Woman" place="Themyscira" />
        <Counter />
        <EventBind />
        <Message />
        <Newcomp />
      </div>
    );
  }
}
