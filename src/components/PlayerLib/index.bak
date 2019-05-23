import React, { Component } from "react"
import Tone from "tone"
import { } from "@tonejs/ui"

const synth = new Tone.Synth();
synth.oscillator.type = 'sine';
const gain = new Tone.Gain(0.5);
gain.toMaster();
synth.connect(gain);

const player = new Tone.Player('./scherzo_test_output.mp3').toMaster()
/*
Tone.Buffer.on('load', () => {
    player.start();
})
*/

const notes = ['C4','E4','G4','C5','E5','G5'];
let index=0;

function repeat(time) {
    let note = notes[index % notes.length ];
    synth.triggerAttackRelease(note,'8n',time)
    index++;
}


class PlayerLib extends Component {
    constructor(props){
    super(props)

    this.state = {
        on: false,
        }
    }      
    
    play() { 
        /*
        Tone.Transport.scheduleRepeat(time => {
            repeat(time);
        }, '8n');
        Tone.Transport.start() 
        */
       player.start()
    }

    stop() { 
        //Tone.Transport.stop() 
        player.stop()
    }


    toggle = () => {
        this.setState({
            on : !this.state.on
        });
    }
    
    render() {
        
        if (this.state.on) {
            this.play()
            
        } else { 
            this.stop()
        }
    return (
        <div>
            
            <button onClick={this.toggle}>Play/Stop</button>
        </div>
    
    )}
}

export default PlayerLib