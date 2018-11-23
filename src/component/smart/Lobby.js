import React, { Component } from "react";
import socketIO from "socket.io";
import ChatCanvas from "../ChatCanvas";
import ChatText from "../ChatText";
import GuestList from "../GuestList";

class Lobby extends React.Component {
    constructor(props){
        super(props);
    }

    componentWillMount(){

    }

    render(){
        return (
            <div>
                <ChatCanvas chatTexts={["hi", "hello"]} />
                <ChatText />
                <GuestList guests={["player1", "player2"]} />
            </div>
        )
    }
}

export default Lobby