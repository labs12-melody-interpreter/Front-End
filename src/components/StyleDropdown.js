import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const StyleDropdown = props => {
  if (!props.artist) {
    return <h1>Loading...</h1>;
  }
  if (props.artist === 'Bach') {
    return (
      <div className="container">
        <div className="Bach">
          <FormControl style={{ minWidth: '160px' }}>
            <InputLabel htmlFor="style">Style</InputLabel>
            <Select
              className="second-level-select"
              onChange={props.handleStyleDropdown}
              inputProps={{
                name: 'style',
                id: 'style',
              }}
            >
              <MenuItem value="alla_breve">Alla Breve</MenuItem>
              <MenuItem value="canzona">Canzona</MenuItem>
              <MenuItem value="concerto">Concerto</MenuItem>
              <MenuItem value="fantasy_and_fuga">Fantasy and Fuga</MenuItem>
              <MenuItem value="fugue">Fugue</MenuItem>
              <MenuItem value="kleines">Kleines</MenuItem>
              <MenuItem value="passacaglia">Passacaglia</MenuItem>
              <MenuItem value="pastorale">Pastorale</MenuItem>
              <MenuItem value="pedale">Pedale</MenuItem>
              <MenuItem value="sonata">Sonata</MenuItem>
              <MenuItem value="toccata_and_fuga">Toccata and Fuga</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    );
  }
  if (props.artist === 'Beethoven') {
    return (
      <div className="container">
        <div className="Beethoven">
          <FormControl style={{ minWidth: '160px' }}>
            <InputLabel htmlFor="style">Style</InputLabel>
            <Select
              className="second-level-select"
              onChange={props.handleStyleDropdown}
              inputProps={{
                name: 'style',
                id: 'style',
              }}
            >
              <MenuItem value="allegretto">Allegretto</MenuItem>
              <MenuItem value="andante">Andante</MenuItem>
              <MenuItem value="bagatelles">Bagatelles</MenuItem>
              <MenuItem value="canon">Canon</MenuItem>
              <MenuItem value="fantast">Fantasy</MenuItem>
              <MenuItem value="polonaise">Polonaise</MenuItem>
              <MenuItem value="rondo">Rondo</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    );
  }
  if (props.artist === 'Chopin') {
    return (
      <div className="container">
        <div className="Chopin">
          <FormControl style={{ minWidth: '160px' }}>
            <InputLabel htmlFor="style">Style</InputLabel>
            <Select
              className="second-level-select"
              onChange={props.handleStyleDropdown}
              inputProps={{
                name: 'style',
                id: 'style',
              }}
            >
              <MenuItem value="and">and</MenuItem>
              <MenuItem value="ballade">Ballade</MenuItem>
              <MenuItem value="bar">bar</MenuItem>
              <MenuItem value="ber">ber</MenuItem>
              <MenuItem value="bol">bol</MenuItem>
              <MenuItem value="conc">conc</MenuItem>
              <MenuItem value="eco">eco</MenuItem>
              <MenuItem value="etu">etu</MenuItem>
              <MenuItem value="fan">fan</MenuItem>
              <MenuItem value="fun">fun</MenuItem>
              <MenuItem value="imp">imp</MenuItem>
              <MenuItem value="maz">maz</MenuItem>
              <MenuItem value="nocturne">Nocturne</MenuItem>
              <MenuItem value="nou">nou</MenuItem>
              <MenuItem value="polonaise">Polonaise</MenuItem>
              <MenuItem value="pre">pre</MenuItem>
              <MenuItem value="ron">ron</MenuItem>
              <MenuItem value="scherzo">Scherzo</MenuItem>
              <MenuItem value="sonata">Sonata</MenuItem>
              <MenuItem value="tar">tar</MenuItem>
              <MenuItem value="val">val</MenuItem>
              <MenuItem value="waltz">Waltz</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    );
  }
  if (props.artist === 'Mozart') {
    return (
      <div className="container">
        <div className="Mozart">
          <FormControl style={{ minWidth: '160px' }}>
            <InputLabel htmlFor="style">Style</InputLabel>
            <Select
              className="second-level-select"
              onChange={props.handleStyleDropdown}
              inputProps={{
                name: 'style',
                id: 'style',
              }}
            >
              <MenuItem value="alla_turca">Alla Turca</MenuItem>
              <MenuItem value="diea_irae">Diea Irae</MenuItem>
              <MenuItem value="eine_kleine">Eine Kleine</MenuItem>
              <MenuItem value="menuett">Menuett</MenuItem>
              <MenuItem value="piccola">Piccola</MenuItem>
              <MenuItem value="rondo">Rondo</MenuItem>
              <MenuItem value="sinfonia">Sinfonia</MenuItem>
              <MenuItem value="sonata">Sonata</MenuItem>
              <MenuItem value="symphonia">Symphonia</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    );
  }
};

export default StyleDropdown;
