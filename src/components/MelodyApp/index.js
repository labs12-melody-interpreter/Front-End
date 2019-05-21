import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import * as contentful from 'contentful'
import MelodyCard from './MelodyCard'
import NavBar from './NavBar'


const SPACE_ID = 'viwz6ijsgmv0'
//const ACCESS_TOKEN = 'oHtYpNeS0GEfn2ytvKJeBY1heSHNpZSabBXh_Ck-tA0'
//const SPACE_ID = 'viwz6ijsgmv0'
const ACCESS_TOKEN = 'w3GgVeFeFLYkCfJCIsHfo0SG44cH4ToUuDpRYM2lMJk'
const client = contentful.createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
})
class MelodyApp extends Component {
    state = {
        contentFields: [],
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
            this.setState({contentFields: response.items})
            console.log(this.state.contentFields)
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
            <NavBar></NavBar>
                { this.state.contentFields ? (
                    <div>
                        <TextField style={{padding: 24}}
                            id="searchInput"
                            placeholder="Search for Musics"   
                            margin="normal"
                            onChange={this.onSearchInputChange}
                            />
                        <Grid container spacing={24} style={{padding: 24}}>
                            { this.state.contentFields.map(currentField => (
                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <MelodyCard music={currentField} />
                                    </Grid>
                            ))}
                        </Grid>
                    </div>
                ) : "No musics found" }
            </div>
        )
    }
}
export default MelodyApp;