import React from "react"
import Select from '@material-ui/core/Select';



const StyleDropdown = (props) => {
    if (!props.artist) {
        return <h1>Loading...</h1>
    } 
    if (props.artist === "Bach") {
        return (
            <div className="container">
                <div className="Bach">
                    <select className="second-level-select" id="style" name="style" onChange={props.handleStyleDropdown}>
                        <option value="alla_breve">Alla Breve</option>
                        <option value="aria">Aria</option>
                        <option value="canzona">Canzona</option>
                        <option value="concerto">Concerto</option>
                        <option value="fantasy_and_fuga">Fantasy and Fuga</option>
                        <option value="fugue">Fugue</option>
                        <option value="kleines">Kleines</option>
                        <option value="passacaglia">Passacaglia</option>
                        <option value="pastorale">Pastorale</option>
                        <option value="pedale">Pedale</option>
                        <option value="sonata">Sonata</option>
                        <option value="toccata_and_fuga">Toccata and Fuga</option>
                    </select>
                </div>
            </div>
        )
    } if (props.artist === "Beethoven") {
        return (
            <div className="container">
                <div className="Beethoven">
                    <select className="second-level-select" id="style" name="style" onChange={props.handleStyleDropdown}>
                        <option value="allegretto">Allegretto</option>
                        <option value="andante">Andante</option>
                        <option value="bagatelles">Bagatelles</option>
                        <option value="canon">Canon</option>
                        <option value="fantast">Fantasy</option>
                        <option value="polonaise">Polonaise</option>
                        <option value="rondo">Rondo</option>
                    </select>
                </div>
            </div>
        )
    } if (props.artist === "Chopin") {
        return (
            <div className="container">
                <div className="Chopin">
                    <select className="second-level-select" id="style" name="style" onChange={props.handleStyleDropdown}> 
                        <option value="and">and</option>
                        <option value="ballade">Ballade</option>
                        <option value="bar">bar</option>
                        <option value="ber">ber</option>
                        <option value="bol">bol</option>
                        <option value="conc">conc</option>
                        <option value="eco">eco</option>
                        <option value="etu">etu</option>
                        <option value="fan">fan</option>
                        <option value="fun">fun</option>
                        <option value="imp">imp</option>
                        <option value="maz">maz</option>
                        <option value="nocturne">Nocturne</option>
                        <option value="nou">nou</option>
                        <option value="polonaise">Polonaise</option>
                        <option value="pre">pre</option>
                        <option value="ron">ron</option>
                        <option value="scherzo">Scherzo</option>
                        <option value="sonata">Sonata</option>
                        <option value="tar">tar</option>
                        <option value="val">val</option>
                        <option value="waltz">Waltz</option>
                    </select>
                </div>
            </div>
        )
    } if (props.artist === "Mozart") {
        return (
            <div className="container">
                <div className="Mozart">
                    <select className="second-level-select" id="style" name="style" value="style" onChange={props.handleStyleDropdown}>
                        <option value="alla_turca">Alla Turca</option>
                        <option value="diea_irae">Diea Irae</option>
                        <option value="eine_kleine">Eine Kleine</option>
                        <option value="menuett">Menuett</option>
                        <option value="piccola">Piccola</option>
                        <option value="rondo">Rondo</option>
                        <option value="sinfonia">Sinfonia</option>
                        <option value="sonata">Sonata</option>
                        <option value="symphonia">Symphonia</option>
                    </select>
                </div>
            </div>
        )
    }
}
 
export default StyleDropdown;