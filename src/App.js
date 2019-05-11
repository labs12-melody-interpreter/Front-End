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
      style: ""
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
    //http://musicinterpolatorbackend-env-1.n8t342ngdz.us-east-2.elasticbeanstalk.com/ *AWS Not working
    axios.post("https://music-interpolator-backend.herokuapp.com/generator/", this.state,
    {
      responseType: 'blob',
    })
    .then((res)=>{
      console.log(res.data, "res.data")
      FileDownload(res.data,'test_output.mid')
      
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
              <select id = "artist" name="artist" onChange={this.handleArtistDropdown}>
                  <option value="Bach">Bach</option>
                  <option value="Chopin">Chopin</option>
                  <option value="Mozart">Mozart</option>
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
