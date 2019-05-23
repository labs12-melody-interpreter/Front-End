import React, { Component } from 'react'
import axios from "axios"
import StyleDropdown from "../StyleDropdown"
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ToneJS from '../ToneJS';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

class UserInput extends Component {
    constructor() {
        super()
        this.state = {
          artist: "",
          note: "",
          style: "",
          model: ""
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
        axios.post("https://d2e5qclo8zym4m.cloudfront.net/generator/", this.state,
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
          return ( 


            <div align="center">
              <h2>Create an AI generated song from scratch</h2>
              <h4>Step 1: Pick a note</h4>
              <form action = "/generator/" method = "POST">
                <TextField required label="Required" id="note-input" type="text" name="note" value={this.state.note} onChange={this.handleChange} />
                <h4>Step 2: Pick an artist, style, and model then hit Submit</h4>
                <FormControl style={{ minWidth: '160px' }}>
                  <InputLabel>Artist</InputLabel>
                  <Select id="artist" name="artist" required label="Artist" value={this.state.artist} onChange={this.handleArtistDropdown}>
                    <MenuItem value="Bach">Bach</MenuItem>
                    <MenuItem value="Beethoven">Beethoven</MenuItem>
                    <MenuItem value="Chopin">Chopin</MenuItem>
                    <MenuItem value="Mozart">Mozart</MenuItem>
                  </Select>
                </FormControl>
                <FormControl style={{ mindWidth: '80px'}}>
                  <InputLabel>LSTM</InputLabel>

                  <Select id="model" name="model" value={this.state.model} onChange={this.handleModelDropdown}>
                    <MenuItem value="128">128 LSTM</MenuItem>
                    <MenuItem value="256">256 LSTM</MenuItem>
                    <MenuItem value="512">512 LSTM</MenuItem>
                  </Select>
                  
                  <StyleDropdown artist={this.state.artist} style={this.state.style} handleStyleDropdown={this.handleStyleDropdown} />
                </FormControl>
                
                <Button variant="contained" color="primary" id="note-button" onClick={this.handleSubmit}>Submit Note</Button>
              </form>
              <h4>Step 3: Wait 30-60 seconds for the AI to generate a music file</h4>
              <h4>Step 4: Click and drag the music file below and hit play!</h4>
              <ToneJS></ToneJS>
            </div>
           );
      }
}
 
export default UserInput;