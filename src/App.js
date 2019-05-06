import React, { Component } from "react"
import StyleDropdown from "./components/StyleDropdown"

class App extends Component {
  constructor() {
    super()

    this.state = {
      artist: "Bach",
      note: "",
      style: ""
    }
  }
  handleChange = (event) => {
    this.setState({note: event.target.value});
  }

  handleSubmit = (event) => {
    // todo: post request
  }

  handleArtistDropdown = (event) => {
    event.preventDefault()
    this.setState({
      artist: event.target.value
    })
  }

  handleStyleDropdown = (event) => {
    event.preventDefault()
    this.setState({
      style: event.target.value
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <form>
              <input id="note-input" type="text" name="note" value={this.state.note} onChange={this.handleChange} />
              <button id="note-button">Submit Note</button>
              <select id = "Artists" name="Artists" onChange={this.handleArtistDropdown}>
                  <option value="Bach">Bach</option>
                  <option value="Chopin">Chopin</option>
                  <option value="Mozart">Mozart</option>
              </select>
              <StyleDropdown artist={this.state.artist} handleStyleDropdown={this.handleStyleDropdown} />
          </form>
      </div>
    );
  }
}

export default App;
