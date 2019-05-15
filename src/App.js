import React, { Component } from "react"
import StyleDropdown from "./components/StyleDropdown"
import axios from "axios"
import MidiPiano from "./components/MidiPiano"
import ToneJS from "./components/ToneJS"

class App extends Component {
  constructor() {
    super()
    this.state = {
      artist: "Bach",
      note: "",
      style: "",
      model: "128"
    }
  }
  handleChange = (event) => {
    this.setState({note: event.target.value});
  }
  
  handleSubmit = (event) => {
    event.preventDefault()
    const FileDownload = require('js-file-download');
    //http://localhost:5000/generator/
    //https://music-interpolator-backend.herokuapp.com/generator/
    //http://musicinterpolatorbackend-env-1.n8t342ngdz.us-east-2.elasticbeanstalk.com/generator/ *AWS Not working
    axios.post("http://musicinterpolatorbackend-env-1.n8t342ngdz.us-east-2.elasticbeanstalk.com/generator/", this.state,
    {
      responseType: 'blob',
    })
    .then((res)=>{
      console.log(res.data, "res.data")
      FileDownload(res.data, this.state.artist+"_"+this.state.style+"_"+this.state.note+"_"+this.state.model+".mid")
      
    })
    .catch((error) => {
        // ...
    });
  }
 

  handleArtistDropdown = (event) => {
    event.preventDefault()
    this.setState({
      artist: event.target.value
    })
  }

  handleModelDropdown = (event) => {
    event.preventDefault()
    this.setState({
      model: event.target.value
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
        <form action = "/generator/" method = "POST">
              <input id="note-input" type="text" name="note" value={this.state.note} onChange={this.handleChange} />
              <button id="note-button" onClick={this.handleSubmit}>Submit Note</button>
              <select id="artist" name="artist" onChange={this.handleArtistDropdown}>
                  <option value="Bach">Bach</option>
                  <option value="Chopin">Chopin</option>
                  <option value="Mozart">Mozart</option>
              </select>
              <select id="model" name="model" value={this.state.model} onChange={this.handleModelDropdown}>
                  <option value="128">128 LSTM</option>
                  <option value="256">256 LSTM</option>
                  <option value="512">512 LSTM</option>
              </select>
              <StyleDropdown artist={this.state.artist} handleStyleDropdown={this.handleStyleDropdown} />
          </form>
          <ToneJS />
          <MidiPiano />
      </div>
    );
  }
}
export default App;
