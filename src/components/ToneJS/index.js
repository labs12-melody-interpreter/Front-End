import React, { Component } from "react"
import  Midi  from "@tonejs/midi"
import { } from "@tonejs/ui"
import Tone from "tone"
import MusicLib from "../MusicLib"
import PlayerLib from "../PlayerLib"
import NavBar from "../NavBar"
import MusicList from "../MusicList"

function fileDrop() {
  if (!(window.File && window.FileReader && window.FileList && window.Blob)) {
    document.querySelector("#FileDrop #Text").textContent = "Reading files not supported by this browser";
  } else {

    const fileDrop = document.querySelector("#FileDrop")

    fileDrop.addEventListener("dragenter", () => fileDrop.classList.add("Hover"))

    fileDrop.addEventListener("dragleave", () => fileDrop.classList.remove("Hover"))

    fileDrop.addEventListener("drop", () => fileDrop.classList.remove("Hover"))

    document.querySelector("#FileDrop input").addEventListener("change", e => {
      //get the files
      const files = e.target.files
      if (files.length > 0){
        const file = files[0]
        document.querySelector("#FileDrop #Text").textContent = file.name
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
    document.querySelector("#ResultsText").value = JSON.stringify(midi, undefined, 2)
    currentMidi = midi
  }
  reader.readAsArrayBuffer(file)
}

function play(){
  console.log("currentMidi",currentMidi)
  const synths = []
  //document.querySelector('tone-play-toggle').addEventListener('play', (e) => {
    //const playing = e.detail
    if (currentMidi){
      // const now = new Tone.now() + 0.5
      currentMidi.tracks.forEach(track => {
        //create a synth for each track
        const synth = new Tone.PolySynth(10, Tone.Synth, {
          envelope : {
            attack : 0.02,
            decay : 0.1,
            sustain : 0.3,
            release : 1
          }
        }).toMaster()
        synths.push(synth)
        //schedule all of the events
        track.notes.forEach(note => {
          synth.triggerAttackRelease(note.name, note.duration, note.time, note.velocity)
        })
      })
    } else {
      //dispose the synth and make a new one
      while(synths.length){
        const synth = synths.shift()
        synth.dispose()
      }
    }
  //})
}

class ToneJS extends Component {
  
  render() {
    //document.querySelector('tone-play-toggle').bind(play);
    return (
        <div>
          <style type="text/css" dangerouslySetInnerHTML={{__html: "\n\t\t#FileDrop{\n\t\t\tposition: relative;\n\t\t\twidth: 100%;\n\t\t\theight: 100px;\n\t\t\tborder: 2px dashed black;\n\t\t\tcolor: black;\n\t\t\tmargin: 20px auto;\n\t\t}\n\t\t#FileDrop.Hover{\n\t\t\tbackground-color: black;\n\t\t\tcolor: white;\n\t\t}\n\t\t#FileDrop input {\n\t\t\tposition: absolute;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\topacity: 0;\n\t\t\tleft: 0px;\n\t\t\ttop: 0px;\n\t\t}\n\t\t#FileDrop #Text {\n\t\t\tposition: absolute;\n\t\t\twidth: 100%;\n\t\t\theight: 20px;\n\t\t\tline-height: 20px;\n\t\t\tleft: 0px;\n\t\t\ttop: 50%;\n\t\t\ttransform: translate(0, -50%);\n\t\t\ttext-align: center;\n\t\t}\n\t\ttextarea {\n\t\t\tfont-family: monospace;\n\t\t\theight: 300px;\n\t\t\twidth: 100%;\n\t\t\tdisplay: inline-block;\n\t\t\tposition: relative;\n\t\t\tfloat: left;\n\t\t}\n\t\t#Results {\n\t\t\tposition: relative;\n\t\t\twidth: 100%;\n\t\t\tmargin: 10px auto;\n\t\t}\n\t\t#Description {\n\t\t\tposition: relative;\n\t\t\twidth: 100%;\n\t\t\ttext-align: center;\n\t\t\theight: 40px;\n\t\t\tfont-size: 16px;\n\t\t\tmargin: 10px auto;\n\t\t\tfont-family: sans-serif;\n\t\t}\n\t\ttone-play-toggle {\n\t\t\tmargin-top: 10px;\n\t\t}\n\t" }} />
          <tone-content>
            <div id="FileDrop">
              <div id="Text">
                Drop a midi file here
              </div>
              <input type="file" accept="audio/midi"  onClick={fileDrop}/>
            </div>
            <div id="Results">
              <textarea id="ResultsText" placeholder="json output..." defaultValue={""} />
            </div>
            
            <tone-play-toggle ></tone-play-toggle> 
            {/* <tone-play-toggle disabled id="tone-play-toggle" onClick={ play }/>  */}
            <MusicLib id="tone-play-toggle" play={ play } />
            <PlayerLib></PlayerLib>
            <div>
              <NavBar></NavBar>
              <MusicList />
            </div>
            
         
          </tone-content>
        </div>
      );
  }
}
 
export default ToneJS;