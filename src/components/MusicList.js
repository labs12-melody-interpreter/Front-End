import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import * as contentful from 'contentful'
import Music from '../components/Music'
const SPACE_ID = 'viwz6ijsgmv0'
const ACCESS_TOKEN = 'oHtYpNeS0GEfn2ytvKJeBY1heSHNpZSabBXh_Ck-tA0'
const client = contentful.createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
})
class MusicList extends Component {
    state = {
        musics: [],
        searchString: ''
    }
    constructor() {
        super()
        this.getMusics()
    }
    getMusics = () => {
        client.getEntries({
            content_type: 'chopin',
            query: this.state.searchString
        })
        .then((response) => {
            this.setState({musics: response.items})
            console.log(this.state.musics)
        })
        .catch((error) => {
            console.log("Error occurred while fetching Entries")
            console.error(error)
          })
      }
      onSearchInputChange = (event) => {
          console.log("Search changed ..." + event.target.value)
          if (event.target.value) {
              this.setState({searchString: event.target.value})
          } else {
              this.setState({searchString: ''})
          }
          this.getMusics()
      }
      render() {
        return (
            <div>
                { this.state.musics ? (
                    <div>
                        <TextField style={{padding: 24}}
                            id="searchInput"
                            placeholder="Search for Musics"   
                            margin="normal"
                            onChange={this.onSearchInputChange}
                            />
                        <Grid container spacing={24} style={{padding: 24}}>
                            { this.state.musics.map(currentMusic => (
                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <Music music={currentMusic} />
                                    </Grid>
                            ))}
                        </Grid>
                    </div>
                ) : "No musics found" }
            </div>
        )
    }
}
export default MusicList;