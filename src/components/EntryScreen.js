import React, { Component } from 'react'
import NavBar from "./NavBar"
import ImageGame from "./ImageGame";

class EntryScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NavBar />          
                <ImageGame />                
            </div>
        );
    }
}
export default EntryScreen;