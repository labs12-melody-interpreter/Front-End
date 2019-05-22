import React, {Component} from 'react'
import './styles.css'
import PlayPause from './PlayPause'

class MusicLib extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isPlaying: false
    }
  }

  render() {
    const { isPlaying } = this.state
    return (
      <div>
        <PlayPause
          toggle={isPlaying}
          animate={() => this.setState({isPlaying: !isPlaying})}
          play={this.props.play}
          stop={this.stop}
        />
      </div>
    )
  }

}

export default MusicLib