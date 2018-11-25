import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import ChatCanvas from "../ChatCanvas";
import ChatText from "../ChatText";
import GuestList from "../GuestList";

class Lobby extends React.Component {
    constructor(props){
        super(props);
        this.state  = {
            playerName:"",
            roomName:'',
            roomList:[],
            guestList:[],
            chatTexts:[],
            chatText:"",
            ioClient:socketIOClient("http://localhost:3000/tictactoe")
        }
    }

    componentDidMount(){
        const { ioClient } = this.state;

        ioClient.on("connect", () => {
            ioClient.on("serverBroadcastMessage", (text) => {
                this.setState({
                    chatTexts:[...this.state.chatTexts, text]
                })
            });
            
            ioClient.on("updateGuestList", (guests) => {
                let guestList = Object.values(guests).map((g) => g.name);
                this.setState({
                    guestList:guestList
                })
            });

            ioClient.on("roomMessage", (message) => {
                this.setState({
                    chatTexts:[...this.state.chatTexts, message]
                });
            });

            ioClient.on("updateRoomList", (roomList) => {
                this.setState({
                    roomList:[...this.state.roomList, ...roomList]
                });
            });

            ioClient.on("maximumGuestReachedonRoom", (message) => {
                alert(message);
            })

            ioClient.on("passwordChallenge", () => {
                alert("please enter password");
            })
        });
    }
    
    componentDidUpdate() {
    }

    handleTextChanged = (e) => {
        this.setState({
            chatText:e.target.value
        })
    }

    handleTextTyped = (text) => {
        this.setState({
            chatTexts:[...this.state.chatTexts, this.state.chatText]
        });
        const { ioClient } = this.state;
        ioClient.emit("sendChatText", this.state.chatText);
    }

    onPlayerNameChanged = (e) => {
        this.setState({
            playerName:e.target.value
        })
    }

    onPlayerNameBtnClick = (e) => {
        e.preventDefault();
       
        const { ioClient } = this.state;
        ioClient.emit("join", this.state.playerName);
    }

    onRoomNameChanged = (e) => {
        this.setState({
            roomName:e.target.value
        })
    }

    onRoomPasswordChanged = (e) => {
        this.setState({
            roomPassword:e.target.value
        })
    }

    onRoomNameBtnClick = (e) => {
        e.preventDefault();
        const { ioClient } = this.state;
        ioClient.emit("createRoom", {name:this.state.roomName,password:this.state.roomPassword});
    }

    onJoinRoomBtnClick = (e) => {
        e.preventDefault();
        const { ioClient } = this.state;
        ioClient.emit("joinRoom", { name:this.state.roomName, password:this.state.roomPassword });
    }

    render(){
        return (
            <div>
                <div className="col-md-12 ">
                    <input type="text" value={this.state.playerName} onChange={this.onPlayerNameChanged}/>
                    <button onClick={this.onPlayerNameBtnClick}>Enter Name</button>
                </div>
                <div className="col-md-12">
                    <input type="text" value={this.state.roomName} onChange={this.onRoomNameChanged}/>
                    <input type="text" value={this.state.roomPassword} onChange={this.onRoomPasswordChanged}/>
                    <button onClick={this.onRoomNameBtnClick}>CreateRoom</button>
                    <button onClick={this.onJoinRoomBtnClick}>JoinRoom</button>
                </div>
                <ChatCanvas chatTexts={this.state.chatTexts} />
                <ChatText onTextChange={this.handleTextChanged} onTextTyped={this.handleTextTyped}/>
                <GuestList guests={this.state.guestList} />
            </div>
        )
    }
}

export default Lobby;