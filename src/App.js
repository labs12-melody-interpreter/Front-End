import React, { Component } from "react"
import { Route, NavLink } from 'react-router-dom';
import MidiPiano from "./components/MidiPiano"
import UserInput from "./components/UserInput";
import MelodyApp from "./components/MelodyApp"
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import withState from 'recompose/withState';
import toRenderProps from 'recompose/toRenderProps';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import About from "./components/About";

const WithState = toRenderProps(withState('anchorEl', 'updateAnchorEl', null));


class App extends Component {
  

  render() {
    console.log(this.state)
    return (
      <div>
        <AppBar position="static">
          <Toolbar variant="dense">
            
            <WithState>
              {({ anchorEl, updateAnchorEl }) => {
                const open = Boolean(anchorEl);
                const handleClose = () => {
                  updateAnchorEl(null);
                };
                return (
              <React.Fragment>
                <IconButton 
                  aria-owns={open ? 'render-props-menu' : undefined}
                  aria-haspopup="true"
                  onClick={event => {
                    updateAnchorEl(event.currentTarget);
                  }}
                  >
                  <MenuIcon/>

                </IconButton>
                <Menu id="render-props-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>          
                  <MenuItem onClick={handleClose}>
                    <NavLink style={{margin: "10px", textDecoration:'none', color:'unset'}} to="/">Home</NavLink>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <NavLink style={{margin: "10px", textDecoration:'none', color:'unset'}} to="/generator/">Generator</NavLink>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <NavLink style={{margin: "10px", textDecoration:'none', color:'unset'}} to="/library">Library</NavLink>
                  </MenuItem>
                </Menu>
                
                <Typography variant="h6" color="inherit">
                Melody Interpolator
                </Typography>
              </React.Fragment>
                  )
                }}
            </WithState>
          </Toolbar>
        </AppBar>
        <Route path='/piano' component={MidiPiano}/>
        <Route path='/library' component={MelodyApp} />
        <Route path='/generator/' component={UserInput} />
        <Route exact path='/' component={About} />
      </div>
    );
  }
}
export default App;
