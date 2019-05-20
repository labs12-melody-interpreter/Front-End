import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const Music = (props) => {
    console.log(props)
    return(
        <div>
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
                                            {props.music.fields.description}
                                        </Typography>
                                        </CardContent>
                                        <CardActions>
                                        <Button size="small" color="primary" href={props.music.fields.url} target="_blank">
                                            Go To Music
                                        </Button>
                                        </CardActions>
                </Card>
            ) : null}
        </div>
    )
}
export default Music