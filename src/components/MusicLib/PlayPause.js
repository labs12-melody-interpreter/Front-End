import React, { Component } from 'react' 
import { Motion, spring } from 'react-motion'

class PlayPause extends Component {
  onClickPlay = event => {
    this.props.onClick()
    this.props.play()
  }
  render() {
    const { toggle } = this.props
    
    return(
      <Motion
        style={{scale: spring(toggle ? 1 : 0, [300, 30])}}
      >
        {({scale}) =>
          <button
            type="button"
            className="play-pause"
            onClick={this.onClickPlay}
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