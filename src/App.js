import React, { Component } from "react"
import { Route, NavLink } from 'react-router-dom';
import MidiPiano from "./components/MidiPiano"
import ToneJS from "./components/ToneJS"
import UserInput from "./components/UserInput";


class App extends Component {
  

  render() {
    console.log(this.state)
    return (
      <div>
        <NavLink style={{margin: "10px"}} to="/library">Library</NavLink>
        <NavLink style={{margin: "10px"}} to="/generator">Generator</NavLink>
        <Route path='/piano' component={MidiPiano}/>
        <Route path='/library' component={ToneJS} />
        <Route path='/generator' component={UserInput} />
      </div>
    );
  }
}
export default App;
