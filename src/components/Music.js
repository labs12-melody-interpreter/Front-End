
import React, { Component } from 'react';
import Tone from 'tone';
import {} from '@tonejs/ui';
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import IconButton from '@material-ui/core/IconButton';
 
//var songC='./scherzo_test_output.mp3'
//var songB='./ForestGump.mp3'
//var songA=""
var player={}

class Music extends Component {
constructor(props) {
    super(props);
    this.state = { 
        isToggle : true ,
        song : ""
    }
    
    this.handleClick = this.handleClick.bind(this);
}
handleClick(e)  {
    console.log('handleclick'+e)
    this.setState(state => ({ isToggle: !state.isToggle}));
    const play = this.state.isToggle;


    if ( play ) { 
        player = new Tone.Player(e).toMaster();
        Tone.Buffer.on('load', () => { player.start() });
    } else { player.stop() }
  }
render() {
//const Music = (props) => {
    //console.log(props)
    const props = this.props
    const currentSong = props.music.fields.musicSong.fields.file.url

    return(
    <div >
        { props.music ? (
            <Card >       
                <CardMedia style={{height: 0, paddingTop: '56.25%'}}
                                    image={props.music.fields.musicImage.fields.file.url}
                                    title={props.music.fields.title}
                                    />
                    <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {props.music.fields.title}
                    </Typography>
                    <Typography component="p">
                        {props.music.fields.description}<br></br>
                        {(props.music.fields.musicSong.fields.file.url).split('/').pop()}
                       
                    </Typography>
                    </CardContent>
                    <CardActions> 
                    {/*<Button size="small" color="primary" href={props.music.fields.url} target="_blank"> */}
                    <Button size="small" color="primary" onClick={() => this.handleClick(currentSong)} >
                        {this.state.isToggle ? 'Play' :'Stop' }
          
                    </Button>

    <IconButton aria-label="Play/pause" onClick={() => this.handleClick(currentSong)} >
        <PlayArrowIcon  />
        </IconButton>
                    </CardActions>
                        
            </Card>
        ) : null}
    </div>
    )
          //  } // Music
} // render
} // class

export default Music