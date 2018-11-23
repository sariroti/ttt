import React, { Component } from "react";
import ChatCanvas from "../ChatCanvas";
import ChatText from "../ChatText";
import GuestList from "../GuestList";

class Lobby extends React.Component {
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