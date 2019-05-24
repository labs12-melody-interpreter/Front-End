import React, { Component } from "react"
import  Midi  from "@tonejs/midi"
import { } from "@tonejs/ui"
import Tone from "tone"
import Button from "@material-ui/core/Button"
function fileDrop() {
  if (!(window.File && window.FileReader && window.FileList && window.Blob)) {
    document.querySelector("#FileDrop #Text").textContent = "Reading files not supported by this browser";
  } else {
    document.querySelector("#FileDrop input").addEventListener("change", e => {
      //get the files
      const files = e.target.files
      if (files.length > 0){
        const file = files[0]
        var msg = "Hit  Play  below to play := " + file.name
        document.querySelector("#FileDrop #Text").textContent = msg
        parseFile(file)
      }
    })
  }
}
let currentMidi = null
function parseFile(file){
  //read the file
  const reader = new FileReader()
  reader.onload = function(e){
    const midi = new Midi(e.target.result)
    currentMidi = midi
    
  }
  reader.readAsArrayBuffer(file)
}
class ToneJS extends Component {
  constructor(props){
    super(props)
    this.state = { 
      isToggle : true,
      isDisabled: true }
    this.handleClick = this.handleClick.bind(this);
    this.synth = null;
  }
  handleClick() {
    this.setState(state => ({ isToggle: !state.isToggle}));
    const playing = this.state.isToggle;
console.log('here',currentMidi, playing)
    if (currentMidi){
      if ( playing ) { 
      currentMidi.tracks.forEach(track => {
        //create a synth for each track
        this.synth = new Tone.PolySynth(10, Tone.Synth, {
          envelope : {
            attack : 0.02,
            decay : 0.1,
            sustain : 0.3,
            release : 1
          }
        }).toMaster()
        track.notes.forEach(note => {
          //console.log('inside track note',note.name,note.duration,note.time, note.velocity)
          this.synth.triggerAttackRelease(note.name, note.duration, note.time, note.velocity)
        })
      })
      } else {
        this.synth.disconnect()
        //this.synth.dispose()
      } 
    }
  } 
  fileDropper = () => {
    fileDrop()
    this.setState(prevState => ({
      isDisabled: !prevState.isDisabled,
    }));
  } 
  render() {
    const enabledButton = this.state.isDisabled ? true : false;
    return (
        <div>
<style type="text/css" dangerouslySetInnerHTML={{__html: "\n\t\t#FileDrop{\n\t\t\tposition: relative;\n\t\t\twidth: 100%;\n\t\t\theight: 100px;\n\t\t\tborder: 2px dashed black;\n\t\t\tcolor: black;\n\t\t\tmargin: 20px auto;\n\t\t}\n\t\t#FileDrop.Hover{\n\t\t\tbackground-color: black;\n\t\t\tcolor: white;\n\t\t}\n\t\t#FileDrop input {\n\t\t\tposition: absolute;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\topacity: 0;\n\t\t\tleft: 0px;\n\t\t\ttop: 0px;\n\t\t}\n\t\t#FileDrop #Text {\n\t\t\tposition: absolute;\n\t\t\twidth: 100%;\n\t\t\theight: 20px;\n\t\t\tline-height: 20px;\n\t\t\tleft: 0px;\n\t\t\ttop: 50%;\n\t\t\ttransform: translate(0, -50%);\n\t\t\ttext-align: center;\n\t\t}\n\t\ttextarea {\n\t\t\tfont-family: monospace;\n\t\t\theight: 300px;\n\t\t\twidth: 100%;\n\t\t\tdisplay: inline-block;\n\t\t\tposition: relative;\n\t\t\tfloat: left;\n\t\t}\n\t\t#Results {\n\t\t\tposition: relative;\n\t\t\twidth: 100%;\n\t\t\tmargin: 10px auto;\n\t\t}\n\t\t#Description {\n\t\t\tposition: relative;\n\t\t\twidth: 100%;\n\t\t\ttext-align: center;\n\t\t\theight: 40px;\n\t\t\tfont-size: 16px;\n\t\t\tmargin: 10px auto;\n\t\t\tfont-family: sans-serif;\n\t\t}\n\t\ttone-play-toggle {\n\t\t\tmargin-top: 10px;\n\t\t}\n\t" }} /> 
          
          <tone-content>
            <div id="FileDrop">
              <div id="Text">
                Click here to load a midi file
              </div>
              <input type="file" accept="audio/midi"  onClick={this.fileDropper}/>
          
            </div>
            
            
            <Button id='playStop'  disabled={enabledButton}
            variant="contained" color="primary" onClick={() => this.handleClick()}>
            {this.state.isToggle ? 'Play' :'Stop' }
        </Button>
         
          </tone-content>
        </div>
      );
  }
}
 
export default ToneJS;