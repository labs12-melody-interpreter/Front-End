import React, { Component } from 'react';
import Tone from 'tone';
import {} from '@tonejs/ui';

var songA='./scherzo_test_output.mp3'
var songB='./ForestGump.mp3'
var player={}
class PlayerLib extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggle : true }
    
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
      this.setState(state => ({ isToggle: !state.isToggle}));
      const play = this.state.isToggle;

      if ( play ) { 
          player = new Tone.Player(e).toMaster();
          Tone.Buffer.on('load', () => { player.start() });
      } else { player.stop() }
    } 
  
  render() {
    return (
      <div>
          <tr> 
        <th value={songA} onClick={() => this.handleClick(songA)}>Scherzo</th>
        </tr>
        <tr> 
        <th value={songB} onClick={() => this.handleClick(songB)}>ForestGump</th>
        </tr>
        <div></div>
        <button type="button" onClick={() => this.handleClick(songA)}>
            {this.state.isToggle ? 'Play' :'Stop' }
        </button>
      </div>
    );
  }
}

export default PlayerLib;