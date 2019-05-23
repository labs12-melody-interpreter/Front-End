import React, { Component } from 'react'
import axios from "axios"
import StyleDropdown from "../StyleDropdown"
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
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

      handleNoteDropdown = (event) => {
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
              <h4>Step 1: Pick an artist</h4>
              <form action = "/generator/" method = "POST">
                <FormControl style={{ minWidth: '160px' }}>
                  <InputLabel>Artist</InputLabel>
                  <Select id="artist" name="artist" required label="Artist" value={this.state.artist} onChange={this.handleArtistDropdown}>
                    <MenuItem value="Bach">Bach</MenuItem>
                    <MenuItem value="Beethoven">Beethoven</MenuItem>
                    <MenuItem value="Chopin">Chopin</MenuItem>
                    <MenuItem value="Mozart">Mozart</MenuItem>
                  </Select>
                </FormControl>
                <h4>Step 2: Pick a note to start the song with, style, and model then hit Submit</h4>
                <FormControl style={{ minWidth: '80px'}}>
                  <InputLabel>Note</InputLabel>
                  <Select id="note" name="note" required label="Note" value={this.state.note} onChange={this.handleNoteDropdown}>
                    <MenuItem value="C2">C2</MenuItem>
                    <MenuItem value="C#2">C#2</MenuItem>
                    <MenuItem value="D2">D2</MenuItem>
                    <MenuItem value="D#2">D#2</MenuItem>
                    <MenuItem value="E2">E2</MenuItem>
                    <MenuItem value="F2">F2</MenuItem>
                    <MenuItem value="F#2">F#2</MenuItem>
                    <MenuItem value="G2">G2</MenuItem>
                    <MenuItem value="G#2">G#2</MenuItem>
                    <MenuItem value="A2">A2</MenuItem>
                    <MenuItem value="A#2">A#2</MenuItem>
                    <MenuItem value="B2">B2</MenuItem>
                    <MenuItem value="C3">C3</MenuItem>
                    <MenuItem value="C#3">C#3</MenuItem>
                    <MenuItem value="D3">D3</MenuItem>
                    <MenuItem value="D#3">D#3</MenuItem>
                    <MenuItem value="E3">E3</MenuItem>
                    <MenuItem value="F3">F3</MenuItem>
                    <MenuItem value="F#3">F#3</MenuItem>
                    <MenuItem value="G3">G3</MenuItem>
                    <MenuItem value="G#3">G#3</MenuItem>
                    <MenuItem value="A3">A3</MenuItem>
                    <MenuItem value="A#3">A#3</MenuItem>
                    <MenuItem value="B3">B3</MenuItem>
                    <MenuItem value="C4">C4</MenuItem>
                    <MenuItem value="C#4">C#4</MenuItem>
                    <MenuItem value="D4">D4</MenuItem>
                    <MenuItem value="D#4">D#4</MenuItem>
                    <MenuItem value="E4">E4</MenuItem>
                    <MenuItem value="F4">F4</MenuItem>
                    <MenuItem value="F#4">F#4</MenuItem>
                    <MenuItem value="G4">G4</MenuItem>
                    <MenuItem value="G#4">G#4</MenuItem>
                    <MenuItem value="A4">A4</MenuItem>
                    <MenuItem value="A#4">A#4</MenuItem>
                    <MenuItem value="B4">B4</MenuItem>
                    <MenuItem value="C5">C5</MenuItem>
                    <MenuItem value="C#5">C#5</MenuItem>
                    <MenuItem value="D5">D5</MenuItem>
                    <MenuItem value="D#5">D#5</MenuItem>
                    <MenuItem value="E5">E5</MenuItem>
                    <MenuItem value="F5">F5</MenuItem>
                    <MenuItem value="F#5">F#5</MenuItem>
                    <MenuItem value="G5">G5</MenuItem>
                    <MenuItem value="G#5">G#5</MenuItem>
                    <MenuItem value="A5">A5</MenuItem>
                    <MenuItem value="A#5">A#5</MenuItem>
                    <MenuItem value="B5">B5</MenuItem>
                    <MenuItem value="C6">C6</MenuItem>
                    <MenuItem value="C#6">C#6</MenuItem>
                    <MenuItem value="D6">D6</MenuItem>
                    <MenuItem value="D#6">D#6</MenuItem>
                    <MenuItem value="E6">E6</MenuItem>
                    <MenuItem value="F6">F6</MenuItem>
                    <MenuItem value="F#6">F#6</MenuItem>
                    <MenuItem value="G6">G6</MenuItem>
                    <MenuItem value="G#6">G#6</MenuItem>
                    <MenuItem value="A6">A6</MenuItem>
                    <MenuItem value="A#6">A#6</MenuItem>
                    <MenuItem value="B6">B6</MenuItem>
                    <MenuItem value="C7">C7</MenuItem>
                    <MenuItem value="C#7">C#7</MenuItem>
                    <MenuItem value="D7">D7</MenuItem>
                    <MenuItem value="D#7">D#7</MenuItem>
                    <MenuItem value="E7">E7</MenuItem>
                    <MenuItem value="F7">F7</MenuItem>
                    <MenuItem value="G7">G7</MenuItem>
                    <MenuItem value="G#7">G#7</MenuItem>
                    <MenuItem value="A7">A7</MenuItem>
                    <MenuItem value="A#7">A#7</MenuItem>
                    <MenuItem value="B7">B7</MenuItem>
                  </Select>
                </FormControl>
                <FormControl style={{ minWidth: '80px'}}>
                  <InputLabel>LSTM</InputLabel>
                  <Select id="model" name="model" value={this.state.model} onChange={this.handleModelDropdown}>
                    <MenuItem value="128">128 LSTM</MenuItem>
                    <MenuItem value="256">256 LSTM</MenuItem>
                    <MenuItem value="512">512 LSTM</MenuItem>
                  </Select>
                  
                  <StyleDropdown artist={this.state.artist} style={this.state.style} handleStyleDropdown={this.handleStyleDropdown} />
                </FormControl>
                
                <Button variant="contained" color="primary" id="note-button" onClick={this.handleSubmit}>Submit</Button>
              </form>
              <h4>Step 3: Wait 30-60 seconds for the AI to generate a music file and download</h4>
              <h4>Step 4: Click and load the music file below and hit play!</h4>
              <ToneJS></ToneJS>
            </div>
           );
      }
}
 
export default UserInput;