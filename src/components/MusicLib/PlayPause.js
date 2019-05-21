import React, { Component } from 'react' 
import { Motion, spring } from 'react-motion'

class PlayPause extends Component {

  constructor(props) {
    super(props)
    this.play = this.play.bind(this);
  }

  async animate() {
    console.log("animate props", this.props)
    this.props.animate()
  }

  async play() {
    console.log("play this", this)
    this.props.play()
  }

  

  onClickPlay = event => {
    this.animate().then(this.play)
  }
  render() {
    const { toggle } = this.props
    
    return(
      <Motion
        style={{scale: spring(toggle ? 1 : 0, [1000, 100])}}
      >
        {({scale}) =>
          <button
            type="button"
            className="play-pause"
            onClick={toggle ? this.onClickPlay : this.props.stop }
          >
            <span
              className="play-pause__playhead"
              style={{
                transform: `scaleX(${1 - scale})`,
                WebkitTransform: `scaleX(${1 - scale})`
              }}
            />
            <span
              className="play-pause__pausehead"
              style={{
                transform: `scaleX(${scale})`,
                WebkitTransform: `scaleX(${scale})`
              }}
            />
          </button>
        }
      </Motion>
    )
  }
}

export default PlayPause