import React from "react"

const StyleDropdown = (props) => {
    if (!props.artist) {
        return <h1>Loading...</h1>
    } 
    if (props.artist === "Bach") {
        return (
            <div className="container">
                <div className="Bach">
                    <select className="second-level-select" id="style" name="style" onChange={props.handleStyleDropdown}>
                        <option value="TODO1">TODO1</option>
                        <option value="TODO2">TODO2</option>
                        <option value="TODO3">TODO3</option>
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
                        <option value="bal">bal</option>
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
                        <option value="nocturne">nocturne</option>
                        <option value="nou">nou</option>
                        <option value="polonaise">polonaise</option>
                        <option value="pre">pre</option>
                        <option value="ron">ron</option>
                        <option value="scherzo">scherzo</option>
                        <option value="sonata">sonata</option>
                        <option value="tar">tar</option>
                        <option value="val">val</option>
                    </select>
                </div>
            </div>
        )
    } if (props.artist === "Mozart") {
        return (
            <div className="container">
                <div className="Mozart">
                        <select className="second-level-select" id="style" name="style" value="style" onChange={props.handleStyleDropdown}>
                            <option value="TODO1">TODO1</option>
                            <option value="TODO2">TODO2</option>
                        </select>
                </div>
            </div>
        )
    }
}
 
export default StyleDropdown;